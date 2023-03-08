import React from 'react'
import _escape from 'lodash-es/escape'
import get from 'lodash-es/get'
import intersection from 'lodash-es/intersection'
import pick from 'lodash-es/pick'
import orderBy from 'lodash-es/orderBy'
import difference from 'lodash-es/difference'
import clone from 'lodash-es/clone'
import isValid from 'date-fns/isValid'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import ShareClassFilter from './ShareClassFilter/ShareClassFilter'
import CalendarFilter from './CalendarFilter/CalendarFilter'
import RatingFilter from './RatingFilter/RatingFilter'
import AssetClassFilter from './AssetClassFilter/AssetClassFilter'
import addTables from './helpers/addTables'
import HARDCODED_LOOKUPS, { IClientGroup } from '../../config/HARDCODED_LOOKUPS'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import UserError from '../UserError/UserError'
import antiClickjack from '../../helpers/anti-clickjack'
import endpoints from '../../config/endpoints'
import { DDFData, MappedFund } from './Performance.data.interfaces'

export type IAssetClassLookup = Record<string, {assetClass:string}>;
export interface IAssetClassContent {
  name: string,
  fundProfileOverviewUrl:string,
  funds:MappedFund[]
}
export type IAssetClassContentMap = Record<string, IAssetClassContent>;
export type ClientGroupAssetClasses = Record<string, string>;
export type ClientGroupShareClasses = Record<string, string>;
export interface IContext {
  stateShareClassId:string
  stateAssetClasses:string[]
  stateCalendarTerm:string
  stateAssetClassContentMap:IAssetClassContentMap|null
  stateRating:string
  shareClassIdName:string
  performanceMonthEndAsOfDate:string
  performanceQuarterEndAsOfDate:string
  distributionsAsOfDate:string
  clientGroupShareClassesObjRef:React.MutableRefObject<ClientGroupShareClasses>
  areAllAssetClassesSelected:boolean
  clientGroupAssetClassesObjRef:React.MutableRefObject<ClientGroupAssetClasses>
  result: {
    message:React.ReactNode,
    tables: {
      performance: React.ReactNode[],
      distributions: React.ReactNode[],
      yields: React.ReactNode[]
    }
  }
  setStateShareClassId:React.Dispatch<React.SetStateAction<string>>
  setStateCalendarTerm:React.Dispatch<React.SetStateAction<string>>
  setStateRating:React.Dispatch<React.SetStateAction<string>>
  setStateAssetClasses:React.Dispatch<React.SetStateAction<string[]>>
}

