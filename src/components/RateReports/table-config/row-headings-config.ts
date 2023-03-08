
export interface ITableHeaderConfig {
  label:string
  width?:number
}
export type ITableHeadersConfig = Record<string, ITableHeaderConfig>;

const tableHeadersConfig:ITableHeadersConfig = {
  ANNUALREPORTURL: {
    label: 'Annual report',
    width: 5
  },
  CUSIP: {
    label: 'CUSIP'
  },
  DAILYFACTOR: {
    label: 'Daily factor',
    width: 10
  },
  FACTSHEETURL: {
    label: 'Fact sheet',
    width: 5
  },
  FUNDNAME_SHARECLASSNAME: {
    label: 'Fund',
    width: 30
  },
  GROSSEXPENSERATIO: {
    label: 'Gross expense ratio (%)',
    width: 10
  },
  MININITIALINVESTMENT: {
    label: 'Minimum initial investment'
  },
  NETEXPENSERATIO: {
    label: 'Net expense ratio (%)',
    width: 10
  },
  NETFUNDASSETS: {
    label: 'Net fund assets'
  },
  ONEDAYYIELD: {
    label: '1-day (%)',
    width: 10
  },
  PROSPECTUSURL: {
    label: 'Prospectus',
    width: 5
  },
  SEVENDAYCURRENTYIELD: {
    label: '7-day current (%)',
    width: 10
  },
  SEVENDAYEFFECTIVEYIELD: {
    label: '7-day effective (%)',
    width: 10
  },
  SEVENDAYPREWAIVERYIELD: {
    label: '7-day current pre-waiver (%)',
    width: 10
  },
  SHARECLASSNAME: {
    label: 'Share class'
  },
  SUMMARYPROSPECTUSURL: {
    label: 'Summary prospectus',
    width: 5
  },
  TANUMBER: {
    label: 'Fund #'
  },
  THIRTYDAYCURRENTYIELD: {
    label: '30-day current (%)',
    width: 10
  },
  THIRTYDAYEFFECTIVEYIELD: {
    label: '30-day effective (%)',
    width: 10
  },
  THIRTYDAYSECYIELD: {
    label: '30-day SEC yield (%)',
    width: 10
  },
  TICKER: {
    label: 'Ticker'
  },
  CUSTOMTRADINGDEADLINES: {
    label: 'Trading deadline(s) (All Times ET)',
    width: 25
  },
  DAILYWEIGHTEDAVERAGEMATURITY: {
    label: 'Weighted average maturity'
  },
  DAILYNAV: {
    label: 'NAV',
    width: 5
  },
  AVERAGEEFFECTIVEDURATION: {
    label: 'Effective duration'
  },
  // Returns
  MONTHLYONEYEARCUMULATIVE: {
    label: '1 yr.'
  },
  MONTHLYFIVEYEARANNUALIZED: {
    label: '5 yr.'
  },
  MONTHLYTENYEARANNUALIZED: {
    label: '10yr.'
  },
  MONTHLYSINCEINCEPTION: {
    label: 'Incept.'
  }
}
export default tableHeadersConfig
