import React from 'react'
import ReactDOM from 'react-dom/client'
import equitiesChartData from '../../../data/equities-chart-data'
import consoleError from '../../../utils/console-error'
import MultiLineChart from './MultiLineChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <MultiLineChart
        data1={equitiesChartData.russel3kGrowthIndexNTMEPS}
        data2={equitiesChartData.russel3kGrowthIndexNTMPE}
        dates={equitiesChartData.dates}
        series1Name='Russell 3000 Growth Index - NTM EPS'
        series2Name='Russell 3000 Growth Index - NTM P/E'
        title='Growth multiples have sharply compressed in 2022 despite rising earnings-per-share (EPS) estimates'
        yAxisTitle='Percent'
      />
    </React.StrictMode>
  )
}

export default MultiLineChart