/* ================================================== start Component ================================================== */
export default function Performance (props: {clientGroup:object}) {
  const shareClassesLookup = HARDCODED_LOOKUPS.shareClassesObj
  const assetClassesLookup = HARDCODED_LOOKUPS.assetClassesObj
  const clientGroupRef = React.useRef(props.clientGroup as IClientGroup)

  //
  /// Define default field values
  const searchParams = new URLSearchParams(window.location.search)
  const defaultCalendarTerm = _escape(searchParams.get('calendar') ?? '') || 'monthEnd'
  const defaultRating = _escape(searchParams.get('rating') ?? '') || '0'
  let defaultShareClassId = _escape(searchParams.get('share-class') ?? '') || clientGroupRef.current.shareClasses[0]
  let defaultAssetClasses = searchParams.getAll('asset-class').map(assetClass => _escape(assetClass))
  if (defaultShareClassId && !clientGroupRef.current.shareClasses.includes(defaultShareClassId)) {
    defaultShareClassId = ''
  }
  if (difference(defaultAssetClasses, clientGroupRef.current.assetClasses).length) {
    defaultAssetClasses = clientGroupRef.current.assetClasses
  }

  //
  /// Sanity checks
  defaultShareClassId = defaultShareClassId || clientGroupRef.current.shareClasses[0]
  defaultAssetClasses = defaultAssetClasses.length ? defaultAssetClasses : clientGroupRef.current.assetClasses

  //
  /// Define state
  const [stateShareClassId, setStateShareClassId] = React.useState(defaultShareClassId)
  const [stateAssetClasses, setStateAssetClasses] = React.useState(defaultAssetClasses)
  const [stateCalendarTerm, setStateCalendarTerm] = React.useState(defaultCalendarTerm)
  const [stateRating, setStateRating] = React.useState(defaultRating)
  const [stateFilteredAssetClassContentMap, setStateFilteredAssetClassContentMap] = React.useState<IAssetClassContentMap|null>(null)
  const [stateError, setStateError] = React.useState<Error|null>(null)
  const [stateIsLoaded, setStateIsLoaded] = React.useState<boolean|null>(null)

  //
  /// Define local variables
  const fundsAssetClassesLookupRef = React.useRef<IAssetClassLookup>({})
  const clientGroupShareClassesObjRef = React.useRef(pick(shareClassesLookup, clientGroupRef.current.shareClasses) as ClientGroupShareClasses)
  const clientGroupAssetClassesObjRef = React.useRef(pick(assetClassesLookup, clientGroupRef.current.assetClasses) as ClientGroupAssetClasses)
  const distributionsAsOfDateRef = React.useRef('')
  const performanceMonthEndAsOfDateRef = React.useRef('')
  const performanceQuarterEndAsOfDateRef = React.useRef('')
  const areAllAssetClassesSelected = stateAssetClasses.length < 1 || stateAssetClasses.length >= clientGroupRef.current.assetClasses.length
  const tblsContainerRef = React.useRef<HTMLTableElement>(null)
  const stateAssetClassContentMapRef = React.useRef<IAssetClassContentMap|null>(null)
  const fundCountRef = React.useRef(0)

  //
  ///
  React.useEffect(() => {
    antiClickjack()
  }, [])
  //
  /// Fetch and proces data
  React.useEffect(() => {
    //
    /// Define fund asset-classes lookup
    const lookupFunds = HARDCODED_LOOKUPS.funds
    for (const lookupFund of lookupFunds) {
      const accountingId = get(lookupFund, 'accountingId')
      fundsAssetClassesLookupRef.current[accountingId] = {
        assetClass: intersection(lookupFund.lookupAssetClasses, clientGroupRef.current.assetClasses)[0]
      }
    }

    setStateIsLoaded(false)
    setStateFilteredAssetClassContentMap(null) // reset
    fetchFundData(stateShareClassId)
      .then(ddfData => {
        const contentMapping = mapContent(ddfData, fundsAssetClassesLookupRef.current, clientGroupAssetClassesObjRef.current)
        stateAssetClassContentMapRef.current = contentMapping.contentMap // setStateAssetClassContentMap(contentMapping.contentMap)
        performanceMonthEndAsOfDateRef.current = contentMapping.performanceMonthEndAsOfDate
        performanceQuarterEndAsOfDateRef.current = contentMapping.performanceQuarterEndAsOfDate
        distributionsAsOfDateRef.current = contentMapping.distributionsAsOfDate

        //
        // Set filtered data
        const contentMapFiltering = filterContent(stateAssetClassContentMapRef.current, stateAssetClasses, stateRating, stateCalendarTerm)
        setStateFilteredAssetClassContentMap(contentMapFiltering.contentMap)
        fundCountRef.current = contentMapFiltering.count
      })
      .catch((error:Error|null) => {
        setStateError(error)
      })
      .finally(() => {
        setStateIsLoaded(true)
      })
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [stateShareClassId]) // Only dependency needed

  //
  /// Filter data
  React.useEffect(() => {
    if (stateAssetClassContentMapRef.current) {
      const contentMapFiltering = filterContent(stateAssetClassContentMapRef.current, stateAssetClasses, stateRating, stateCalendarTerm)
      setStateFilteredAssetClassContentMap(contentMapFiltering.contentMap) // updating filered-map...
      fundCountRef.current = contentMapFiltering.count
    }
  },
  [stateAssetClasses, stateRating, stateCalendarTerm]) // end useEffect

  //
  ///
  React.useEffect(() => {
    if (tblsContainerRef.current) {
      if (tblsContainerRef.current.querySelectorAll('[data-toggle="popover"]').length) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        window.jQuery('[data-toggle="popover"]').popover({ container: '.wfam' }) // { boundary: 'window' })
      }
    }
  }, [stateFilteredAssetClassContentMap]) // ...updated filtered-map

  //
  ///
  const context = React.useMemo<IContext>(() => ({
    stateShareClassId,
    stateAssetClasses,
    stateCalendarTerm,
    stateRating,
    shareClassIdName: stateShareClassId === 'I' ? 'Inst' : stateShareClassId,
    stateAssetClassContentMap: stateFilteredAssetClassContentMap,
    performanceMonthEndAsOfDate: performanceMonthEndAsOfDateRef.current,
    performanceQuarterEndAsOfDate: performanceQuarterEndAsOfDateRef.current,
    distributionsAsOfDate: distributionsAsOfDateRef.current,
    areAllAssetClassesSelected,
    result: {
      message: <></>,
      tables: {
        performance: [],
        distributions: [],
        yields: []
      }
    },
    clientGroupShareClassesObjRef,
    setStateShareClassId,
    setStateCalendarTerm,
    setStateRating,
    clientGroupAssetClassesObjRef,
    setStateAssetClasses
  }), [stateShareClassId, stateAssetClasses, stateCalendarTerm, stateRating, areAllAssetClassesSelected, stateFilteredAssetClassContentMap])

  if (stateError) {
    return <UserError error={stateError} />
  } // else
  if (stateFilteredAssetClassContentMap === null) {
    // return <LoadingSpinner />
    context.result.message = <>
      <LoadingSpinner />
      <h2 className="h3">... matching items</h2>
    </>
  } else {
    context.result.message = <h2 className="h3">{fundCountRef.current} matching items</h2>
  } // else

  // Add tables
  addTables(context)

  return (
    <div className='row'>
      <>
      {renderNavTabs()}
      {renderFilters(context)}
      {renderResults(context, tblsContainerRef, stateIsLoaded)}
    </>
    </div>
  )
}

