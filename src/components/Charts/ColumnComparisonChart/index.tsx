import React from 'react'
import ReactDOM from 'react-dom/client'
import multiassetChartData from '../../../data/multiasset-chart-data'
import consoleError from '../../../utils/console-error'
import ColumnComparisonChart from './ColumnComparisonChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <ColumnComparisonChart
        // title="For factors, 2022 was a year of two parts"
        data1={multiassetChartData.firstHalf2022}
        data2={multiassetChartData.secondHalf2022}
        series1Name="First half of 2022"
        series2Name="Second half of 2022"
        yAxisTitle="Six-month return for each factor (%)"
      />
    </React.StrictMode>
  )
}
