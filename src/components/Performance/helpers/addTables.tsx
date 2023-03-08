import React from 'react'
import { IContext } from '../Performance'
import PerformanceTable from '../PerformanceTable/PerformanceTable'
import config from './TableConfig'

export default function addTables (context: IContext):void {
  //
  /// Add table disclosures
  if (context.stateCalendarTerm === 'monthEnd') {
    context.result.tables.performance.push(
      <div className="col-12" key={context.stateCalendarTerm}>
        Month-end returns for {context.shareClassIdName} class returns are as of {context.performanceMonthEndAsOfDate}.<br />
        The Overall Morningstar Rating, a weighted-average of the three-, five-, and ten-year (if applicable) ratings, is based on risk-adjusted returns as of {context.performanceMonthEndAsOfDate}.
      </div>
    )
  }

  if (context.stateCalendarTerm === 'quarterEnd') {
    context.result.tables.performance.push(
      <div className="col-12" key={context.stateCalendarTerm}>
        Quarter-end returns for {context.shareClassIdName} class returns are as of {context.performanceQuarterEndAsOfDate}.<br />
        The Overall Morningstar Rating, a weighted-average of the three-, five-, and ten-year (if applicable) ratings, is based on risk-adjusted returns as of {context.performanceQuarterEndAsOfDate}.
      </div>
    )
  }

  context.result.tables.yields.push(
    <div className="col-12" key={context.stateCalendarTerm}>
      All data for {context.shareClassIdName} class is as of {context.distributionsAsOfDate} unless otherwise noted.
    </div>
  )
  //
  /// Add tables
  for (const assetClassId in context.stateAssetClassContentMap) {
    if (Object.prototype.hasOwnProperty.call(context.stateAssetClassContentMap, assetClassId) && context.stateAssetClassContentMap[assetClassId].funds.length) {
      const index = context.stateAssetClasses.indexOf(assetClassId) + 1 // 0-index is for disclosures
      // Performance
      if (['money-market', 'government', 'prime-institutional', 'municipal-institutional'].includes(assetClassId)) {
        context.result.tables.performance[index] =
          <PerformanceTable key={assetClassId}
            config={config.performance.moneyMarket}
            data={context.stateAssetClassContentMap[assetClassId]}
            currentShareClass={context.stateShareClassId}
            selectedCalendar={context.stateCalendarTerm} />
      } else {
        context.result.tables.performance[index] =
          <PerformanceTable key={assetClassId}
            config={config.performance.nonMoneyMarket}
            data={context.stateAssetClassContentMap[assetClassId]}
            currentShareClass={context.stateShareClassId}
            selectedCalendar={context.stateCalendarTerm} />
      }

      // Daily prices & yields
      if (['fixed-income', 'taxable-fixed-income', 'municipal-fixed-income'].includes(assetClassId)) {
        context.result.tables.yields[index] =
          <PerformanceTable key={assetClassId}
            config={config.yields.fixedIncome}
            data={context.stateAssetClassContentMap[assetClassId]}
            currentShareClass={context.stateShareClassId}
            selectedCalendar={context.stateCalendarTerm} />
      } else if (['money-market', 'government', 'prime-institutional', 'municipal-institutional'].includes(assetClassId)) {
        context.result.tables.yields[index] =
          <PerformanceTable key={assetClassId}
            config={config.yields.moneyMarket}
            data={context.stateAssetClassContentMap[assetClassId]}
            currentShareClass={context.stateShareClassId}
            selectedCalendar={context.stateCalendarTerm} />
      } else {
        context.result.tables.yields[index] =
          <PerformanceTable key={assetClassId}
            config={config.yields.rest}
            data={context.stateAssetClassContentMap[assetClassId]}
            currentShareClass={context.stateShareClassId}
            selectedCalendar={context.stateCalendarTerm} />
      }

      // Distributions
      context.result.tables.distributions[index] =
        <PerformanceTable key={assetClassId}
          config={config.distributions}
          data={context.stateAssetClassContentMap[assetClassId]}
          currentShareClass={context.stateShareClassId}
          selectedCalendar={context.stateCalendarTerm} />
    }
  }
}
