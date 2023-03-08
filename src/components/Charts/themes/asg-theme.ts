import Highcharts from 'highcharts'

const asgTheme: Highcharts.Options = {
  // colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
  colors: ['#5627e7', '#38a8ff', '#20a874', '#6e6e6e'],
  chart: {
    style: {
      fontFamily: 'graphik-compact-lc-tt-regular',
      fontSize: '12px'
    }
    // backgroundColor: {
    // linearGradient: [0, 0, 500, 500],
    // stops: [
    //   [0, 'rgb(255, 255, 255)'],
    //   [1, 'rgb(240, 240, 255)']
    // ]
    // }
  },
  title: {
    style: {
      // color: '#000',
      // font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
    }
  },
  subtitle: {
    style: {
      // color: '#666666',
      // font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
    }
  },
  tooltip: {
    // headerFormat: '<strong>{point.point.name}</strong><br/>'
  },
  legend: {
    itemStyle: {
      fontWeight: 'lighter',
      fontSize: '12px'
      // color: 'black'
    },
    itemHoverStyle: {
      // color: 'gray'
    }
  },
  annotations: [{
    labelOptions: {
      backgroundColor: '#6e6e6e',
      borderWidth: 0
    },
    draggable: ''
  }]
}

export default asgTheme
