/* eslint-disable no-unused-vars */ // It's ok with enums in TypeScript
/* eslint-disable no-use-before-define */ // It's ok with interfaces in TypeScript

//
/// Data interfaces
//
export interface MappedPerformance {
  [index:string]:MappedMonthEnd|MappedQuarterEnd|boolean
  showNav:boolean
  showPop:boolean
  monthEnd: MappedMonthEnd
  quarterEnd: MappedQuarterEnd
}
export interface MappedFund {
  accountingId: string
  name: string
  shareClass: string
  ticker: string
  inceptionDate: string
  secYieldAsOfDate: string
  nonSecYieldAsOfDate: string
  fundStatsAsOfDate: string
  performance: MappedPerformance
  distributions: MappedDistributions
  yields: MappedYields
  profileOverviewUrl: string
}
export interface MappedMonthEnd {
  NAV: {
    threeMonth:string
    ytd:string
    oneYear:string
    threeYear:string
    fiveYear:string
    tenYear:string
    sinceInception:string
  }
  POP: {
    threeMonth:string
    ytd:string
    oneYear:string
    fiveYear:string
    tenYear:string
    sinceInception:string
  }
  weightedAverageMaturity:string
  morningstar: {
    rating:number
    totalFunds:number
    category:string
  }
  expenseRatios: {
    gross:string
    net:string
    contractEndDate:string
  }
}
export interface MappedQuarterEnd {
  NAV: {
    threeMonth:string
    ytd:string
    oneYear:string
    threeYear:string
    fiveYear:string
    tenYear:string
    sinceInception:string
  }
  POP: {
    threeMonth:string
    ytd:string
    oneYear:string
    fiveYear:string
    tenYear:string
    sinceInception:string
  }
  weightedAverageMaturity:string
  morningstar: {
    rating:number
    totalFunds:number
    category:string
  }
  expenseRatios: {
    gross:string
    net:string
    contractEndDate:string
  }
}
export interface MappedDistributions {
    useDividends:boolean
    useCapGains:boolean
    dividends: {
      income:string
      recordDate:string
      exDate:string
      payableDate:string
      reinvestPrice:string
    }
    capGains: {
      shortTerm:string
      longTerm:string
      recordDate:string
      exDate:string
      payableDate:string
      reinvestPrice:string
    }
}
export interface MappedYields {
  NAV:string
  dailyChange: {
    dollar:string
    percent:string
  }
  ytdReturn:string
  oneDay:string
  sevenDayCurrent:string
  sevenDayEffective:string
  sevenDayPrewaiver:string
  thirtyDayCurrent:string
  thirtyDaySec:string
  thirtyDayEffective:string
  thirtyDaySecUnsubsidized:string
  effectiveDuration:string
  dailyFactor:string
  distributionYield:string
}
export interface MappedContent {
  accountingId:string
  name:string
  shareClass:string
  ticker:string
  inceptionDate:string
  secYieldAsOfDate:string
  nonSecYieldAsOfDate:string
  fundStatsAsOfDate:string
}

//
/// DDF
//
export interface DDFData {
    SearchResults: DDFSearchResults;
    FundProfilePageUrl: string
}

export interface DDFSearchResults {
  ResultCount: string;
  Result: DDFResult[];
}

export interface DDFResult {
  Performance: DDFPerformance;
  PricesYields: DDFPricesYields;
  Distributions: DDFDistributions;
}

export interface DDFDistributions {
  useCapGains: DDFUseCapGains;
  useDividends: DDFUseCapGains;
  DividendData?: DDFDividendData;
  CapGainsData?: DDFCapGainsData;
}

export interface DDFCapGainsData {
  '@AsOfDate': string;
  LongTermCapitalGain: string;
  ShortTermCapitalGain: string;
  TotalCapitalGains: string;
  DeclarationDate: string;
  CapGainRecordDate: string;
  CapGainPayableDate: string;
  CapGainExDate: string;
  CapGainReinvestDate: string;
  CapGainReinvestPrice: string;
  CapGainFrequency: DDFCapGainFrequency;
}

export enum DDFCapGainFrequency {
  Annually = 'Annually',
  SemiAnnually = 'Semi-Annually'
}

export interface DDFDividendData {
  '@AsOfDate': string;
  Income: string;
  DeclarationDate: string;
  DivRecordDate: string;
  DivPayableDate: string;
  DivExDate: string;
  DivReinvestDate: string;
  DivReinvestPrice: string;
  DivFrequency: DDFDivFrequency;
}

export enum DDFDivFrequency {
  Annually = 'Annually',
  Monthly = 'Monthly',
  MonthlyDailyAccrual = 'Monthly/Daily accrual',
  MonthlyMonthlyAccrual = 'Monthly/Monthly accrual',
  Quarterly = 'Quarterly'
}

export enum DDFUseCapGains {
  N = 'N',
  Y = 'Y'
}