/* ==================================================  end Component  ================================================== */
//
///
function renderFilters (context:IContext) {
  return (
    <>
    { /* start .col-12 */ }
      <ShareClassFilter
        allShareClasses={context.clientGroupShareClassesObjRef.current}
        defaultShareClassId={context.stateShareClassId}
        updateStateShareClassId={context.setStateShareClassId}
      />{ /* end .col-12 */ }
      { /* start .col-12 */ }
      <CalendarFilter
        selectedCalendar={context.stateCalendarTerm}
        updateStateCalendar={context.setStateCalendarTerm}
      />{ /* end .col-12 */ }
      { /* start .col-12 */ }
      <RatingFilter
        selectedRating={context.stateRating}
        updateStateRating={context.setStateRating}
      />{ /* end .col-12 */ }
      { /* start .col-12 */ }
      <AssetClassFilter
        isAllChecked={context.areAllAssetClassesSelected}
        selectedAssetClasses={context.stateAssetClasses}
        allAssetClassesObj={context.clientGroupAssetClassesObjRef.current}
        updateStateSelectedAssetClasses={context.setStateAssetClasses}
      />{ /* end .col-12 */ }
    </>
  )
}
function renderNavTabs () {
  return (
    <div className="col-12">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="performance-tab" data-toggle="tab" href="#performance" data-tpid="performance" role="tab" aria-controls="performance" aria-selected="true">Performance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="yields-tab" data-toggle="tab" href="#yields" data-tpid="yields" role="tab" aria-controls="yields" aria-selected="false">Daily prices & yields</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="distributions-tab" data-toggle="tab" href="#distributions" data-tpid="distributions" role="tab" aria-controls="distributions" aria-selected="false">Distributions</a>
        </li>
      </ul>
    </div>
  )
}
function renderResults (context:IContext, tblsContainerRef:React.RefObject<HTMLTableElement>, stateIsLoaded:boolean|null) {
  return (
    <div className="row">
      <div className="col-12">
        <p>{/* Intentionally empty. Some wfam styles were removed, the h2 title below is supposed to keep its top-margin but it's being removed by a first-child no-top-margin rule somewhere */}</p>
        {context.result.message}
      </div>
      <div className="tab-content col-12" ref={tblsContainerRef}>
        <div className={'row tab-pane fade show active' + (!stateIsLoaded ? ' fade-out' : '')} id="performance" role="tabpanel" aria-labelledby="performance-tab">
          {context.result.tables.performance}
        </div>
        <div className={'row tab-pane fade' + (!stateIsLoaded ? ' fade-out' : '')} id="yields" role="tabpanel" aria-labelledby="yields-tab">
          {context.result.tables.yields}
        </div>
        <div className={'row tab-pane fade' + (!stateIsLoaded ? ' fade-out' : '')} id="distributions" role="tabpanel" aria-labelledby="distributions-tab">
          {context.result.tables.distributions}
        </div>
      </div>
    </div>
  )
}

