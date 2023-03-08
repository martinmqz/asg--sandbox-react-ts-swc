
const nineDecimalFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 9,
  maximumFractionDigits: 9
})

export default nineDecimalFormatter
