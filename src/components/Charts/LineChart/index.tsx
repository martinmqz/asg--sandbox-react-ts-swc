import React from 'react'
import ReactDOM from 'react-dom/client'
import lineChartData from '../../../data/line-chart-data'
import consoleError from '../../../utils/console-error'
import LineChart from './LineChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const chartContent = lineChartData
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <LineChart
        data={chartContent.data}
        yAxisTitle='Yield (%)'
        disclosure='Source: Bloomberg, as of 5-Dec-22; U.S. 3-month T-bill (USGG3M Index)'
      />
    </React.StrictMode>
  )
}