//
/// Helpers
/**
 *
 * @param shareClassId
 * @returns
 */
async function fetchFundData (shareClassId:string):Promise<DDFData> {
  const response = await fetch(`${endpoints.advancedFundSearch}/${shareClassId}`)
  const fundSearch = await response.json() as Promise<DDFData>
  return fundSearch
}

/**
 *
 * @param ddfData
 * @param fundsAssetClassesLookup
 * @param clientGroupAssetClassesObj
 * @returns
 */
function mapContent (ddfData:DDFData, fundsAssetClassesLookup:IAssetClassLookup, clientGroupAssetClassesObj:ClientGroupAssetClasses) {
  let distributionsAsOfDate = ''
  let performanceMonthEndAsOfDate = ''
  let performanceQuarterEndAsOfDate = ''
  let contentMap:IAssetClassContentMap = { }
  const dateFormat = 'M-d-yy'
  const safeFormat = (date: Date, dateFormat: string): string => {
    return isValid(date) ? format(date, dateFormat) : '-'
  }
  for (const fund of ddfData.SearchResults.Result) {
    const accountingId = get(fund, 'Performance.FundAccountingId')
    const assetClass = fundsAssetClassesLookup[accountingId].assetClass

    if (!assetClass) {
      continue
    }
    if (!Object.prototype.hasOwnProperty.call(contentMap, assetClass)) {
      contentMap[assetClass] = { name: '', funds: [], fundProfileOverviewUrl: '' }
    }

    performanceMonthEndAsOfDate = safeFormat(parseISO(get(fund, 'Performance.Nav.MonthlyReturns.@AsOfDate')), dateFormat)
    performanceQuarterEndAsOfDate = safeFormat(parseISO(get(fund, 'Performance.Nav.QuarterlyReturns.@AsOfDate')), dateFormat)
    distributionsAsOfDate = safeFormat(parseISO(get(fund, 'PricesYields.DailyPricingAsOfDate')), dateFormat)

    contentMap[assetClass].name = get(clientGroupAssetClassesObj, fundsAssetClassesLookup[accountingId].assetClass)
    contentMap[assetClass].fundProfileOverviewUrl = ddfData.FundProfilePageUrl
    contentMap[assetClass].funds.push({
      accountingId,
      profileOverviewUrl: ddfData.FundProfilePageUrl,
      name: get(fund, 'Performance.FundName'),
      shareClass: get(fund, 'Performance.ShareClass') as string,
      ticker: get(fund, 'Performance.Ticker'),
      inceptionDate: safeFormat(
        parseISO(get(fund, 'Performance.ClassInceptionDate')),
        dateFormat
      ),
      secYieldAsOfDate: get(fund, 'Performance.SECYieldsAsOfDate'),
      nonSecYieldAsOfDate: get(fund, 'Performance.NonSECYieldsAsOfDate'),
      fundStatsAsOfDate: get(fund, 'PricesYields.FundStatsAsOfDate'),
      performance: {
        showNav: get(fund, 'Performance.Nav.ShowNav') === 'Y',
        showPop: get(fund, 'Performance.Nav.ShowPop') === 'Y',
        monthEnd: {
          NAV: {
            threeMonth: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyThreeMonthCumulative.LoadWaived'),
            ytd: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyYearToDateCumulative.LoadWaived'),
            oneYear: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyOneYearCumulative.LoadWaived'),
            threeYear: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyThreeYearAnnualized.LoadWaived'),
            fiveYear: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyFiveYearAnnualized.LoadWaived'),
            tenYear: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyTenYearAnnualized.LoadWaived'),
            sinceInception: get(fund, 'Performance.Nav.MonthlyReturns.MonthlySinceInception.LoadWaived')
          },
          POP: {
            threeMonth: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyThreeMonthCumulative.LoadApplied'),
            ytd: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyYearToDateCumulative.LoadApplied'),
            oneYear: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyOneYearCumulative.LoadApplied'),
            fiveYear: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyFiveYearAnnualized.LoadApplied'),
            tenYear: get(fund, 'Performance.Nav.MonthlyReturns.MonthlyTenYearAnnualized.LoadApplied'),
            sinceInception: get(fund, 'Performance.Nav.MonthlyReturns.MonthlySinceInception.LoadApplied')
          },
          weightedAverageMaturity: get(fund, 'Performance.WeightedAverageMaturity'),
          morningstar: {
            rating: get(fund, 'Performance.Morningstar.RatingOverall', 0) as number,
            totalFunds: get(fund, 'Performance.Morningstar.TotalNumFunds', 0) as number,
            category: get(fund, 'Performance.Morningstar.CategoryName', '')
          },
          expenseRatios: {
            gross: (get(fund, 'Performance.GrossExpenseRatio.$')).replace(/\.(\d\d)0$/, '.$1'),
            net: (get(fund, 'Performance.NetExpenseRatio.$')).replace(/\.(\d\d)0$/, '.$1'),
            contractEndDate: safeFormat(parseISO(get(fund, 'Performance.FeeWaiverContractEndDate')), dateFormat)
          }
        },
        quarterEnd: {
          NAV: {
            threeMonth: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyThreeMonthCumulative.LoadWaived'),
            ytd: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyYearToDateCumulative.LoadWaived'),
            oneYear: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyOneYearCumulative.LoadWaived'),
            threeYear: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyThreeYearAnnualized.LoadWaived'),
            fiveYear: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyFiveYearAnnualized.LoadWaived'),
            tenYear: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyTenYearAnnualized.LoadWaived'),
            sinceInception: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlySinceInception.LoadWaived')
          },
          POP: {
            threeMonth: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyThreeMonthCumulative.LoadApplied'),
            ytd: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyYearToDateCumulative.LoadApplied'),
            oneYear: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyOneYearCumulative.LoadApplied'),
            fiveYear: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyFiveYearAnnualized.LoadApplied'),
            tenYear: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlyTenYearAnnualized.LoadApplied'),
            sinceInception: get(fund, 'Performance.Nav.QuarterlyReturns.QuarterlySinceInception.LoadApplied')
          },
          weightedAverageMaturity: get(fund, 'Performance.WeightedAverageMaturityQuarterEnd.WeightedAverageMaturity', ''),
          morningstar: {
            rating: get(fund, 'Performance.MorningstarQuarterEnd.RatingOverall', 0) as number,
            totalFunds: get(fund, 'Performance.MorningstarQuarterEnd.TotalNumFunds', 0) as number,
            category: get(fund, 'Performance.MorningstarQuarterEnd.CategoryName', '')
          },
          expenseRatios: {
            gross: (get(fund, 'Performance.GrossExpenseRatioQuarterEnd.GrossExpenseRatio.$')).replace(/\.(\d\d)0$/, '.$1'),
            net: (get(fund, 'Performance.NetExpenseRatioQuarterEnd.NetExpenseRatio.$')).replace(/\.(\d\d)0$/, '.$1'),
            contractEndDate: safeFormat(parseISO(get(fund, 'Performance.FeeWaiverContractEndDate')), dateFormat)
          }
        }
      },
      distributions: {
        useDividends: get(fund, 'Distributions.useDividends') === 'Y',
        useCapGains: get(fund, 'Distributions.useCapGains') === 'Y',
        dividends: {
          income: get(fund, 'Distributions.DividendData.Income', ''),
          recordDate: get(fund, 'Distributions.DividendData.DivRecordDate', ''),
          exDate: get(fund, 'Distributions.DividendData.DivExDate', ''),
          payableDate: get(fund, 'Distributions.DividendData.DivPayableDate', ''),
          reinvestPrice: get(fund, 'Distributions.DividendData.DivReinvestPrice', '')
        },
        capGains: {
          shortTerm: get(fund, 'Distributions.CapGainsData.ShortTermCapitalGain', ''),
          longTerm: get(fund, 'Distributions.CapGainsData.LongTermCapitalGain', ''),
          recordDate: get(fund, 'Distributions.CapGainsData.CapGainRecordDate', ''),
          exDate: get(fund, 'Distributions.CapGainsData.CapGainExDate', ''),
          payableDate: get(fund, 'Distributions.CapGainsData.CapGainPayableDate', ''),
          reinvestPrice: get(fund, 'Distributions.CapGainsData.CapGainReinvestPrice', '')
        }
      },
      yields: {
        NAV: get(fund, 'PricesYields.DailyNAV'),
        dailyChange: {
          dollar: get(fund, 'PricesYields.DailyNavChange'),
          percent: get(fund, 'PricesYields.PercChangeNav')
        },
        ytdReturn: get(fund, 'PricesYields.YearToDateReturn'),
        oneDay: get(fund, 'PricesYields.OneDayYield', ''),
        sevenDayCurrent: get(fund, 'Performance.SevenDayCurrentYield', ''),
        sevenDayEffective: get(fund, 'Performance.SevenDayEffectiveYield', ''),
        sevenDayPrewaiver: get(fund, 'Performance.SevenDyPreWaiverYield', ''),
        thirtyDayCurrent: get(fund, 'PricesYields.ThirtyDayCurrentYield', ''),
        thirtyDaySec: get(fund, 'PricesYields.ThirtyDaySECYield', ''),
        thirtyDayEffective: get(fund, 'PricesYields.ThirtyDayEffectiveYield', ''),
        thirtyDaySecUnsubsidized: get(fund, 'PricesYields.ThirtyDaySECunsubsidizedYield', ''),
        effectiveDuration: get(fund, 'PricesYields.AverageEffectiveDuration', ''),
        dailyFactor: get(fund, 'PricesYields.DailyDistFactor', ''),
        distributionYield: get(fund, 'PricesYields.DistYieldDaily', '')
      }
    })
  } // end for

  contentMap = sortContent(contentMap, 'all')
  return {
    contentMap,
    performanceMonthEndAsOfDate,
    performanceQuarterEndAsOfDate,
    distributionsAsOfDate
  }
}

