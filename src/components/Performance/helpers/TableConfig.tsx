// *Legacy
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { MappedFund } from '../Performance.data.interfaces'
import { IAssetClassContent } from '../Performance'
import { State as PerformanceTableState } from '../PerformanceTable/PerformanceTable'

const placeholder = '-'
const dateFormat = 'M-d-yy'
const DISCLOSURES = {
  NAV: 'Net asset value (NAV) is the value of one share of the fund excluding any sales charges.',
  POP: 'Public offering price (POP) is the price of one share of a fund including any sales charges.'
}
export interface IRendererReactArrObj {
  frags:React.ReactNode[]
}
export interface IRendererStrArrObj {
  frags:string[]
}
export interface ITableColumnConfig {
  // text:string | ((contentMap:IAssetClassContent) => string)
  text:string | ((contentMap:IAssetClassContent) => string)
  classNames:string[]
  rowspan?:number | ((fund:MappedFund) => number)
  renderer:(fund:MappedFund, state:PerformanceTableState) => React.ReactNode | IRendererReactArrObj | IRendererStrArrObj
}
export interface ITableMoneyMarketConfig {
  columns:ITableColumnConfig[]
}
export interface ITableNonMoneyMarketConfig {
  columns:ITableColumnConfig[]
}
export interface ITableFixedIncomeConfig {
  columns:ITableColumnConfig[]
}
export interface ITableRestConfig {
  columns:ITableColumnConfig[]
}
export interface ITableConfig {
  performance: {
    moneyMarket: ITableMoneyMarketConfig
    nonMoneyMarket: ITableNonMoneyMarketConfig
  }
  distributions: {
    columns: ITableColumnConfig[]
  }
  yields: {
    fixedIncome: ITableFixedIncomeConfig
    moneyMarket: ITableMoneyMarketConfig
    rest: ITableRestConfig
  }
}

