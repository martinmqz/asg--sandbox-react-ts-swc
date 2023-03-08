import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import chartOptions from '../config/chartOptions'
// import highchartReflow from '../../../utils/highchart-reflow'
export default React.memo(LineChart)

interface ChartProps {
  data:number[][]
  title?:string
  subtitle?:string
  seriesName?:string
  yAxisTitle?: string
  disclosure?:string // caption
}
function LineChart (props:ChartProps) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    ...chartOptions,
    chart: {
      zooming: {
        type: 'x'
      }
      // events: {
      //   load: function () {
      //     highchartReflow(this)
      //   }
      // }
    },
    title: {
      text: props.title
    },
    subtitle: {
      text: props.subtitle ?? (document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in')
    },
    legend: {
      enabled: false
    },
    caption: {
      text: props.disclosure
    },
    tooltip: {
      xDateFormat: '%m/%d/%Y'
    },
    series: [{
      type: 'line',
      name: props.seriesName,
      data: props.data,
      marker: {
        enabled: false
      }
    }],
    yAxis: {
      title: {
        text: props.yAxisTitle
      },
      min: 0
    },
    xAxis: {
      type: 'datetime',
      labels: {
        rotation: -90
      }
    }
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  )
}