export interface DDFPerformance {
  FundName: string;
  FundAccountingId: string;
  ShareClass: DDFShareClass;
  AssetClasses: DDFAssetClasses;
  CUSIP: string;
  TaNumber: string;
  FEATURED_FUND: string;
  ClassInceptionDate: string;
  Ticker: string;
  GrossExpenseRatio: DDFContractualCap;
  NetExpenseRatio: DDFContractualCap;
  GrossExpenseRatioQuarterEnd: DDFGrossExpenseRatioQuarterEnd;
  NetExpenseRatioQuarterEnd: DDFNetExpenseRatioQuarterEnd;
  FeeWaiverContractEndDate: string;
  ContractualCap: DDFContractualCap;
  SevenDayCurrentYield?: string;
  SevenDayEffectiveYield?: string;
  SevenDyPreWaiverYield?: string;
  SevenDayYieldsMonthEnd: DDFSevenDayYieldsMonthEndClass | DDFSevenDayYieldsMonthEndEnum;
  WeightedAverageMaturity: string;
  WeightedAverageMaturityQuarterEnd: DDFWeightedAverageMaturityQuarterEndClass | string;
  SECYieldsAsOfDate: string;
  NonSECYieldsAsOfDate: string;
  Nav: DDFNav;
  Morningstar: DDFMorningstar;
  MorningstarQuarterEnd: DDFMorningstar;
}

export interface DDFAssetClasses {
  AssetClass: DDFAssetClass;
}

export interface DDFAssetClass {
  AssetClassName: string;
  AssetClassId: string;
}

export interface DDFContractualCap {
  '@AsOfDate': string;
  $: string;
}

export interface DDFGrossExpenseRatioQuarterEnd {
  GrossExpenseRatio: DDFContractualCap;
}

export interface DDFMorningstar {
  RatingOverall: string;
  TotalNumFunds: string;
  CategoryName?: string;
}

export interface DDFNav {
  ShowNav: DDFUseCapGains;
  ShowPop: DDFUseCapGains;
  MonthlyReturns: DDFMonthlyReturns;
  QuarterlyReturns: DDFQuarterlyReturns;
}

export interface DDFMonthlyReturns {
  '@AsOfDate': string;
  MonthlyOneMonthCumulative: DDFMonthlyEightYearAnnualized;
  MonthlyThreeMonthCumulative: DDFMonthlyEightYearAnnualized;
  MonthlySixMonthCumulative: DDFMonthlyEightYearAnnualized;
  MonthlyYearToDateCumulative: DDFMonthlyEightYearAnnualized;
  MonthlyOneYearCumulative: DDFMonthlyEightYearAnnualized;
  MonthlyTwoYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyThreeYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyFourYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyFiveYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlySixYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlySevenYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyEightYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyNineYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyTenYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyFifteenYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlyTwentyYearAnnualized: DDFMonthlyEightYearAnnualized;
  MonthlySinceInception: DDFMonthlyEightYearAnnualized;
}

export interface DDFMonthlyEightYearAnnualized {
  LoadApplied: string;
  LoadWaived: string;
}

export interface DDFQuarterlyReturns {
  '@AsOfDate': string;
  QuarterlyOneMonthCumulative: DDFMonthlyEightYearAnnualized;
  QuarterlyThreeMonthCumulative: DDFMonthlyEightYearAnnualized;
  QuarterlySixMonthCumulative: DDFMonthlyEightYearAnnualized;
  QuarterlyYearToDateCumulative: DDFMonthlyEightYearAnnualized;
  QuarterlyOneYearCumulative: DDFMonthlyEightYearAnnualized;
  QuarterlyTwoYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyThreeYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyFourYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyFiveYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlySixYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlySevenYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyEightYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyNineYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyTenYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyFifteenYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlyTwentyYearAnnualized: DDFMonthlyEightYearAnnualized;
  QuarterlySinceInception: DDFMonthlyEightYearAnnualized;
  QuarterlyBestSinceInception: DDFQuarterlyStSinceInception;
  QuarterlyWorstSinceInception: DDFQuarterlyStSinceInception;
}

export interface DDFQuarterlyStSinceInception {
  '@BestWorstDate': string;
  $: string;
}

export interface DDFNetExpenseRatioQuarterEnd {
  NetExpenseRatio: DDFContractualCap;
}

export interface DDFSevenDayYieldsMonthEndClass {
  SevenDayCurrentYield: string;
  SevenDayEffectiveYield: string;
  SevenDyPreWaiverYield: string;
}

export enum DDFSevenDayYieldsMonthEndEnum {
  Empty = '\n\t\t\n\t\t\n\t\t\n\t\t'
}

export enum DDFShareClass {
  I = 'I'
}

export interface DDFWeightedAverageMaturityQuarterEndClass {
  WeightedAverageMaturity: string;
}

export interface DDFPricesYields {
  DailyNAV: string;
  PercChangeNav: string;
  YearToDateReturn: string;
  DailyNavChange: string;
  DailyPricingAsOfDate: string;
  ThirtyDayCurrentYield?: string;
  ThirtyDayEffectiveYield?: string;
  TaxableEquivalentYield?: DDFTaxableEquivalentYieldClass | string;
  ThirtyDaySECYield?: string;
  ThirtyDaySECunsubsidizedYield?: string;
  AverageEffectiveDuration?: string;
  FundStatsAsOfDate: string;
  OneDayYield?: string;
  DistYieldDaily?: string;
  DailyDistFactor?: string;
}

export interface DDFTaxableEquivalentYieldClass {
  Bracket: DDFBracket[];
}

export interface DDFBracket {
  TaxRate: string;
  Yield: string;
}
