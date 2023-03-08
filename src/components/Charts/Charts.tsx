import React from 'react'
import fixedIncomeChartData from '../../data/fixedincome-chart-data'
// import columnNegativeDoubleChartData from '../../data/columnnegative-double-chart-data'
import sustainabilityChartData from '../../data/sustainability-chart-data'
import LineAnnotationsChart from './LineAnnotationsChart/LineAnnotationsChart'
import LineChart from './LineChart/LineChart'
import asgTheme from './themes/asg-theme'
import Highcharts from 'highcharts'
import equitiesChartData from '../../data/equities-chart-data'
import MultiLineChart from './MultiLineChart'
import ColumnComparisonChart from './ColumnComparisonChart/ColumnComparisonChart'
import multiassetChartData from '../../data/multiasset-chart-data'
// Apply the theme
Highcharts.setOptions(asgTheme) // Highcharts.theme)
export default function Charts () {
  return (
    <div id='container'>
      <h1>ASG Charts</h1>
      <div>
        <h2>Multiasset - Column-comparison chart</h2>
        <ColumnComparisonChart
          // title="For factors, 2022 was a year of two parts"
          data1={multiassetChartData.firstHalf2022}
          data2={multiassetChartData.secondHalf2022}
          series1Name="First half of 2022"
          series2Name="Second half of 2022"
          yAxisTitle="Six-month return for each factor (%)"
        />
      </div>
      <div>
        <h2>Fixed-income - Line chart</h2>
        <LineChart
          data={fixedIncomeChartData}
          yAxisTitle='Yields (%)'
          disclosure='Source: Bloomberg, as of 5-Dec-22; U.S. 3-month T-bill (USGG3M Index)'
        />
      </div>
      <div>
        <h2>Sustainability - Line chart w/annotations</h2>
        <LineAnnotationsChart
          data={sustainabilityChartData}
          // title='Drought-induced congestion on the mississippi drove extreme spikes in barge freight rates in q4 2022'
          yAxisTitle='Downstream barge freight rate (% of USDA tari)'
          disclosure='Sources: Allspring and USDA. Note: Downstream barge freight rates are quoted as a percent of USDA tariff.'
        />
      </div>
      <div>
        <h2>Equities - Multi-Line chart</h2>
        <MultiLineChart
          data1={equitiesChartData.russel3kGrowthIndexNTMEPS}
          data2={equitiesChartData.russel3kGrowthIndexNTMPE}
          dates={equitiesChartData.dates}
          series1Name="Russell 3000 Growth Index - NTM EPS"
          series2Name="Russell 3000 Growth Index - NTM P/E"
          yAxisTitle="Percent"
        />
      </div>
    </div>
  )
}