const tableConfig: ITableConfig = {
  performance: {
    moneyMarket: {
      columns: [{
        text: 'Fund',
        classNames: ['w-15'],
        renderer: (fund: MappedFund) => {
          return (
            <>
              <a href={getFundProfileOverviewUrl(fund)}>{fund.name}</a>
              <br />
              <small>
                {fund.ticker}
                <br />
                Class inception: {fund.inceptionDate}
              </small>
            </>
          )
        }
      }, {
        text: (content:IAssetClassContent) => {
          if (content.funds[0].nonSecYieldAsOfDate) {
            const asOfDate = format(parseISO(content.funds[0].nonSecYieldAsOfDate), dateFormat)
            return `7-day current yield as of ${asOfDate} (%)`
          }
          return '7-day current yield'
        },
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => fund.yields.sevenDayCurrent || placeholder
      }, {
        text: (content:IAssetClassContent) => {
          if (content.funds[0].nonSecYieldAsOfDate) {
            const asOfDate = format(parseISO(content.funds[0].nonSecYieldAsOfDate), dateFormat)
            return `7-day effective yield as of ${asOfDate} (%)`
          }
          return '7-day effective yield'
        },
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => fund.yields.sevenDayEffective || placeholder
      }, {
        text: (content:IAssetClassContent) => {
          if (content.funds[0].nonSecYieldAsOfDate) {
            const asOfDate = format(parseISO(content.funds[0].nonSecYieldAsOfDate), dateFormat)
            return `7-day pre-waiver yield as of ${asOfDate} (%)`
          }
          return '7-day pre-waiver yield'
        },
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => fund.yields.sevenDayPrewaiver || placeholder
      }, {
        text: 'Weighted average maturity (days)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return +fund.performance.monthEnd.weightedAverageMaturity || placeholder
          } else {
            return +fund.performance.quarterEnd.weightedAverageMaturity || placeholder
          }
        }
      }, {
        text: 'YTD return (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return fund.performance.monthEnd.NAV.ytd || placeholder
          } else {
            return fund.performance.quarterEnd.NAV.ytd || placeholder
          }
        }
      }, {
        text: '1 yr. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return fund.performance.monthEnd.NAV.oneYear || placeholder
          } else {
            return fund.performance.quarterEnd.NAV.oneYear || placeholder
          }
        }
      }, {
        text: '3 yr. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return fund.performance.monthEnd.NAV.threeYear || placeholder
          } else {
            return fund.performance.quarterEnd.NAV.threeYear || placeholder
          }
        }
      }, {
        text: '5 yr. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return fund.performance.monthEnd.NAV.fiveYear || placeholder
          } else {
            return fund.performance.quarterEnd.NAV.fiveYear || placeholder
          }
        }
      }, {
        text: '10 yr. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return fund.performance.monthEnd.NAV.tenYear || placeholder
          } else {
            return fund.performance.quarterEnd.NAV.tenYear || placeholder
          }
        }
      }, {
        text: 'Since incep. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return fund.performance.monthEnd.NAV.sinceInception || placeholder
          } else {
            return fund.performance.quarterEnd.NAV.sinceInception || placeholder
          }
        }
      }]
    },
    nonMoneyMarket: {
      columns: [{
        text: 'Fund',
        rowspan: (fund:MappedFund) => fund.performance.showNav && fund.performance.showPop ? 2 : 1,
        classNames: ['w-20'],
        renderer: (fund:MappedFund) => {
          return (
            <>
              <a href={getFundProfileOverviewUrl(fund)}>{fund.name}</a>
              <br />
              <small>
                {fund.ticker}
                <br />
                Class inception: {fund.inceptionDate}
              </small>
            </>
          )
        }
      }, {
        text: '',
        classNames: ['w-5'],
        renderer: () => {
          return {
            frags: [
              <a key={'disclosures.nav'} href="javascript:;" data-toggle="popover" data-trigger="focus hover" data-placement="right" data-content={DISCLOSURES.NAV}>NAV</a>,
              <a key={'disclosures.pop'} href="javascript:;" data-toggle="popover" data-trigger="focus hover" data-placement="right" data-content={DISCLOSURES.POP}>POP</a>
            ]
          }
        }
      }, {
        text: '3 mo. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const frags = []
          if (state.selectedCalendar === 'monthEnd') {
            frags.push(fund.performance.monthEnd.NAV.threeMonth || placeholder)
            frags.push(fund.performance.monthEnd.POP.threeMonth || placeholder)
          } else {
            frags.push(fund.performance.quarterEnd.NAV.threeMonth || placeholder)
            frags.push(fund.performance.quarterEnd.POP.threeMonth || placeholder)
          }
          return {
            frags
          }
        }
      }, {
        text: 'YTD (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const frags = []
          if (state.selectedCalendar === 'monthEnd') {
            frags.push(fund.performance.monthEnd.NAV.ytd || placeholder)
            frags.push(fund.performance.monthEnd.POP.ytd || placeholder)
          } else {
            frags.push(fund.performance.quarterEnd.NAV.ytd || placeholder)
            frags.push(fund.performance.quarterEnd.POP.ytd || placeholder)
          }
          return {
            frags
          }
        }
      }, {
        text: '1 yr. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const frags = []
          if (state.selectedCalendar === 'monthEnd') {
            frags.push(fund.performance.monthEnd.NAV.oneYear || placeholder)
            frags.push(fund.performance.monthEnd.POP.oneYear || placeholder)
          } else {
            frags.push(fund.performance.quarterEnd.NAV.oneYear || placeholder)
            frags.push(fund.performance.quarterEnd.POP.oneYear || placeholder)
          }
          return {
            frags
          }
        }
      }, {
        text: '5 yr. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const frags = []
          if (state.selectedCalendar === 'monthEnd') {
            frags.push(fund.performance.monthEnd.NAV.fiveYear || placeholder)
            frags.push(fund.performance.monthEnd.POP.fiveYear || placeholder)
          } else {
            frags.push(fund.performance.quarterEnd.NAV.fiveYear || placeholder)
            frags.push(fund.performance.quarterEnd.POP.fiveYear || placeholder)
          }
          return {
            frags
          }
        }
      }, {
        text: '10 yr. (%)',
        classNames: ['w-5'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const frags = []
          if (state.selectedCalendar === 'monthEnd') {
            frags.push(fund.performance.monthEnd.NAV.tenYear || placeholder)
            frags.push(fund.performance.monthEnd.POP.tenYear || placeholder)
          } else {
            frags.push(fund.performance.quarterEnd.NAV.tenYear || placeholder)
            frags.push(fund.performance.quarterEnd.POP.tenYear || placeholder)
          }
          return {
            frags
          }
        }
      }, {
        text: 'Since incep. (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const frags = []
          if (state.selectedCalendar === 'monthEnd') {
            frags.push(fund.performance.monthEnd.NAV.sinceInception || placeholder)
            frags.push(fund.performance.monthEnd.POP.sinceInception || placeholder)
          } else {
            frags.push(fund.performance.quarterEnd.NAV.sinceInception || placeholder)
            frags.push(fund.performance.quarterEnd.POP.sinceInception || placeholder)
          }
          return {
            frags
          }
        }
      }, {
        text: 'Overall rating',
        rowspan: (fund:MappedFund) => fund.performance.showNav && fund.performance.showPop ? 2 : 1,
        classNames: ['w-10'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const rating = state.selectedCalendar === 'monthEnd' ? fund.performance.monthEnd.morningstar.rating : fund.performance.quarterEnd.morningstar.rating
          const output = []
          const stars = []

          for (let i = 0; i < 5; i++) {
            stars.push(i < rating ? <span key={i} className="fas fa-star fa-xs"></span> : <span key={i} className="far fa-star fa-xs"></span>)
          }
          // if (!rating) {

          // } else if (rating === 1) {

          // } else {

          // }
          output.push(
            <div key={fund.performance.monthEnd.morningstar.totalFunds} role="img" aria-label={rating ? (rating.toString() + ' star' + (rating > 1 ? 's' : '')) : 'Not rated'}>
              {stars}
            </div>
          )
          if (state.selectedCalendar === 'monthEnd') {
            if (fund.performance.monthEnd.morningstar.totalFunds) {
              output.push(<div key={fund.performance.monthEnd.expenseRatios.gross} className="small">(Out of {fund.performance.monthEnd.morningstar.totalFunds} funds)</div>)
            }
          } else {
            if (fund.performance.quarterEnd.morningstar.totalFunds) {
              output.push(<div key={fund.performance.quarterEnd.expenseRatios.gross} className="small">(Out of {fund.performance.quarterEnd.morningstar.totalFunds} funds)</div>)
            }
          }

          return output
        }
      }, {
        text: 'Morningstar Category',
        rowspan: (fund:MappedFund) => fund.performance.showNav && fund.performance.showPop ? 2 : 1,
        classNames: ['w-15'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          if (state.selectedCalendar === 'monthEnd') {
            return fund.performance.monthEnd.morningstar.category || placeholder
          } else {
            return fund.performance.quarterEnd.morningstar.category || placeholder
          }
        }
      }, {
        text: 'Gross/net expenses',
        rowspan: (fund:MappedFund) => fund.performance.showNav && fund.performance.showPop ? 2 : 1,
        classNames: ['w-15'],
        renderer: (fund:MappedFund, state:PerformanceTableState) => {
          const expenseRatios = state.selectedCalendar === 'monthEnd' ? fund.performance.monthEnd.expenseRatios : fund.performance.quarterEnd.expenseRatios
          const output = []

          output.push(expenseRatios.gross)
          if (expenseRatios.net && expenseRatios.contractEndDate) {
            output.push(<React.Fragment key={expenseRatios.net}><br /><a href="javascript:;" data-toggle="popover" data-trigger="focus hover" data-placement="left" data-content={'Contract end date: ' + expenseRatios.contractEndDate}>{expenseRatios.net}</a></React.Fragment>)
          }

          return output
        }
      }]
    }
  },
  distributions: {
    columns: [{
      text: 'Fund',
      classNames: ['w-20'],
      renderer: (fund: MappedFund) => {
        return <a href={getFundProfileOverviewUrl(fund)}>{fund.name}</a>
      }
    }, {
      text: 'Dividend',
      classNames: ['w-5'],
      renderer: (fund:MappedFund) => {
        if (fund.distributions.useDividends && fund.distributions.dividends.income) {
          return fund.distributions.dividends.income
        }
        return placeholder
      }
    }, {
      text: 'S/T Cap. Gains Dist',
      classNames: ['w-15'],
      renderer: (fund:MappedFund) => {
        if (fund.distributions.useCapGains && fund.distributions.capGains.shortTerm) {
          return fund.distributions.capGains.shortTerm
        }
        return placeholder
      }
    }, {
      text: 'L/T Cap. Gains Dist',
      classNames: ['w-15'],
      renderer: (fund:MappedFund) => {
        if (fund.distributions.useCapGains && fund.distributions.capGains.longTerm) {
          return fund.distributions.capGains.longTerm
        }
        return placeholder
      }
    }, {
      text: 'Record Date',
      classNames: ['w-10'],
      renderer: (fund:MappedFund) => {
        if (fund.distributions.useDividends && fund.distributions.dividends.recordDate) {
          return format(parseISO(fund.distributions.dividends.recordDate), dateFormat)
        } else if (fund.distributions.useCapGains && fund.distributions.capGains.recordDate) {
          return format(parseISO(fund.distributions.capGains.recordDate), dateFormat)
        }
        return placeholder
      }
    }, {
      text: 'Ex-Dividend Date',
      classNames: ['w-10'],
      renderer: (fund:MappedFund) => {
        if (fund.distributions.useDividends && fund.distributions.dividends.exDate) {
          return format(parseISO(fund.distributions.dividends.exDate), dateFormat)
        } else if (fund.distributions.useCapGains && fund.distributions.capGains.exDate) {
          return format(parseISO(fund.distributions.capGains.exDate), dateFormat)
        }
        return placeholder
      }
    }, {
      text: 'Payable Date',
      classNames: ['w-10'],
      renderer: (fund:MappedFund) => {
        if (fund.distributions.useDividends && fund.distributions.dividends.payableDate) {
          return format(parseISO(fund.distributions.dividends.payableDate), dateFormat)
        } else if (fund.distributions.useCapGains && fund.distributions.capGains.payableDate) {
          return format(parseISO(fund.distributions.capGains.payableDate), dateFormat)
        }
        return placeholder
      }
    }, {
      text: 'Reinvestment Price',
      classNames: ['w-15'],
      renderer: (fund:MappedFund) => {
        if (fund.distributions.useDividends && fund.distributions.dividends.reinvestPrice) {
          return fund.distributions.dividends.reinvestPrice
        } else if (fund.distributions.useCapGains && fund.distributions.capGains.reinvestPrice) {
          return fund.distributions.capGains.reinvestPrice
        }
        return placeholder
      }
    }]
  },
  yields: {
    fixedIncome: {
      columns: [{
        text: 'Fund',
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => {
          return <a href={getFundProfileOverviewUrl(fund)}>{fund.name}</a>
        }
      }, {
        text: '$ NAV',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.NAV || placeholder
      }, {
        text: '$ change',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.dailyChange.dollar || placeholder
      }, {
        text: '% change',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.dailyChange.percent || placeholder
      }, {
        text: 'YTD return (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.ytdReturn || placeholder
      }, {
        text: 'Distribution yield',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.distributionYield || placeholder
      }, {
        text: '30-day current yield (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.thirtyDayCurrent || placeholder
      }, {
        text: (content:IAssetClassContent) => {
          if (content.funds[0].secYieldAsOfDate) {
            const asOfDate = format(parseISO(content.funds[0].secYieldAsOfDate), dateFormat)
            return `30-day SEC yield as of ${asOfDate} (%)`
          }
          return '30-day SEC yield'
        },
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => {
          if (fund.yields.thirtyDaySec && fund.yields.thirtyDaySecUnsubsidized) {
            const asOfDate = format(parseISO(fund.secYieldAsOfDate), dateFormat)
            return <a href="javascript:;" data-toggle="popover" data-trigger="focus hover" data-placement="left" data-content={'30-day unsub. as of ' + asOfDate + ': ' + fund.yields.thirtyDaySecUnsubsidized}>{fund.yields.thirtyDaySec}</a>
          }
          return fund.yields.thirtyDaySec || placeholder
        }
      }, {
        text: (content:IAssetClassContent) => {
          if (content.funds[0].fundStatsAsOfDate) {
            const asOfDate = format(parseISO(content.funds[0].fundStatsAsOfDate), dateFormat)
            return `Duration as of ${asOfDate} (yrs.)`
          }
          return 'Duration'
        },

        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.effectiveDuration || placeholder
      }]
    },
    moneyMarket: {
      columns: [{
        text: 'Fund',
        classNames: ['w-30'],
        renderer: (fund:MappedFund) => {
          return <a href={getFundProfileOverviewUrl(fund)}>{fund.name}</a>
        }
      }, {
        text: 'Daily factor/mill',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.dailyFactor || placeholder
      }, {
        text: '1-day yield (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.oneDay || placeholder
      }, {
        text: '7-day current (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.sevenDayCurrent || placeholder
      }, {
        text: '7-day effective (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.sevenDayEffective || placeholder
      }, {
        text: '7-day current unsubsidized (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.sevenDayPrewaiver || placeholder
      }, {
        text: '30-day current (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.thirtyDayCurrent || placeholder
      }, {
        text: '30-day effective (%)',
        classNames: ['w-10'],
        renderer: (fund:MappedFund) => fund.yields.thirtyDayEffective || placeholder
      }]
    },
    rest: {
      columns: [{
        text: 'Fund',
        classNames: ['w-35'],
        renderer: (fund:MappedFund) => {
          return <a href={getFundProfileOverviewUrl(fund)}>{fund.name}</a>
        }
      }, {
        text: '$ NAV',
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => fund.yields.NAV || placeholder
      }, {
        text: '$ change',
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => fund.yields.dailyChange.dollar || placeholder
      }, {
        text: '% change',
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => fund.yields.dailyChange.percent || placeholder
      }, {
        text: 'YTD performance (%)',
        classNames: ['w-15'],
        renderer: (fund:MappedFund) => fund.yields.ytdReturn || placeholder
      }]
    }
  }
}

export default tableConfig

function getFundProfileOverviewUrl (fund: MappedFund) {
  return `${fund.profileOverviewUrl}?accountingId=${fund.accountingId}&shareClass=${fund.shareClass}`
}
