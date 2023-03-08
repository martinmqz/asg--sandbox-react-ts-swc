import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import chartOptions from '../config/chartOptions'
import highchartsAnnotations from 'highcharts/modules/annotations'
import asgTheme from '../themes/asg-theme'
// import highchartReflow from '../../../utils/highchart-reflow'
highchartsAnnotations(Highcharts)
export default React.memo(LineAnnotationsChart)

interface ChartProps {
  data:number[][]
  title?:string
  subtitle?:string
  seriesName?:string
  yAxisTitle?: string
  disclosure?:string // caption
}
function LineAnnotationsChart (props:ChartProps) {
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
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        rotation: -90,
        formatter: function () {
          const date = new Date(this.value)
          const splitDateStr = date.toDateString().split(' ') // Fri, Dec, 30, 2022
          const fmtd = `${splitDateStr[1]}-${splitDateStr[3].substring(2)}`
          return fmtd
        }
      }
    },
    annotations: [{
      draggable: asgTheme.annotations?.[0].draggable,
      labelOptions: {
        backgroundColor: asgTheme.annotations?.[0].labelOptions?.backgroundColor,
        borderWidth: asgTheme.annotations?.[0].labelOptions?.borderWidth
      },
      labels: [{
        point: {
          x: +(new Date('10/12/2005')),
          y: 921,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Drought <br/>of 2005'
      },
      {
        point: {
          x: +(new Date('9/4/2007')),
          y: 930,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Drought <br/>of 2007'
      },
      {
        point: {
          x: +(new Date('11/4/2008')),
          y: 1150,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Drought <br/>of 2008'
      },
      {
        point: {
          x: +(new Date('9/30/2014')),
          y: 1033.33,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Drought <br/>of 2014'
      },
      {
        point: {
          x: +(new Date('10/3/2017')),
          y: 800,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Drought <br/>of 2017'
      },
      {
        point: {
          x: +(new Date('9/28/2021')),
          y: 845.83,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Drought <br/>of 2021'
      },
      {
        point: {
          x: +(new Date('10/11/2022')),
          y: 2653.12,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Drought <br/>of 2022'
      }
      ]
    }
    ]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  )
}
