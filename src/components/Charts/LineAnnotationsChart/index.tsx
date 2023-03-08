import React from 'react'
import ReactDOM from 'react-dom/client'
import sustainabilityChartData from '../../../data/sustainability-chart-data'
import consoleError from '../../../utils/console-error'
import LineAnnotationsChart from './LineAnnotationsChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <LineAnnotationsChart
        data={sustainabilityChartData}
        yAxisTitle='Yields (%)'
        disclosure='Source: Bloomberg, as of 5-Dec-22; U.S. 3-month T-bill (USGG3M Index)'
      />
    </React.StrictMode>
  )
}
