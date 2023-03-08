import React from 'react'
import endpoints from '../../config/endpoints'
import get from 'lodash-es/get'
import findIndex from 'lodash-es/findIndex'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import useFetch from '../../hooks/useFetch'
import tableConfig from './table-config'
import { isValidTableType, TableTypesEnum } from './table-config/table-types-by-report-id'
import consoleError from '../../utils/console-error'
import currencyFormatter from '../../utils/currency-formatter'
import nineDecimalFormatter from '../../utils/nine-decimal-formatter'
import twoDecimalFormatter from '../../utils/two-decimal-formatter'
import { DDFFundClass, RateReportData, RRDSection, RRDSectionRow, RRDSectionTable } from './RateReport.interfaces'
import { DataItemName } from './enums'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import UserError from '../UserError/UserError'
import HARDCODED_LOOKUPS from '../../config/HARDCODED_LOOKUPS'
import antiClickjack from '../../helpers/anti-clickjack'

const _shareClassesLookup = HARDCODED_LOOKUPS.shareClassesObj // FIX: Don't use hardcoded values. These items should come from the CMS

/* ================================================== start Component ================================================== */
export default function RateReport (props: {pageId:string}) {
  //
  /// Define state
  const [stateRateReportData, stateIsLoading, stateError] = useFetch<RateReportData>(`${endpoints.rateReports}`)

  React.useEffect(() => {
    antiClickjack()
  }, [])

  if (stateIsLoading) {
    return <LoadingSpinner />
  } // else
  if (stateError) {
    consoleError(stateError)
    return <UserError error={stateError} customMessage="[Error retrieving data]" />
  } // else
  if (!stateRateReportData) {
    return <LoadingSpinner />
  } // else
  if (stateRateReportData.rateReportTableRows) {
    /**
     * Stagecoach rate-report
     */
    const tableData:RRDSectionTable = {
      caption: null,
      rows: stateRateReportData.rateReportTableRows
    }
    const asOfDate = get(tableData, 'rows[0].historicalData.Fund.@AsOfDate')
    const parsedAsOfDate = !asOfDate || asOfDate === 'error' ? '-' : format(parseISO(asOfDate), 'M-d-yy')
    return (
      <>
      <h2>Stagecoach Sweep <span>as of {parsedAsOfDate}</span></h2>
      { renderSectionTable(tableData, TableTypesEnum.STAGECOACH_SWEEP) }
      </>
    )
  } // else
  /**
   * Default Rate-report
   */
  return (
    <>
    {stateRateReportData.sections.map((sectionData:RRDSection, index:number) => {
      const asOfDate = get(sectionData, 'rows[0].rows[0].historicalData.Fund.@AsOfDate')
      const parsedAsOfDate = !asOfDate || asOfDate === 'error' ? '-' : format(parseISO(asOfDate), 'M-d-yy')
      return (
        <React.Fragment key={index}>
        <h2>{sectionData.caption} <span>as of {parsedAsOfDate}</span></h2>
        {
          sectionData.rows.map((tableData:RRDSectionTable) => {
            const inputTableType = get(tableData, 'type', tableConfig.tableTypesByReportId[props.pageId])
            if (!isValidTableType(inputTableType)) {
              return <>Error processing table</>
            }
            const tableType = get(tableData, 'type', tableConfig.tableTypesByReportId[props.pageId]) as TableTypesEnum
            return renderSectionTable(tableData, tableType)
          })
        }
      </React.Fragment>
      )
    })}
    </>
  )
}
/* ==================================================  end Component  ================================================== */

//
/// Helpers
/**
 *
 * @param rowData
 * @returns
 */
