/* eslint-disable no-use-before-define */ // It's ok with interfaces in TypeScript

/**
 * *FIX: These interfaces differ from the interfaces on RateReports. These need to be standardized.
 */

export interface DDFData {
  HistoricalYieldData: DDFHistoricalYieldData
}

export interface DDFHistoricalYieldData {
  Fund: DDFFund
  DividendData: DDFDividendData
  ShareClass: string
  TANumber: number
  HistoricalYields: DDFHistoricalYields
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
  CUSIP: number | string
  ISIN: string
  ClassCurrency: string
  FundClassName: string
  ClassInceptionDate: string
  SnapFundClassId: number
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
  IRA: number | string
  Custodial: number | string
  RegAccountSubsequentInvestments: number
  IRAsubsequentInvestments: number | string
  CustodialSubsequentInvestments: number | string
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

export interface DDFHistoricalYields {
  HistoricalItem: DDFHistoricalItem[]
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
  DailyFatFactor: number | string
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

export interface IDropdownOption {
  optionDescription:string
  taNumber:string
}
export type IContext = Record<string, React.ReactNode>;
