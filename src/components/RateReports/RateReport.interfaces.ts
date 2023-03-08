/* eslint-disable no-use-before-define */ // It's ok with interfaces in TypeScript

/**
 * *FIX: These interfaces differ from the interfaces on HistoricalYields. These need to be standardized.
 */

export interface RateReportData {
  sections: RRDSection[]
  rateReportTableRows?:SRRDSectionRow[]
}

export interface RRDSection {
  caption: string
  rows: RRDSectionTable[]
}

export interface RRDSectionTable {
  caption: string|null
  rows: RRDSectionRow[]
  type?:string
}

export interface RRDSectionRow {
  fundName: string
  shareClassId: string
  customTradingDeadlines: string[]
  factSheetUrls: string[]
  historicalData: DDFHistoricalData
}

// Stagecoach Rate Report Table Row
export interface SRRDSectionRow extends RRDSectionRow {
  summaryProspectusUrls: []
  prospectusUrls: []
  annualReportUrls: []
  historicalData: DDFHistoricalData
}

export interface DDFHistoricalData {
  Fund: DDFFund
  ShareClass: string
  TANumber: number
  DividendData: DDFDividendData
  HistoricalYields: DDFHistoricalYieldsData
}

export interface DDFDividendData {
  '@AsOfDate': string
  Income: number
  DeclarationDate: string
  DivRecordDate: string
  DivPayableDate: string
  DivExDate: string
  DivReinvestDate: string
  DivReinvestPrice: number
  DivFrequency: string
}

export interface DDFFund {
  '@AsOfDate': string
  FundAccountingId: string
  FundName: string
  InceptionDate: string
  SnapFundId: number
  FundType: DDFFundType
  WFStyle: string
  WFCategory: string
  CanWriteChecks: number
  MMktInvestmentStyle: string
  MMktNAVPolicy: string
  MMktFeesGates: string
  MMktRetailInstitutional: string
  FundFYE: string
  TradingDeadline: string
  BaseCurrency: string
  Classes: DDFClasses
}

export interface DDFClasses {
  FundClass: DDFFundClass[]
}

export interface DDFFundClass {
  '@AsOfDate': string
  CUSIP: string
  ISIN: string
  ClassCurrency: string
  FundName: string
  InceptionDate: string
  SnapFundId: number
  TaNumber: number
  Ticker: string
  NASDAQ: string
  NetExpenseRatio: DDFAcquiredFundFees
  GrossExpenseRatio: DDFAcquiredFundFees
  FeeWaiverContractEndDate: string
  MaximumFrontEndLoad: string
  MaximumContingentDeferredSalesCharge: string
  AcquiredFundFees: DDFAcquiredFundFees
  ContractualCap: DDFAcquiredFundFees
  FundNumber: number
  SortOrder: number
  AccountMinimum: number
  RegularAccount: number
  IRA: number
  Custodial: number
  RregAccountSubsequentInvestments: number
  IRASubsequentInvestments: number
  CustodialSubsequentInvestments: number
  DividendFrequency: string
  CapGainFrequency: string
  ShareType: string
  MgmtFee: DDFAcquiredFundFees
}

export interface DDFAcquiredFundFees {
  '@AsOfDate': string
  $: string
}

export interface DDFFundType {
  '@SubType': string
  $: string
}

export interface DDFHistoricalYieldsData {
  HistoricalItem: DDFHistoricalItem|DDFHistoricalItem[]
}

export interface DDFHistoricalItem {
  NonSECYields: DDFNonSECYields
  DistributionData: DDFDistributionData
  DailyPricing: DDFDailyPricing
}

export interface DDFDailyPricing {
  '@AsOfDate': string
  DailyNAV: number
  DailyOfferPrice: number
  PremDiscount: string
  DailyNavChange: number
  PercChangeNav: number
  DailyWeightedAverageMaturity: number
  YearToDateReturn: number
  DailyClassLevelNetAssets: number
  DailyFundLevelNetAssets: number
  MnthToDateCummFactor: number
  YearToDateHigh: DDFPrevYearHigh
  YearToDateLow: DDFPrevYearHigh
  Week52High: DDFPrevYearHigh
  Week52Low: DDFPrevYearHigh
  PrevYearHigh: DDFPrevYearHigh
  PrevYearLow: DDFPrevYearHigh
  MarketValue: string
  DailyMarketChange: string
  PercMarketChange: string
}

export interface DDFPrevYearHigh {
  '@HighLowDate': string
  $: string
}

export interface DDFDistributionData {
  '@AsOfDate': string
  DailyDistFactor: number
  DailyFatFactor: number
}

export interface DDFNonSECYields {
  '@AsOfDate': string
  SevenDayEffectiveYield: number
  SevenDayCurrentYield: number
  ThirtyDayEffectiveYield: number
  ThirtyDayCurrentYield: number
  ThirtyDayUnsubsidizedYield: string
  OneDayYield: number
  PercYieldChange7DS: number
  SevenDyPreWaiverYield: number
  SevenDyEffPreWaiverYield: number
  DistYieldDaily: number
  DistYieldAtMarketDaily: string
  TwelveMonthYield: string
  DivYield: number
}