function mapDataItem (rowData:RRDSectionRow):Map<string, string> {
  const historicalData = rowData.historicalData
  const taNumber = get(historicalData, 'TANumber')
  const taNumberStr = (taNumber || '') as string
  const dailyWeightedAverageMaturity:string = get(historicalData, 'HistoricalYields.HistoricalItem.DailyPricing.DailyWeightedAverageMaturity', '')
  const totalReturnsAsOfDate:string = get(historicalData, 'HistoricalYields.HistoricalItem.Returns.@AsOfDate', '')
  const parsedDailyWeightedAverageMaturity = dailyWeightedAverageMaturity ? dailyWeightedAverageMaturity.toString() + ' days' : '-'
  const parsedTotalReturnsAsOfDate = !totalReturnsAsOfDate || totalReturnsAsOfDate === 'error' ? '-' : format(parseISO(totalReturnsAsOfDate), 'M-d-yy')
  const fundClassIndex = findIndex(get(historicalData, 'Fund.Classes.FundClass', []) as DDFFundClass[], { TaNumber: taNumber })
  const shareClassId = get(historicalData, 'ShareClass')
  const fundName = get(historicalData, 'Fund.FundName')
  const fundNameShareClassName = `${fundName} - ${shareClassId}`
  const customTradingDeadlines = get(rowData, 'customTradingDeadlines', [])
  // Documents
  const factSheetUrls = get(rowData, 'factSheetUrls', []) as string[]
  const summaryProspectusUrls = get(rowData, 'summaryProspectusUrls', []) as string[]
  const prospectusUrls = get(rowData, 'prospectusUrls', []) as string[]
  const annualReportUrls = get(rowData, 'annualReportUrls', []) as string[]

  return new Map<string, string>([
    [DataItemName.TANUMBER, taNumberStr],
    [DataItemName.SHARECLASSID, shareClassId],
    [DataItemName.SHARECLASSNAME, get(_shareClassesLookup, shareClassId) ?? '-'],
    [DataItemName.FUNDNAME, get(historicalData, 'Fund.FundName', '-')],
    [DataItemName.FUNDNAME_SHARECLASSNAME, fundNameShareClassName],
    [DataItemName.DAILYWEIGHTEDAVERAGEMATURITY, parsedDailyWeightedAverageMaturity],
    [DataItemName.TOTALRETURNSASOFDATE, parsedTotalReturnsAsOfDate],
    [DataItemName.NETFUNDASSETS, currencyFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.DailyPricing.DailyFundLevelNetAssets', 0) as number)],
    [DataItemName.CUSTOMTRADINGDEADLINES, formatTradingDeadlines(customTradingDeadlines)],
    [DataItemName.FACTSHEETURL, factSheetUrls[0]],
    [DataItemName.SUMMARYPROSPECTUSURL, summaryProspectusUrls[0]],
    [DataItemName.PROSPECTUSURL, prospectusUrls[0]],
    [DataItemName.ANNUALREPORTURL, annualReportUrls[0]],
    [DataItemName.DAILYFACTOR, nineDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.DistributionData.DailyDistFactor', 0) as number)],
    [DataItemName.ONEDAYYIELD, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.NonSECYields.OneDayYield', 0) as number)],
    [DataItemName.SEVENDAYCURRENTYIELD, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.NonSECYields.SevenDayCurrentYield', 0) as number)],
    [DataItemName.SEVENDAYPREWAIVERYIELD, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.NonSECYields.SevenDyPreWaiverYield', 0) as number)],
    [DataItemName.SEVENDAYEFFECTIVEYIELD, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.NonSECYields.SevenDayEffectiveYield', 0) as number)],
    [DataItemName.THIRTYDAYCURRENTYIELD, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.NonSECYields.ThirtyDayCurrentYield', 0) as number)],
    [DataItemName.THIRTYDAYEFFECTIVEYIELD, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.NonSECYields.ThirtyDayEffectiveYield', 0) as number)],
    [DataItemName.THIRTYDAYSECYIELD, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.SECYields.ThirtyDaySECYield', 0) as number)],
    [DataItemName.MININITIALINVESTMENT, currencyFormatter.format(get(historicalData, `Fund.Classes.FundClass.${fundClassIndex}.AccountMinimum`, 0) as number)],
    [DataItemName.GROSSEXPENSERATIO, twoDecimalFormatter.format(get(historicalData, `Fund.Classes.FundClass.${fundClassIndex}.GrossExpenseRatio.$`, 0) as number)],
    [DataItemName.NETEXPENSERATIO, twoDecimalFormatter.format(get(historicalData, `Fund.Classes.FundClass.${fundClassIndex}.NetExpenseRatio.$`, 0) as number)],
    [DataItemName.TICKER, get(historicalData, `Fund.Classes.FundClass.${fundClassIndex}.Ticker`, '-') as string],
    [DataItemName.CUSIP, get(historicalData, `Fund.Classes.FundClass.${fundClassIndex}.CUSIP`, '-') as string],
    [DataItemName.AVERAGEEFFECTIVEDURATION, twoDecimalFormatter.format(get(historicalData, 'FundStats.AverageEffectiveDuration', 0) as number)],
    [DataItemName.DAILYNAV, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.DailyPricing.DailyNAV', 0) as number)],
    [DataItemName.MONTHLYONEYEARCUMULATIVE, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.Returns.MonthlyReturns.MonthlyOneYearCumulative.LoadWaived', 0) as number)],
    [DataItemName.MONTHLYFIVEYEARANNUALIZED, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.Returns.MonthlyReturns.MonthlyFiveYearAnnualized.LoadWaived', 0) as number)],
    [DataItemName.MONTHLYTENYEARANNUALIZED, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.Returns.MonthlyReturns.MonthlyTenYearAnnualized.LoadWaived', 0) as number)],
    [DataItemName.MONTHLYSINCEINCEPTION, twoDecimalFormatter.format(get(historicalData, 'HistoricalYields.HistoricalItem.Returns.MonthlyReturns.MonthlySinceInception.LoadWaived', 0) as number)]
  ])
}
/**
 *
 * @param tableData
 * @param tableType
 * @returns
 */
function renderSectionTable (tableData:RRDSectionTable, tableType:TableTypesEnum):React.ReactNode {
  let parsedNetFundAssets = ''
  let parsedTotalReturnsAsOfDate = ''
  const tableRowsData =
    tableData.rows.map(rowData => {
      const parsedDataMap = mapDataItem(rowData)
      parsedNetFundAssets = parsedDataMap.get(DataItemName.NETFUNDASSETS) ?? ''
      parsedTotalReturnsAsOfDate = parsedDataMap.get(DataItemName.TOTALRETURNSASOFDATE) ?? ''

      return renderSectionTableRow(parsedDataMap, tableType)
    }) // end map()
  const tableCaptionEl = tableType === TableTypesEnum.STAGECOACH_SWEEP
    ? null
    : <h3 className="h4">{tableData.caption} {renderNetFundAssets(tableData, parsedNetFundAssets)}</h3>

  return (
    <div className="table-responsive" key={tableData.caption}>
      <table className="table table-sm">
        <caption>
        {tableCaptionEl}
        </caption>
        <thead>
          {renderSectionTableHeaderRow(tableType, parsedTotalReturnsAsOfDate)}
        </thead>
        <tbody>
          {tableRowsData}
        </tbody>
      </table>
    </div>
  )
}
/**
 *
 * @param parsedDataMap
 * @param tableType
 * @returns
 */
function renderSectionTableRow (parsedDataMap:Map<string, string>, tableType:TableTypesEnum):React.ReactNode {
  if (!tableConfig.tableHeaders.has(tableType)) {
    consoleError('Table-type not found:', tableType)
    return <React.Fragment key={parsedDataMap.get(DataItemName.TANUMBER)}>Error processing table rows</React.Fragment>
  } // else
  const tableHeaders = tableConfig.tableHeaders.get(tableType)
  return (
    <tr key={parsedDataMap.get(DataItemName.TANUMBER)}>
      {tableHeaders?.map((colName:string, index:number) => {
        const capColName = colName.toUpperCase() as DataItemName
        if ([DataItemName.FACTSHEETURL, DataItemName.SUMMARYPROSPECTUSURL, DataItemName.PROSPECTUSURL, DataItemName.ANNUALREPORTURL].includes(capColName)) {
          const url = parsedDataMap.get(capColName)
          const name = parsedDataMap.get(DataItemName.FUNDNAME_SHARECLASSNAME) ?? parsedDataMap.get(DataItemName.SHARECLASSNAME) ?? ''
          return (
            <td key={index}>
              <a href={url} target="_blank" aria-label={`View ${tableConfig.tableHeadersConfig[capColName].label} of ${name} (PDF)`} rel="noreferrer">
                <span aria-hidden="true" className="far fa-file-pdf fa-lg"></span>
              </a>
            </td>
          )
        } else {
          return <td key={index}>{parsedDataMap.get(capColName)}</td>
        }
      })}
    </tr>
  )
}
/**
 *
 * @param tableType
 * @param parsedTotalReturnsAsOfDate
 * @returns
 */
function renderSectionTableHeaderRow (tableType:TableTypesEnum, parsedTotalReturnsAsOfDate:string):React.ReactNode {
  if (!tableConfig.tableHeaders.has(tableType)) {
    consoleError('Table-type not found:', tableType)
    return <>Error processing table rows</>
  } // else
  const tableHeaders = tableConfig.tableHeaders.get(tableType)

  return (
    <tr>
      {tableHeaders?.map((colName:string, index:number) => {
        const capColName = colName.toUpperCase()
        const className = tableConfig.tableHeadersConfig[capColName].width?.toString() ?? ''
        if (capColName === DataItemName.MONTHLYONEYEARCUMULATIVE) {
          return <th key={index} className={className ? `w-${className}` : ''} scope="col" style={{ position: 'relative' }}>
            <br/><br/>
            {tableConfig.tableHeadersConfig[capColName].label}
            <span style={{ position: 'absolute', left: 0, bottom: '45%', right: '-350%', textAlign: 'center', lineHeight: 1.25 }}>
              Total Returns (%)<br/>as of {parsedTotalReturnsAsOfDate}
            </span>
          </th>
        } else {
          return <th key={index} className={className ? `w-${className}` : ''} scope="col">{tableConfig.tableHeadersConfig[capColName].label}</th>
        }
      })}
    </tr>
  )
}
/**
 *
 * @param sectionTable
 * @param parsedNetFundAssets
 * @returns
 */
function renderNetFundAssets (sectionTable:RRDSectionTable, parsedNetFundAssets:string):React.ReactNode {
  if (sectionTable.type === TableTypesEnum.STAGECOACH_SWEEP) {
    return <></>
  }
  return <span className="h5">(Net fund assets: {parsedNetFundAssets})</span>
}
/**
 *
 * @param tradingDeadlines
 * @returns
 */
function formatTradingDeadlines (tradingDeadlines:string[]):string {
  /* Date-times coming in the correct order from CMS
  tradingDeadlines.sort((a, b) => a.localeCompare(b)) // sort asc
  */
  return tradingDeadlines.join('/')
}

//
///
