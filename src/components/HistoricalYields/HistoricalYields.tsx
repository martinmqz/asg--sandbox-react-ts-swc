import React from 'react'
import antiClickjack from '../../helpers/anti-clickjack'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import UserError from '../UserError/UserError'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import getUrlFragmentParam from '../../utils/get-url-fragment-param'
import useFetch from '../../hooks/useFetch'
import { DDFData, IContext, IDropdownOption } from './HistoricalYields.interfaces'
import endpoints from '../../config/endpoints'
import tableToCSV from '../../utils/table-to-csv'

const _taNumber = getUrlFragmentParam('taNumber')
const _data = {
  tooltips: {
    WEIGHTED_AVERAGE_MATURITY: "Weighted average maturity (WAM): An average of the effective maturities of all securities held in the portfolio, weighted by each security's percentage of total investments. The maturity of a portfolio security is the period remaining until the date on which the principal amount is unconditionally required to be paid, or in the case of a security called for redemption, the date on which the redemption payment is unconditionally required to be made. WAM calculations allow for the maturities of certain securities with demand features or periodic interest-rate resets to be shortened. WAM is a way to measure a fund's sensitivity to potential interest-rate changes."
  }
}
/* ================================================== start Component ================================================== */
export default function HistoricalYields () {
  const [stateTANumber, setStateTANumber] = React.useState(_taNumber)
  const [stateDDFData, stateIsLoading, stateError] = useFetch<DDFData>(`${endpoints.historicalYields}/${stateTANumber}`)
  const refHhistYieldsTable = React.useRef<HTMLTableElement>(null)
  const pathNameTrailingSlash = (location.pathname.endsWith('/')) ? '' : '/'
  const [stateMenuOptions, stateIsFetchMenuLoading, stateFetchMenuError] = useFetch<IDropdownOption[]>(`${location.pathname}${pathNameTrailingSlash}${endpoints.historicalYieldsDropdownOptions}`)
  const refContent = React.useRef<IContext>({})

  //
  ///
  React.useEffect(() => {
    antiClickjack()
    window.addEventListener('hashchange', e => { handleHashChange(e, setStateTANumber) })
  }, [])
  React.useEffect(() => {
    if (refHhistYieldsTable.current) {
      if (refHhistYieldsTable.current.querySelectorAll('[data-toggle="popover"]').length) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        window.jQuery('[data-toggle="popover"]').popover({ container: '.wfam' })
      }
    }
  }, [stateDDFData])
  if (stateError) {
    return <UserError error={stateError} customMessage="Error: Please check the taNumber is correct and try again" />
  } // else
  if (stateIsLoading || !stateDDFData) {
    refContent.current.status = <LoadingSpinner />
    refContent.current.heading = <></>
    refContent.current.menu = renderFundMenu(new Array<IDropdownOption>()) // Empty array
  } else {
    refContent.current.status = <></>
    refContent.current.heading = <>{stateDDFData.HistoricalYieldData.Fund.FundName} - {stateDDFData.HistoricalYieldData.ShareClass === 'I' ? 'Inst' : stateDDFData.HistoricalYieldData.ShareClass}</>
    refContent.current.asOfDate = <>{format(parseISO(stateDDFData.HistoricalYieldData.DividendData['@AsOfDate']), 'M-d-yy')}</>
    refContent.current.dividendIncome = <>{stateDDFData.HistoricalYieldData.DividendData.Income}</>
    refContent.current.rows = <>
      {
        stateDDFData.HistoricalYieldData.HistoricalYields.HistoricalItem.map((histYield, index) => {
          return (
          <tr key={index}>
            <td scope="row" className="text-nowrap">{ format(parseISO(histYield.NonSECYields['@AsOfDate']), 'M-d-yy') }</td>
            <td>{formatDailyDistFactor(histYield.DistributionData.DailyDistFactor)}</td>
            <td>{histYield.NonSECYields.OneDayYield} </td>
            <td>{histYield.NonSECYields.SevenDayCurrentYield}</td>
            <td>{histYield.NonSECYields.SevenDyPreWaiverYield}</td>
            <td>{histYield.NonSECYields.SevenDayEffectiveYield}</td>
            <td>{histYield.NonSECYields.ThirtyDayCurrentYield}</td>
            <td>{histYield.NonSECYields.ThirtyDayEffectiveYield}</td>
            <td>{histYield.DailyPricing.DailyWeightedAverageMaturity}</td>
          </tr>
          )
        })}
    </>
    refContent.current.downloadButton = <a id="download-button" onClick={e => handleDownloadButton(e, stateDDFData.HistoricalYieldData.Fund.FundName)} role="button" tabIndex={0} className="btn btn-primary mb-0">Download to CSV format</a>
  }
  if (!stateFetchMenuError && !stateIsFetchMenuLoading && stateMenuOptions) {
    refContent.current.menu = renderFundMenu(stateMenuOptions)
  }

  return (
    <>
    <div className="row">
      <div className={`col-md-8 fade ${stateIsLoading ? '' : 'show'}`}>
        <h2 className="h3">{refContent.current.heading}</h2>
      </div>
      <div className="col-md-4 align-self-end">
        <div className="form-group btn-addon mb-3">
          <label className="sr-only" htmlFor="fund-menu">Fund</label>
          <div className="input-group">
            { refContent.current.menu }
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className={`col-md-4 fade ${stateIsLoading ? '' : 'show'}`}>
        <table className="table table-sm">
          <tbody>
            <tr>
              <td scope="row">Monthly dividend factor<small className="text-muted"> as of {refContent.current.asOfDate}</small></td>
              <td>{refContent.current.dividendIncome}</td> {/* format="0.000000000" */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row"><div className="col-12">{refContent.current.status}</div></div>
    <div className="row">
      <div className="col-12">
        <div className="table-responsive">
          <table id="histyields-table" className={`table table-sm fade ${stateIsLoading ? '' : 'show'}`} ref={refHhistYieldsTable}>
            <caption>Historical yields</caption>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Daily factor/mill rate</th>
                <th scope="col">1-day yield (%)</th>
                <th scope="col">7-day current yield (%)</th>
                <th scope="col">7-day current unsubsidized yield (%)</th>
                <th scope="col">7-day effective yield (%)</th>
                <th scope="col">30-day current yield (%)</th>
                <th scope="col">30-day effective yield (%)</th>
                <th scope="col"><span data-toggle="popover" data-trigger="focus hover" tabIndex={0} data-content={_data.tooltips.WEIGHTED_AVERAGE_MATURITY}>Weighted average maturity</span></th>
              </tr>
            </thead>
            <tbody>
              {refContent.current.rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-none d-sm-block">
        {refContent.current.downloadButton}
      </div>
    </div>
    </>
  )
} /* ==================================================  end Component  ================================================== */

//
/// Helpers
//

function renderFundMenu (dropdownOptions:IDropdownOption[]) {
  let selectedValue = ''
  return (
    <>
    <select id="fund-menu" className="custom-select" onChange={handleOnChange}>
      <option value="" aria-hidden="true">Select a different fund</option>
      {dropdownOptions.map((ddOption, index) => {
        return (
          <option key={index} value={ddOption.taNumber}>{ddOption.optionDescription}</option>
        )
      })}
    </select>
    <div className="input-group-append">
      <button id="fund-button" type="button" onClick={e => handleButtonClick(e, selectedValue)} className="btn btn-outline-secondary">
        <span className="fas fa-chevron-right"></span><span className="sr-only">Submit</span>
      </button>
    </div>
    </>
  )
  function handleOnChange (e:React.ChangeEvent<HTMLSelectElement>) {
    const menuElem = e.target as HTMLSelectElement
    selectedValue = menuElem.value
  }
}

function handleButtonClick (e:React.MouseEvent<HTMLButtonElement>, selectedValue:string) {
  // e.preventDefault()
  const selectedTaNumber = selectedValue
  if (!selectedTaNumber) {
    return null
  }
  // else
  location.href = `#taNumber=${selectedTaNumber}`
}

function handleDownloadButton (e:React.MouseEvent<HTMLAnchorElement>, fundName:string) {
  const tableElem = document.getElementById('histyields-table') as HTMLTableElement // tableRef.current
  const tbodyContent = tableElem.tBodies[0].firstElementChild?.firstElementChild?.textContent ?? ''
  const fundSafeName = fundName.replace(/\s/g, '').replace(/[^\w-%]/g, '-')
  const filename = `Historical Yields - ${fundSafeName} - ${tbodyContent}.csv`
  const csvStr = tableToCSV(tableElem)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const _navigator = navigator as any
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (_navigator.msSaveOrOpenBlob) { // if IE :/
    const data = new Blob([csvStr])
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    _navigator.msSaveOrOpenBlob(data, filename)
  } else {
    const link = document.createElement('a')
    link.style.display = 'none'
    link.setAttribute('target', '_blank')
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStr))
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

function handleHashChange (e: HashChangeEvent, setStateTANumber:React.Dispatch<React.SetStateAction<string>>) {
  const newTaNumber = getUrlFragmentParam('taNumber')
  setStateTANumber(newTaNumber)
}

function formatDailyDistFactor (num:number): string {
  const numStr:string = num.toString().toLowerCase()
  if (~numStr.indexOf('e')) {
    const exp = Math.abs(parseInt(numStr.substring(numStr.indexOf('e') + 1)))
    return num.toFixed(exp + 2)
  }
  return numStr
}
