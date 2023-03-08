import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import chartOptions from '../config/chartOptions'
import highchartReflow from '../../../utils/highchart-reflow'
export default React.memo(MultiLineChart)

interface ChartProps {
  data1:(number|object)[] // EPS
  data2:(number|object)[] // PE
  dates: string[]
  title?:string
  subtitle?:string
  series1Name?:string
  series2Name?:string
  yAxisTitle?:string
}

function MultiLineChart (props:ChartProps) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    ...chartOptions,
    chart: {
      zooming: {
        type: 'x'
      },
      events: {
        load: function () {
          const labelText = '<span>Growth multiples have sharply compressed in 2022<br/>despite rising earnings-per-share (EPS) estimates</span>'
          this.renderer.label(labelText, 150, 80).add()
          highchartReflow(this)
        }
      }
      // /* not working */ scrollablePlotArea: { minWidth: 500 }
    },
    title: {
      text: props.title
    },
    subtitle: {
      text: props.subtitle ?? (document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in')
    },
    xAxis: {
      crosshair: true,
      type: 'datetime',
      categories: props.dates,
      tickPositions: [0, 64, 129, props.dates.length - 1],
      labels: {
        // staggerLines: 2,
        // step: 30
        formatter: function () {
          const date = new Date(this.value)
          const splitDateStr = date.toDateString().split(' ')
          const fmtd = `${splitDateStr[2]}-${splitDateStr[1]}-${splitDateStr[3].substring(2)}`
          return fmtd
        }
      },
      // tickInterval: 40
      accessibility: {
        description: 'Months of the year'
      }
    },
    yAxis: {
      // crosshair: true,
      title: {
        text: props.yAxisTitle
      },
      labels: {
        format: '{value:,.0f}'
      }
    },
    tooltip: {
      shared: true
    },
    plotOptions: {
      line: {
        marker: {
          radius: 4,
          lineColor: '#666',
          lineWidth: 1
        }
      },
      series: {
        dataLabels: {
          // enabled: false
          // allowOverlap: true
        }
      }
    },
    series: [{
      type: 'line',
      name: props.series1Name,
      marker: {
        symbol: 'square'
      },
      data: props.data1,
      dataLabels: {
        format: '{y}%',
        style: {
          // fontSize: '11px',
          fontFamily: 'allspring-sanomat-tt-bold'
        }
      }
    },
    {
      type: 'line',
      name: props.series2Name,
      marker: {
        symbol: 'diamond'
      },
      data: props.data2,
      dataLabels: {
        format: '{y}%',
        style: {
          // fontSize: '14px',
          fontFamily: 'allspring-sanomat-tt-bold'
          // fontWeight: 'lighter'
        }
      }
    }]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  )
}
