export type TickerType = | 'WFDSX'
  | 'WFMIX'
  | 'EQIIX'
  | 'SCVNX'
  | 'WIPIX'
  | 'MBFIX'
  | 'WMBIX'
  | 'SHIXX'
  | 'WRPIX'
  | 'IPBAX'
  | 'WMSIX'

export type TabNameType = 'equities' | 'fixedIncome' | 'multiAsset' | 'sustainable'

export type AudienceType = 'usa' | 'international'

export interface IFundCardData {
  ticker:string
  title: string | null
  heading: string
  description: string
  linkUrl: string | null
  ctaUrl: string | null
  linkText: string
  ctaText: string
  morningstarText?: string
  morningstarRating?: number
}

// export type TabDataType = Record<TabNameType, Record<TickerType, IFundCardData>>;
export type TabDataType = Record<TabNameType, Record<string, IFundCardData>>;
type ICampaignData = Record<AudienceType, TabDataType>;
export default ICampaignData

/*
export interface TabDataType {
  [key: TabNameType]: {
    [key:TickerType]: IFundCardData
  }
}
interface ICampaignData {
  [key:AudienceType]:TabDataType
}
export default interface ICampaignData {
  [key:AudienceType]: {
    [key: TabNameType]: {
      [key:string]: IFundCardData
    }
  }
}
export default interface ICampaignData {
  [key:AudienceType]: {
    [key: AudienceType]: {
      [key:string]: IFundCardData
    }
  }
}
export default interface ICampaignData {
  usa: {
    [key: string]: {
      [key:string]: IFundCardData
    }
  },
  international: {
    [key: string]: {
      [key:string]: IFundCardData
    }
  }
}
*/
