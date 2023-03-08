import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import chartOptions from '../config/chartOptions'
import asgTheme from '../themes/asg-theme'
// import highchartReflow from '../../../utils/highchart-reflow'
export default React.memo(ColumnComparisonChart)

interface ChartProps {
  data1:(string|number)[][]
  data2:(string|number)[][]
  title?:string
  subtitle?:string
  series1Name:string
  series2Name:string
  yAxisTitle?:string
  // xAxisCategories:string[]
}
function ColumnComparisonChart (props:ChartProps) { // props:HighchartsReact.Props) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  // const period1ElRef = React.useRef<HTMLInputElement>(null)
  // const period2ElRef = React.useRef<HTMLInputElement>(null)

  // const getData = (data:(string|number)[][]) => data.map((stat, i) => ({
  //   name: stat[0],
  //   y: stat[1],
  //   color: asgTheme.colors?.[i]
  // } as Highcharts.PointOptionsObject))
  const options: Highcharts.Options = {
    ...chartOptions,
    chart: {
      // type: 'column',
      // name: 'Year',
      // alignTicks: false,
      // events: {
      //   load: function () {
      //     highchartReflow(this)
      //   }
      // }
    },
    title: {
      text: props.title
    },
    legend: {
      enabled: false
    },
    tooltip: {
      shared: true
      // headerFormat: '<strong>{point.point.name}</strong><br/>'

      // pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} percent</b><br/>'
    },
    // xAxis: [
    //   {
    //     type: 'category',
    //     crosshair: false,
    //     visible: false
    //   },
    //   {
    //     type: 'category',
    //     crosshair: true

    //   }
    // ],
    xAxis: {
      type: 'category',
      crosshair: true
      // labels: {
      //   formatter: ctx => {
      //     return ctx.value as string
      //   }
      // }
      // categories: [props.series1Name, props.series2Name, props.series3Name]
    },
    yAxis: {
      title: {
        text: props.yAxisTitle
      }
    },
    // plotOptions: {
    //   series: {
    //     dataGrouping: {
    //       groupAll: false
    //     }

    //   }
    // },
    series: [
      {
        type: 'column',
        // xAxis: 0,
        name: props.series2Name,
        data: props.data2.slice(),
        // linkedTo: 'main',
        color: 'rgba(158, 159, 163, 0.1)',
        // pointPlacement: -0.2
        // // visible: false
        grouping: false
        // dataLabels: {
        //   enabled: false
        // }
      },
      {
        type: 'column',
        // xAxis: 1,
        name: props.series1Name,
        data: getData(props.data1).slice(),
        // id: 'main',
        grouping: false,
        dataLabels: {
          enabled: true,
          inside: true,
          // verticalAlign: 'bottom',
          style: {
            color: 'white',
            textOutline: 'none'
          }
        }

      }
    ]
  }
  function getData (data: (string | number)[][]) {
    return data.map((stat, i) => ({
      name: stat[0],
      y: stat[1],
      color: asgTheme.colors?.[i]
    } as Highcharts.PointOptionsObject))
  }

  function toggleCharts (ev: React.ChangeEvent<HTMLInputElement>) {
    const periodEl = ev.target

    if (periodEl.id === 'period1') {
      chartRef.current?.chart.update({
        series: [{
          type: 'column',
          name: props.series2Name,
          data: props.data2.slice()
          // color: 'rgba(158, 159, 163, 0.1)'
        },
        {
          type: 'column',
          name: props.series1Name,
          data: getData(props.data1).slice()
        }]
      }, true, false)
    } else {
      chartRef.current?.chart.update({
        series: [{
          type: 'column',
          name: props.series1Name,
          data: props.data1.slice()
          // color: 'rgba(158, 159, 163, 0.1)'
        },
        {
          type: 'column',
          name: props.series2Name,
          data: getData(props.data2).slice()
        }]
      }, true, false)
    }
  }

  return (
    <>
      <div className='form-inline'>
        <div className='column-comparison-chart-controls custom-control custom-radio custom-control-inline'>
          <div className='custom-control custom-radio custom-control-inline'>
            <input type='radio' name='period' value='period1' radioGroup='period' id='period1' className='custom-control-input' onChange={toggleCharts} defaultChecked />
            <label htmlFor='period1' className='custom-control-label'>First half of 2022</label>
          </div>
          <div className='custom-control custom-radio custom-control-inline'>
            <input type='radio' name='period' value='period2' radioGroup='period' id='period2' className='custom-control-input' onChange={toggleCharts} />
            <label htmlFor='period2' className='custom-control-label'>Second half of 2022</label>
          </div>
        </div>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
        {...props}
      />
    </>
  )
}
