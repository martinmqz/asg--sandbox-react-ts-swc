const columnChartData = {
  title: 'Yield Premium above T-Bills',
  data: [
    {
      name: 'Treasury',
      y: 0.25,
      drilldown: 'Treasury'
    },
    {
      name: 'Short Term Gov/Corp',
      y: 0.35,
      drilldown: 'Short Term Gov/Corp'
    },
    {
      name: 'U.S. Aggregate',
      y: 0.55,
      drilldown: 'U.S. Aggregate'
    },
    {
      name: 'IG Corporate',
      y: 0.95,
      drilldown: 'IG Corporate'
    },
    {
      name: 'Municipal',
      y: 1.48,
      drilldown: 'Municipal*'
    },
    {
      name: '1-3 Yr BB',
      y: 2.55,
      drilldown: '1-3 Yr BB'
    },
    {
      name: 'High Yield',
      y: 4.35,
      drilldown: 'High Yield'
    }
  ]
}
export default columnChartData