/**
 *
 * @param content
 * @param assetClassId
 * @returns
 */
function sortContent (content:IAssetClassContentMap, assetClassId:string):IAssetClassContentMap {
  const sortBy = 'name'
  const sortOrder = true
  if (assetClassId === 'all') {
    for (const assetClassId in content) {
      content[assetClassId].funds = orderBy(
        content[assetClassId].funds,
        [sortBy],
        [sortOrder]
      )
    }
  } else if (Object.prototype.hasOwnProperty.call(content, assetClassId)) {
    content[assetClassId].funds = orderBy(
      content[assetClassId].funds,
      [sortBy],
      [sortOrder]
    )
  }
  return content
}

/**
 *
 * @param contentMap
 * @param stateAssetClasses
 * @param stateRating
 * @param stateCalendarTerm
 * @returns
 */
function filterContent (contentMap:IAssetClassContentMap, stateAssetClasses:string[], stateRating:string, stateCalendarTerm:string):{count:number, contentMap:IAssetClassContentMap} {
  let count = 0
  const filteredContentMap:IAssetClassContentMap = {}

  for (const assetClassId in contentMap) {
    if (stateAssetClasses.includes(assetClassId)) {
      filteredContentMap[assetClassId] = clone(contentMap[assetClassId])
      if (parseInt(stateRating) > 0) {
        filteredContentMap[assetClassId].funds = contentMap[assetClassId].funds
          .filter(fund => {
            if (stateCalendarTerm === 'monthEnd') {
              return fund.performance.monthEnd.morningstar.rating >= parseInt(stateRating)
            } else {
              return fund.performance.quarterEnd.morningstar.rating >= parseInt(stateRating)
            }
          })
      }
      count += filteredContentMap[assetClassId].funds.length
    }
  }

  return {
    count,
    contentMap: filteredContentMap
  }
}
