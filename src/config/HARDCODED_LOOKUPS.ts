// *Legacy
/**
 * All share-classes. Should come from CMS
 * Pre-Optimizely: /assets/public/json/lookups/fund-share-class.json
 */
// Hardcoded lookups // https://allspringglobal.com/assets/public/json/lookups/all.json
export interface IClientGroup {
  id: string
  _type: string
  assetClasses: string[]
  shareClasses: string[]
}

export interface LookupShareClass {
  name:string
  taNumber:string
  ticker:string
  cusip:string
}
export interface LookupFund {
    name:string,
    accountingId:string,
    siteTypes?:string[],
    assetClasses:{
      ddfIds:string,
      name:string
    }[],
    lookupAssetClasses:string[],
    lookupShareClasses?:LookupShareClass[],
    type?:string
}

export interface ILookups {
  clientGroups: Record<string, IClientGroup>
  shareClassesObj: object
  assetClassesObj: object
  funds: LookupFund[]
  'client-group': object[]
  'primary-topic': object
  tag: object
  'client-country': object[]
  'client-role': object[]
  'content-type': object[]
  'client-region': object[]
  language: object
}

const HARDCODED_LOOKUPS:ILookups = {
  clientGroups: {
    // FA - Financial Advisor // https://allspringglobal.com/assets/public/json/client-groups/1.json
    1: {
      id: '1',
      _type: 'client-group',
      assetClasses: ['us-equity-growth', 'us-equity-value', 'us-equity-blend', 'specialty', 'international-global-equity', 'multi-asset', 'alternative', 'target-date-retirement', 'municipal-fixed-income', 'taxable-fixed-income', 'money-market'],
      shareClasses: ['I', 'Admin', 'A', 'A2', 'C', 'Prm', 'R', 'R4', 'R6', 'Svc', 'Select']
    },
    // None
    // 2: ,
    // DI - Direct Investor / Individual Investor // https://allspringglobal.com/assets/public/json/client-groups/3.json
    3: {
      id: '3',
      _type: 'client-group',
      assetClasses: ['us-equity', 'specialty', 'international-global-equity', 'target-date-retirement', 'multi-asset', 'municipal-fixed-income', 'taxable-fixed-income', 'money-market'],
      shareClasses: ['A', 'A2', 'C', 'Admin', 'Prm', 'I']
    },
    // IC - Institutional Cash Investor // https://allspringglobal.com/assets/public/json/client-groups/4.json
    4: {
      id: '4',
      _type: 'client-group',
      assetClasses: ['government', 'prime-institutional', 'municipal-institutional', 'fixed-income'],
      shareClasses: ['I', 'Select', 'Admin', 'Svc']
    },
    // II - Institutional Investor // https://allspringglobal.com/assets/public/json/client-groups/5.json
    5: {
      id: '5',
      _type: 'client-group',
      assetClasses: ['us-equity-growth', 'us-equity-value', 'us-equity-blend', 'specialty', 'international-global-equity', 'multi-asset', 'alternative', 'target-date-retirement', 'municipal-fixed-income', 'taxable-fixed-income', 'money-market'],
      shareClasses: ['I', 'Admin', 'A2', 'A', 'C', 'Prm', 'R', 'R4', 'R6', 'Select', 'Svc']
    }
  },
  shareClassesObj: {
    A: 'A',
    A2: 'A2',
    Admin: 'Administrator',
    C: 'C',
    I: 'Institutional',
    Prm: 'Premier',
    R: 'R',
    R4: 'R4',
    R6: 'R6',
    Select: 'Select',
    Svc: 'Service'
  },
  assetClassesObj: {
    alternative: 'Alternative',
    'fixed-income': 'Fixed income',
    government: 'Government',
    'international-global-equity': 'International and global equity',
    'money-market': 'Money market',
    'multi-asset': 'Multi-asset',
    'municipal-fixed-income': 'Municipal fixed income',
    'municipal-institutional': 'Municipal institutional',
    'prime-institutional': 'Prime institutional',
    specialty: 'Specialty',
    'target-date-retirement': 'Target date retirement',
    'taxable-fixed-income': 'Taxable fixed income',
    'us-equity': 'U.S. equity',
    'us-equity-blend': 'U.S. equity - Blend',
    'us-equity-growth': 'U.S. equity - Growth',
    'us-equity-value': 'U.S. equity - Value'
  },
  funds: [{
    name: 'Wisconsin Tax-Free Fund',
    accountingId: 'WBAP',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'WealthBuilder Moderate Balanced Fund',
    accountingId: 'WBH4',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'WealthBuilder Growth Balanced Fund',
    accountingId: 'WBH3',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'WealthBuilder Growth Allocation Fund',
    accountingId: 'WBH2',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'WealthBuilder Equity Fund',
    accountingId: 'WBH5',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'WealthBuilder Conservative Allocation Fund',
    accountingId: 'WBH0',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'Utility and Telecommunications Fund',
    accountingId: 'RKB5',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '7',
      name: 'Specialty'
    }],
    lookupAssetClasses: ['specialty']
  }, {
    name: 'Ultra Short-Term Municipal Income Fund',
    accountingId: 'WBAQ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['fixed-income', 'municipal-fixed-income']
  }, {
    name: 'Ultra Short-Term Income Fund',
    accountingId: 'WBB9',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['fixed-income', 'taxable-fixed-income']
  }, {
    name: 'Treasury Plus Money Market Fund',
    accountingId: 'WBCF',
    siteTypes: ['ICM', 'IND', 'IP'],
    assetClasses: [{
      ddfIds: '5',
      name: 'Money market'
    }],
    lookupAssetClasses: ['government', 'money-market']
  }, {
    name: 'Traditional Small Cap Growth Fund',
    accountingId: '2LD1',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Strategic Municipal Bond Fund',
    accountingId: '2LH1',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'Strategic Income Fund',
    accountingId: 'WBBK',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Specialized Technology Fund',
    accountingId: 'WBA1',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '7',
      name: 'Specialty'
    }],
    lookupAssetClasses: ['specialty']
  }, {
    name: 'Special Small Cap Value Fund',
    accountingId: 'Y619',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-value']
  }, {
    name: 'Special Mid Cap Value Fund',
    accountingId: 'WBAB',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-value']
  }, {
    name: 'Small Company Value Fund',
    accountingId: 'WBHX',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-value']
  }, {
    name: 'Small Company Growth Fund',
    accountingId: 'WBHW',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Short-Term Municipal Bond Fund',
    accountingId: 'WBAN',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'Short-Term High Yield Bond Fund',
    accountingId: 'WBB7',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Short-Term Bond Fund',
    accountingId: 'WBB6',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Short Duration Government Bond Fund',
    accountingId: 'WBB5',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Real Return Fund',
    accountingId: 'WBH7',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset' // 'Fixed Income'
    }],
    lookupAssetClasses: ['multi-asset'] // lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Premier Large Company Growth Fund',
    accountingId: '4205',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Precious Metals Fund',
    accountingId: '4290',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '7',
      name: 'Specialty'
    }],
    lookupAssetClasses: ['specialty']
  }, {
    name: 'Pennsylvania Tax-Free Fund',
    accountingId: '4277',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'Opportunity Fund',
    accountingId: 'WBAD',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '9',
      name: 'U.S. equityâ€”blend'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-blend']
  }, {
    name: 'Omega Growth Fund',
    accountingId: '4287',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'National Tax-Free Money Market Fund',
    accountingId: 'WBCA',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '5',
      name: 'Money market'
    }],
    lookupAssetClasses: ['money-market']
  }, {
    name: 'Municipal Cash Management Money Market Fund',
    accountingId: '2L47',
    siteTypes: ['ICM', 'IND', 'IP'],
    assetClasses: [{
      ddfIds: '5',
      name: 'Money market'
    }],
    lookupAssetClasses: ['money-market', 'municipal-institutional']
  }, {
    name: 'Municipal Bond Fund',
    accountingId: 'WBAM',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'Money Market Fund',
    accountingId: 'WBC7',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '5',
      name: 'Money market'
    }],
    lookupAssetClasses: ['money-market']
  }, {
    name: 'Moderate Balanced Fund',
    accountingId: 'WBHG',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'Minnesota Tax-Free Fund',
    accountingId: 'WBAJ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'Large Company Value Fund',
    accountingId: 'WBAX',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-value']
  }, {
    name: 'Large Cap Growth Fund',
    accountingId: 'WBAV',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Large Cap Core Fund',
    accountingId: '2LS8',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '9',
      name: 'U.S. equityâ€”blend'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-blend']
  }, {
    name: 'Intrinsic Small Cap Value Fund',
    accountingId: 'WBAE',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-blend']
  }, {
    name: 'International Equity Fund',
    accountingId: 'WBDH',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: ['international-global-equity']
  }, {
    name: 'International Bond Fund',
    accountingId: '2L78',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Intermediate Tax/AMT-Free Fund',
    accountingId: 'WBAL',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'Index Fund',
    accountingId: 'WBHR',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '9',
      name: 'U.S. equityâ€”blend'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-blend']
  }, {
    name: 'Index Asset Allocation Fund',
    accountingId: 'WBHZ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'High Yield Municipal Bond Fund',
    accountingId: 'WBBM',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'High Yield Bond Fund',
    accountingId: '4203',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Heritage Money Market Fund',
    accountingId: 'WBC5',
    siteTypes: ['ICM', 'IND', 'IP'],
    assetClasses: [{
      ddfIds: '5',
      name: 'Money market'
    }],
    lookupAssetClasses: ['money-market', 'prime-institutional']
  }, {
    name: 'Growth Fund',
    accountingId: 'WBAU',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Growth Balanced Fund',
    accountingId: 'WBHF',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'Government Securities Fund',
    accountingId: 'WBB2',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Government Money Market Fund',
    accountingId: 'WBC4',
    siteTypes: ['ICM', 'IND', 'IP'],
    assetClasses: [{
      ddfIds: '5',
      name: 'Money market'
    }],
    lookupAssetClasses: ['government', 'money-market']
  }, {
    name: 'Global Small Cap Fund',
    accountingId: '422C',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: ['international-global-equity']
  }, {
    name: 'Enterprise Fund',
    accountingId: 'WBA9',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Endeavor Select Fund',
    accountingId: 'WBAS',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Emerging Markets Equity Income Fund',
    accountingId: 'WBDI',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: ['international-global-equity']
  }, {
    name: 'Emerging Markets Equity Fund',
    accountingId: 'RKB7',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: ['international-global-equity']
  }, {
    name: 'Emerging Growth Fund',
    accountingId: 'WBHM',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Dynamic Target Today Fund',
    accountingId: 'WBIA',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2060 Fund',
    accountingId: 'WBIN',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2055 Fund',
    accountingId: 'WBIM',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2050 Fund',
    accountingId: 'WBIL',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2045 Fund',
    accountingId: 'WBIJ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2040 Fund',
    accountingId: 'WBIH',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2035 Fund',
    accountingId: 'WBIG',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2030 Fund',
    accountingId: 'WBIF',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2025 Fund',
    accountingId: 'WBIE',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2020 Fund',
    accountingId: 'WBID',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Dynamic Target 2015 Fund',
    accountingId: 'WBIB',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Diversified Income Builder Fund',
    accountingId: '422K',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'Diversified Capital Builder Fund',
    accountingId: '424C',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'Discovery Fund',
    accountingId: 'WBA8',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-growth']
  }, {
    name: 'Disciplined U.S. Core Fund',
    accountingId: '2L75',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '9',
      name: 'U.S. equityâ€”blend'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-blend']
  }, {
    name: 'Disciplined Small Cap Fund',
    accountingId: 'WBA6',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '9',
      name: 'U.S. equityâ€”blend'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-blend']
  }, {
    name: 'Core Plus Bond Fund',
    accountingId: 'WBB4',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Core Bond Fund',
    accountingId: 'WBH9',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Conservative Income Fund',
    accountingId: 'WBDJ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['fixed-income', 'taxable-fixed-income']
  }, {
    name: 'Common Stock Fund',
    accountingId: 'WBA3',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '9',
      name: 'U.S. equityâ€”blend'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-blend']
  }, {
    name: 'Classic Value Fund',
    accountingId: '2LR5',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-value']
  }, {
    name: 'California Tax-Free Fund',
    accountingId: 'WBAH',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'California Limited-Term Tax-Free Fund',
    accountingId: 'WBAG',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '6',
      name: 'Municipal fixed income'
    }],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'C&B Mid Cap Value Fund',
    accountingId: 'WBA2',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-value']
  }, {
    name: 'C&B Large Cap Value Fund',
    accountingId: 'WBHI',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    }, {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }],
    lookupAssetClasses: ['us-equity', 'us-equity-value']
  }, {
    name: 'Asset Allocation Fund',
    accountingId: '2LK6',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: 'Adjustable Rate Government Fund',
    accountingId: '4252',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '3',
      name: 'Fixed Income'
    }],
    lookupAssetClasses: ['fixed-income', 'taxable-fixed-income']
  }, {
    name: 'Absolute Return Fund',
    accountingId: 'WBBJ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '2',
      name: 'Multi-asset'
    }],
    lookupAssetClasses: ['multi-asset']
  }, {
    name: '100% Treasury Money Market Fund',
    accountingId: 'WBC0',
    siteTypes: ['ICM', 'IND', 'IP'],
    assetClasses: [{
      ddfIds: '5',
      name: 'Money market'
    }],
    lookupAssetClasses: ['government', 'money-market']
  },
  /* ***************************************************************************************************************************************** */
  {
    name: 'Asia Pacific Fund',
    accountingId: 'WBDA',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Capital Growth Fund',
    accountingId: 'WBAR',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    },
    {
      ddfIds: '10',
      name: 'U.S. equityâ€”growth'
    }
    ],
    lookupAssetClasses: []
  }, {
    name: 'Diversified Equity Fund',
    accountingId: 'WBHJ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    },
    {
      ddfIds: '9',
      name: 'U.S. equityâ€”blend'
    }
    ],
    lookupAssetClasses: []
  }, {
    name: 'Diversified International Fund',
    accountingId: 'WBDC',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: []
  }, {
    name: 'International Value Fund',
    accountingId: 'WBHS',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Intrinsic World Equity Fund',
    accountingId: '2LR6',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '4',
      name: 'International and global equity'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Low Volatility U.S. Equity Fund',
    accountingId: 'WBLV',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    },
    {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }
    ],
    lookupAssetClasses: []
  }, {
    name: 'Small Cap Value Fund',
    accountingId: 'WBA7',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '9,10,11',
      name: 'U.S. equity'
    },
    {
      ddfIds: '11',
      name: 'U.S. equityâ€”value'
    }
    ],
    lookupAssetClasses: []
  }, {
    name: 'Target 2010 Fund',
    accountingId: 'WBEQ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2015 Fund',
    accountingId: 'WBER',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2020 Fund',
    accountingId: 'WBES',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2025 Fund',
    accountingId: 'WBEU',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2030 Fund',
    accountingId: 'WBEV',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2035 Fund',
    accountingId: 'WBEW',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2040 Fund',
    accountingId: 'WBEX',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2045 Fund',
    accountingId: 'WBEY',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2050 Fund',
    accountingId: 'WBEZ',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2055 Fund',
    accountingId: 'WBE2',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target 2060 Fund',
    accountingId: 'WBE3',
    siteTypes: ['Default'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  }, {
    name: 'Target Today Fund',
    accountingId: 'WBEP',
    siteTypes: ['IND', 'IP'],
    assetClasses: [{
      ddfIds: '8',
      name: 'Target date retirement'
    }],
    lookupAssetClasses: []
  },
  /** *********************************************************************************************************************************** */
  {
    name: 'Alternative Risk Premia Fund',
    accountingId: 'WBRK',
    type: 'open-end',
    assetClasses: [],
    lookupAssetClasses: ['alternative']
  }, {
    name: 'Dynamic Target 2065 Fund',
    accountingId: 'WBIS',
    type: 'open-end',
    assetClasses: [],
    lookupAssetClasses: ['target-date-retirement']
  }, {
    name: 'Global Dividend Opportunity Fund',
    accountingId: '2LSC',
    type: 'closed-end',
    assetClasses: [],
    lookupAssetClasses: []
  }, {
    name: 'Global Investment Grade Credit Fund',
    accountingId: 'WBSK',
    type: 'open-end',
    assetClasses: [],
    lookupAssetClasses: ['taxable-fixed-income']
  }, {
    name: 'Income Opportunities Fund',
    accountingId: '2LK9',
    type: 'closed-end',
    assetClasses: [],
    lookupAssetClasses: ['specialty']
  }, {
    name: 'Multi-Sector Income Fund',
    accountingId: '2LKC',
    type: 'closed-end',
    assetClasses: [],
    lookupAssetClasses: ['specialty']
  }, {
    name: 'Municipal Sustainability Fund',
    accountingId: 'WBMF',
    type: 'open-end',
    assetClasses: [],
    lookupAssetClasses: ['municipal-fixed-income']
  }, {
    name: 'Special International Small Cap Fund',
    accountingId: 'WBME',
    type: 'open-end',
    assetClasses: [],
    lookupAssetClasses: ['international-global-equity']
  }, {
    name: 'Utilities and High Income Fund',
    accountingId: '2LQC',
    type: 'closed-end',
    assetClasses: [],
    lookupAssetClasses: ['specialty']
  }, {
    name: 'Allspring Global Long/Short Equity Fund',
    accountingId: 'WBF7',
    type: 'open-end',
    assetClasses: [],
    lookupAssetClasses: ['alternative']
  }, {
    name: 'Allspring U.S. Long/Short Equity Fund',
    accountingId: 'WBF8',
    type: 'open-end',
    assetClasses: [],
    lookupAssetClasses: ['alternative']
  }
  ],
  'client-group': [
    { id: '0', name: 'All', metadata: { regions: [], countries: [], roles: [] } },
    { id: 'AU-US-UK-IC-II-TEST', name: 'Country:AU,US,UK / Role:IC,II - Test', metadata: { regions: [], countries: ['AU', 'GB', 'US'], roles: ['IC', 'II'] } }, { name: 'Country:UK / Role:II', metadata: { regions: [], countries: ['GB'], roles: ['II'] } },
    { id: '1', name: 'Financial Advisors', metadata: { regions: [], countries: [], roles: [] } },
    { id: '2', name: 'Financial Advisors - Defined Contribution', metadata: { regions: [], countries: [], roles: [] } },
    { id: '3', name: 'Individual Investors', metadata: { regions: [], countries: [], roles: [] } },
    { id: '4', name: 'Institutional Cash Investors', metadata: { regions: [], countries: [], roles: [] } },
    { id: '5', name: 'Institutional Investors', metadata: { regions: [], countries: [], roles: [] } },
    { id: '6', name: 'Institutional Investors - Defined Contribution', metadata: { regions: [], countries: [], roles: [] } },
    { id: '7', name: 'Professional Investors', metadata: { regions: [], countries: [], roles: [] } },
    { id: '8', name: 'Professional Investors - UCITS Funds', metadata: { regions: [], countries: [], roles: [] } },
    { id: '-1', name: 'Unidentified', metadata: { regions: [], countries: [], roles: [] } },
    { id: 'Q291bnRyeTpBVCAvIFJvbGU6RkEsSUk=', name: '[V3] Country:AT / Role:FA,II', metadata: { regions: [], countries: ['AT'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpBVCxERSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:AT,DE / Role:FA,II', metadata: { regions: [], countries: ['AT', 'DE'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpBVSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:AU / Role:FA,II', metadata: { regions: [], countries: ['AU'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpCRSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:BE / Role:FA,II', metadata: { regions: [], countries: ['BE'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpCRSxGUiAvIFJvbGU6RkEsSUk=', name: '[V3] Country:BE,FR / Role:FA,II', metadata: { regions: [], countries: ['BE', 'FR'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpDSCAvIFJvbGU6RkEsSUk=', name: '[V3] Country:CH / Role:FA,II', metadata: { regions: [], countries: ['CH'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpDTiAvIFJvbGU6RkEsSUk=', name: '[V3] Country:CN / Role:FA,II', metadata: { regions: [], countries: ['CN'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpERSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:DE / Role:FA,II', metadata: { regions: [], countries: ['DE'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpESyAvIFJvbGU6RkEsSUk=', name: '[V3] Country:DK / Role:FA,II', metadata: { regions: [], countries: ['DK'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpFUyAvIFJvbGU6RkEsSUk=', name: '[V3] Country:ES / Role:FA,II', metadata: { regions: [], countries: ['ES'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpGSSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:FI / Role:FA,II', metadata: { regions: [], countries: ['FI'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpGSSxTRSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:FI,SE / Role:FA,II', metadata: { regions: [], countries: ['FI', 'SE'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpGUiAvIFJvbGU6RkEsSUk=', name: '[V3] Country:FR / Role:FA,II', metadata: { regions: [], countries: ['FR'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpHQiAvIFJvbGU6RkEsSUk=', name: '[V3] Country:GB / Role:FA,II', metadata: { regions: [], countries: ['GB'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpISyAvIFJvbGU6RkE=', name: '[V3] Country:HK / Role:FA', metadata: { regions: [], countries: ['HK'], roles: ['FA'] } },
    { id: 'Q291bnRyeTpISyAvIFJvbGU6RkEsSUk=', name: '[V3] Country:HK / Role:FA,II', metadata: { regions: [], countries: ['HK'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpISyAvIFJvbGU6SUk=', name: '[V3] Country:HK / Role:II', metadata: { regions: [], countries: ['HK'], roles: ['II'] } },
    { id: 'Q291bnRyeTpJRSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:IE / Role:FA,II', metadata: { regions: [], countries: ['IE'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpJVCAvIFJvbGU6RkEsSUk=', name: '[V3] Country:IT / Role:FA,II', metadata: { regions: [], countries: ['IT'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpKUCAvIFJvbGU6RkEsSUk=', name: '[V3] Country:JP / Role:FA,II', metadata: { regions: [], countries: ['JP'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpLUiAvIFJvbGU6RkEsSUk=', name: '[V3] Country:KR / Role:FA,II', metadata: { regions: [], countries: ['KR'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpMVSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:LU / Role:FA,II', metadata: { regions: [], countries: ['LU'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpOTCAvIFJvbGU6RkEsSUk=', name: '[V3] Country:NL / Role:FA,II', metadata: { regions: [], countries: ['NL'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpOTyAvIFJvbGU6RkEsSUk=', name: '[V3] Country:NO / Role:FA,II', metadata: { regions: [], countries: ['NO'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpOWiAvIFJvbGU6RkEsSUk=', name: '[V3] Country:NZ / Role:FA,II', metadata: { regions: [], countries: ['NZ'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpQVCAvIFJvbGU6RkEsSUk=', name: '[V3] Country:PT / Role:FA,II', metadata: { regions: [], countries: ['PT'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpTRSAvIFJvbGU6RkEsSUk=', name: '[V3] Country:SE / Role:FA,II', metadata: { regions: [], countries: ['SE'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpTRyAvIFJvbGU6RkEsSUk=', name: '[V3] Country:SG / Role:FA,II', metadata: { regions: [], countries: ['SG'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6REk=', name: '[V3] Country:US / Role:DI', metadata: { regions: [], countries: ['US'], roles: ['DI'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6REksRkEsSUM=', name: '[V3] Country:US / Role:DI,FA,IC', metadata: { regions: [], countries: ['US'], roles: ['DI', 'FA', 'IC'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6REksRkEsSUMsSUk=', name: '[V3] Country:US / Role:DI,FA,IC,II', metadata: { regions: [], countries: ['US'], roles: ['DI', 'FA', 'IC', 'II'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6REksRkEsSUk=', name: '[V3] Country:US / Role:DI,FA,II', metadata: { regions: [], countries: ['US'], roles: ['DI', 'FA', 'II'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6REksSUMsSUk=', name: '[V3] Country:US / Role:DI,IC,II', metadata: { regions: [], countries: ['US'], roles: ['DI', 'IC', 'II'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6RkE=', name: '[V3] Country:US / Role:FA', metadata: { regions: [], countries: ['US'], roles: ['FA'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6RkEsSUMsSUk=', name: '[V3] Country:US / Role:FA,IC,II', metadata: { regions: [], countries: ['US'], roles: ['FA', 'IC', 'II'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6RkEsSUk=', name: '[V3] Country:US / Role:FA,II', metadata: { regions: [], countries: ['US'], roles: ['FA', 'II'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6SUM=', name: '[V3] Country:US / Role:IC', metadata: { regions: [], countries: ['US'], roles: ['IC'] } },
    { id: 'Q291bnRyeTpVUyAvIFJvbGU6SUk=', name: '[V3] Country:US / Role:II', metadata: { regions: [], countries: ['US'], roles: ['II'] } },
    { id: 'UmVnaW9uOkFMTCAvIFJvbGU6REksRkEsSUMsSUk=', name: '[V3] Region:ALL / Role:DI,FA,IC,II', metadata: { regions: ['ALL'], countries: [], roles: ['FA', 'IC', 'II', 'DI'] } },
    { id: 'UmVnaW9uOkFMTCAvIFJvbGU6RkEsSUMsSUk=', name: '[V3] Region:ALL / Role:FA,IC,II', metadata: { regions: ['ALL'], countries: [], roles: ['FA', 'IC', 'II'] } },
    { id: 'UmVnaW9uOkFMTCAvIFJvbGU6RkEsSUk=', name: '[V3] Region:ALL / Role:FA,II', metadata: { regions: ['ALL'], countries: [], roles: ['FA', 'II'] } },
    { id: 'UmVnaW9uOkFQQUMgLyBSb2xlOkZB', name: '[V3] Region:APAC / Role:FA', metadata: { regions: ['APAC'], countries: ['AU', 'HK', 'NZ'], roles: ['FA'] } },
    { id: 'UmVnaW9uOkFQQUMgLyBSb2xlOkZBLElJ', name: '[V3] Region:APAC / Role:FA,II', metadata: { regions: ['APAC'], countries: [], roles: ['FA', 'II'] } },
    { id: 'UmVnaW9uOkFQQUMgLyBSb2xlOklJ', name: '[V3] Region:APAC / Role:II', metadata: { regions: ['APAC'], countries: ['AU', 'HK', 'NZ'], roles: ['II'] } },
    { id: 'UmVnaW9uOkVNRUEgLyBSb2xlOkZB', name: '[V3] Region:EMEA / Role:FA', metadata: { regions: ['EMEA'], countries: [], roles: ['FA'] } },
    { id: 'UmVnaW9uOkVNRUEgLyBSb2xlOkZBLElJ', name: '[V3] Region:EMEA / Role:FA,II', metadata: { regions: ['EMEA'], countries: [], roles: ['FA', 'II'] } },
    { id: 'UmVnaW9uOkVNRUEgLyBSb2xlOklJ', name: '[V3] Region:EMEA / Role:II', metadata: { regions: ['EMEA'], countries: [], roles: ['II'] } },
    { id: 'UmVnaW9uOkxVWCAvIFJvbGU6RkEsSUk=', name: '[V3] Region:LUX / Role:FA,II', metadata: { regions: ['LUX'], countries: [], roles: ['FA', 'II'] } },
    { id: 'UmVnaW9uOk5PTi1VUyAvIFJvbGU6RkEsSUk=', name: '[V3] Region:NON-US / Role:FA,II', metadata: { regions: ['NON-US'], countries: [], roles: ['FA', 'II'] } }],
  'primary-topic': { 0: '-', 'about-us': 'About Us', 'Account Services': 'Account Services', 3: 'Alternative Investing', 'cash-liquidity-management': 'Cash Liquidity Management', 'defined-contribution': 'Defined Contribution', 'economic-analysis': 'Economic Analysis', equities: 'Equities', 'equity-investing': 'Equity Investing', 'factor-investing': 'Factor Investing', 'fixed-income': 'Fixed Income', 'global-investing': 'Global Investing', 'government-and-economy': 'Government & Economy', 'growth-and-sustainable-investing': 'Growth & Sustainable Investing', 'income-and-retirement': 'Income & Retirement', investing: 'Investing', 16: 'Investing for Education', 17: 'Investing for Retirement', ldi: 'LDI', 'market-events': 'Market Events', 'market-volatility': 'Market Volatility', 'multi-asset-solutions': 'Multi-Asset Solutions', 22: 'New Keyword', 'pm-commentary': 'PM Commentary', 'practice-management': 'Practice Management', 'private-credit': 'Private Credit', retirement: 'Retirement', 'retirement-income': 'Retirement Income', 28: 'Service', 'sustainable-investing': 'Sustainable Investing', 'target-date-investing': 'Target Date Investing' },
  tag: { 'Account Services': 'Account Services', 'active-management': 'Active Management', 'alternative-investing': 'Alternative Investing', 'artificial-intelligence': 'Artificial Intelligence', 'asset-allocation': 'Asset Allocation', 'covid-19': 'COVID-19', capabilities: 'Capabilities', china: 'China', 'climate-sector-research-series': 'Climate sector research series', 'closed-end-funds': 'Closed-End Funds', 'collective-funds': 'Collective Funds', coronavirus: 'Coronavirus', 'covered-call': 'Covered Call', 13: 'Data', 'defined-contribution': 'Defined Contribution', diversification: 'Diversification', dividend: 'Dividend', 17: 'ESG Investing', 'economic-analysis': 'Economic Analysis', educational: 'Educational', Elections: 'Elections', 'emerging-markets': 'Emerging Markets', equities: 'Equities', 'Events Affecting the Market': 'Events Affecting the Market', 'Executive management': 'Executive management', 25: 'Factor Investing', 26: 'Federal Reserve', 'financial-well-being': 'Financial Well-Being', 'fixed-income': 'Fixed Income', 'gallup-survey': 'Gallup Survey', geopolitical: 'Geopolitical', 'global-investing': 'Global Investing', growth: 'Growth', 33: 'Growth Stock', 'high-yield': 'High Yield', 35: 'IRA Investing', 'in-conversation-with': 'In conversation with', 37: 'Inflation', innovation: 'Innovation', 39: 'Institutional Cash Investor', 40: 'Insurance', international: 'International', 'international-investing': 'International Investing', investing: 'Investing', 'investment-teams': 'Investment teams', ldi: 'LDI', 'large-cap-investing': 'Large Cap Investing', 'leveraged-loans': 'Leveraged Loans', liquidity: 'Liquidity', 'Market Analysis': 'Market Analysis', 'market-commentary': 'Market Commentary', 'market-volatility': 'Market Volatility', 'mid-cap-investing': 'Mid-Cap Investing', millennials: 'Millennials', 'money-market-funds': 'Money Market Funds', 'multi-asset-solutions': 'Multi-Asset Solutions', 'municipal-fixed-income': 'Municipal Fixed Income', 'mutual-funds': 'Mutual Funds', oil: 'Oil', 'pm-commentary': 'PM Commentary', 'plan-sponsors': 'Plan Sponsors', 61: 'Portfolio Manager Commentary', 'portfolio-solutions': 'Portfolio Solutions', 63: 'Prime Funds', research: 'Research', retirement: 'Retirement', 'retirement-income': 'Retirement Income', 67: 'Retirement Investing', 'retirement-planning': 'Retirement Planning', 'risk-management': 'Risk Management', 70: 'Short duration', 71: 'Small Business Investing', 'small-cap-investing': 'Small Cap Investing', 'social-media-posts': 'Social Media Posts', 'socially-responsible-investing': 'Socially Responsible Investing', 75: 'Sustainable Growth', 'sustainable-investing': 'Sustainable Investing', 77: 'Systematic Investing', tactical: 'Tactical', 'target-date-investing': 'Target Date Investing', 'tax-aware-investing': 'Tax-aware investing', technology: 'Technology', 'the-future': 'The future', trade: 'Trade', 'Transferring accounts': 'Transferring accounts', 85: 'Transferring accounts upon death', 86: 'U.S. Economy', 87: 'Utilities', 88: 'Value Investing' },
  'client-country': [{ id: 'AU', name: 'Australia', metadata: { languages: ['en'], callingCode: 61, flag: { url: '/assets/public/images/flags/au.png', metadata: { decorative: 'No', altText: 'Australia', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'AT', name: 'Austria', metadata: { languages: ['de'], callingCode: 43, flag: { url: '/assets/public/images/flags/at.png', metadata: { decorative: 'No', altText: 'Austria', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'BE', name: 'Belgium', metadata: { languages: ['fr'], callingCode: 32, flag: { url: '/assets/public/images/flags/be.png', metadata: { decorative: 'No', altText: 'Belgium', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'CN', name: 'China', metadata: { languages: ['zh'], callingCode: 86, flag: { url: '/assets/public/images/flags/cn.png', metadata: { decorative: 'No', altText: 'China', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'DK', name: 'Denmark', metadata: { languages: ['da'], callingCode: 45, dateFormat: 'M.d.yyy', flag: { url: '/assets/public/images/flags/dk.png', metadata: { decorative: 'No', altText: 'Denmark', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'FI', name: 'Finland', metadata: { languages: ['sv'], callingCode: 358, flag: { url: '/assets/public/images/flags/fi.png', metadata: { decorative: 'No', altText: 'Finland', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'FR', name: 'France', metadata: { languages: ['fr'], callingCode: 33, phoneNumberFormat: 'x xx xx xx xx', flag: { url: '/assets/public/images/flags/fr.png', metadata: { decorative: 'No', altText: 'France', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'DE', name: 'Germany', metadata: { languages: ['de'], callingCode: 49, phoneNumberFormat: 'xxxx xxxxxxx', flag: { url: '/assets/public/images/flags/de.png', metadata: { decorative: 'No', altText: 'Germany', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'HK', name: 'Hong Kong', metadata: { languages: ['zh'], callingCode: 852, phoneNumberFormat: 'xxxx xxxx', dateFormat: 'd/M/yyy', flag: { url: '/assets/public/images/flags/hk.png', metadata: { decorative: 'No', altText: 'Hong Kong', scaleFactor: '1x' } }, requiresCookieConsent: 'false' } },
    { id: 'IE', name: 'Ireland', metadata: { languages: ['en'], callingCode: 353, flag: { url: '/assets/public/images/flags/ie.png', metadata: { decorative: 'No', altText: 'Ireland', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'IT', name: 'Italy', metadata: { languages: ['it'], callingCode: 39, flag: { url: '/assets/public/images/flags/it.png', metadata: { decorative: 'No', altText: 'Italy', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'JP', name: 'Japan', metadata: { languages: ['ja'], callingCode: 81, flag: { url: '/assets/public/images/flags/jp.png', metadata: { decorative: 'No', altText: 'Japan', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'LU', name: 'Luxembourg', metadata: { languages: ['fr'], callingCode: 352, flag: { url: '/assets/public/images/flags/lu.png', metadata: { decorative: 'No', altText: 'Luxembourg', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'NL', name: 'Netherlands', metadata: { languages: ['nl'], callingCode: 31, flag: { url: '/assets/public/images/flags/nl.png', metadata: { decorative: 'No', altText: 'Netherlands', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'NZ', name: 'New Zealand', metadata: { languages: ['en'], callingCode: 64, flag: { url: '/assets/public/images/flags/nz.png', metadata: { decorative: 'No', altText: 'New Zealand', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'NO', name: 'Norway', metadata: { languages: ['nb'], callingCode: 47, flag: { url: '/assets/public/images/flags/no.png', metadata: { decorative: 'No', altText: 'Norway', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'PT', name: 'Portugal', metadata: { languages: ['pt'], callingCode: 351, flag: { url: '/assets/public/images/flags/pt.png', metadata: { decorative: 'No', altText: 'Portugal', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'SG', name: 'Singapore', metadata: { languages: ['en'], callingCode: 65, flag: { url: '/assets/public/images/flags/sg.png', metadata: { decorative: 'No', altText: 'Singapore', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'KR', name: 'South Korea', metadata: { languages: ['ko'], callingCode: 82, flag: { url: '/assets/public/images/flags/kr.png', metadata: { decorative: 'No', altText: 'South Korea', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'ES', name: 'Spain', metadata: { languages: ['es'], callingCode: 34, flag: { url: '/assets/public/images/flags/es.png', metadata: { decorative: 'No', altText: 'Spain', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'SE', name: 'Sweden', metadata: { languages: ['sv'], callingCode: 46, flag: { url: '/assets/public/images/flags/se.png', metadata: { decorative: 'No', altText: 'Sweden', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'CH', name: 'Switzerland', metadata: { languages: ['fr'], callingCode: 41, flag: { url: '/assets/public/images/flags/ch.png', metadata: { decorative: 'No', altText: 'Switzerland', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'GB', name: 'United Kingdom', metadata: { languages: ['en'], callingCode: 44, phoneNumberFormat: 'xxx xxxx xxxx', flag: { url: '/assets/public/images/flags/gb.png', metadata: { decorative: 'No', altText: 'United Kingdom', scaleFactor: '1x' } }, requiresCookieConsent: 'true' } },
    { id: 'US', name: 'United States', metadata: { languages: ['en'], callingCode: 1, phoneNumberFormat: 'xxx-xxx-xxxx', flag: { url: '/assets/public/images/flags/us.png', metadata: { decorative: 'No', altText: 'United States of America', scaleFactor: '1x' } }, requiresCookieConsent: 'false' } }],
  'client-role': [{ id: 'DI', name: 'Direct Investor', metadata: { aliases: [{ country: 'US', alias: 'Individual Investor' }] } },
    { id: 'FA', name: 'Financial Advisor', metadata: { aliases: [{ region: 'NON-US', country: 'AU', alias: 'Financial Intermediary' }, { country: 'AT', alias: 'Financial Intermediary' }, { country: 'BE', alias: 'Financial Intermediary' }, { country: 'CN', alias: 'Financial Intermediary' }, { country: 'DK', alias: 'Financial Intermediary' }, { country: 'FI', alias: 'Financial Intermediary' }, { country: 'FR', alias: 'Financial Intermediary' }, { country: 'DE', alias: 'Financial Intermediary' }, { country: 'HK', alias: 'Financial Intermediary' }, { country: 'IE', alias: 'Financial Intermediary' }, { country: 'IT', alias: 'Financial Intermediary' }, { country: 'JP', alias: 'Financial Intermediary' }, { country: 'LU', alias: 'Financial Intermediary' }, { country: 'NL', alias: 'Financial Intermediary' }, { country: 'NZ', alias: 'Financial Intermediary' }, { country: 'NO', alias: 'Financial Intermediary' }, { country: 'PT', alias: 'Financial Intermediary' }, { country: 'SG', alias: 'Financial Intermediary' }, { country: 'KR', alias: 'Financial Intermediary' }, { country: 'ES', alias: 'Financial Intermediary' }, { country: 'SE', alias: 'Financial Intermediary' }, { country: 'CH', alias: 'Financial Intermediary' }, { country: 'GB', alias: 'Financial Intermediary' }] } },
    { id: 'IC', name: 'Institutional Cash Investor', metadata: { aliases: [] } },
    { id: 'II', name: 'Institutional Investor', metadata: { aliases: [] } }],
  'content-type': [{ id: 'about-us', name: 'About Us' },
    { id: 'about-us:biography', name: 'About Us - Biography', metadata: { a: [{ scope: 'default', icg: ['Q291bnRyeTpVUyAvIFJvbGU6RkE='] }, { scope: 'teams', icg: ['UmVnaW9uOkFMTCAvIFJvbGU6RkEsSUMsSUk='] }, { scope: 'funds', icg: ['UmVnaW9uOkFMTCAvIFJvbGU6REksRkEsSUMsSUk='] }, { scope: 'strategies', icg: ['UmVnaW9uOkFMTCAvIFJvbGU6RkEsSUMsSUk='] }] } },
    { id: 'campaign', name: 'Campaign' },
    { id: 'documents:addendum', name: 'Documents - Addendum' },
    { id: 'documents:annual-report', name: 'Documents - Annual Report' },
    { id: 'documents:daily-holdings', name: 'Documents - Daily Holdings' },
    { id: 'documents:daily-nav-publication', name: 'Documents - Daily NAV Publication' },
    { id: 'documents:esg-methodology', name: 'Documents - ESG Methodology' },
    { id: 'documents:fact-sheet', name: 'Documents - Fact Sheet' },
    { id: 'documents:fund-profile', name: 'Documents - Fund Profile' },
    { id: 'documents:kfs', name: 'Documents - KFS' },
    { id: 'documents:kiid', name: 'Documents - KIID' },
    { id: 'documents:monthly-attribution-report', name: 'Documents - Monthly Attribution Report' },
    { id: 'documents:monthly-commentary', name: 'Documents - Monthly Commentary' },
    { id: 'documents:monthly-holdings', name: 'Documents - Monthly Holdings' },
    { id: 'documents:notice-to-shareholders', name: 'Documents - Notice to Shareholders' },
    { id: 'documents:prospectus', name: 'Documents - Prospectus' },
    { id: 'documents:quarterly-commentary', name: 'Documents - Quarterly Commentary' },
    { id: 'documents:sai', name: 'Documents - SAI' },
    { id: 'documents:sfdr-methodology', name: 'Documents - SFDR Methodology' },
    { id: 'documents:sales-sheet', name: 'Documents - Sales Sheet' },
    { id: 'documents:semi-annual-report', name: 'Documents - Semi-Annual Report' },
    { id: 'documents:summary-prospectus', name: 'Documents - Summary Prospectus' },
    { id: 'documents:sustainability-related-disclosure', name: 'Documents - Sustainability Related Disclosure' },
    { id: 'documents:wfwf-sfdr-methodology', name: 'Documents - WFWF SFDR Methodology' },
    { id: 'documents:weekly-portfolio-reporting', name: 'Documents - Weekly Portfolio Reporting' },
    { id: 'error', name: 'Error' },
    { id: 'home', name: 'Home' },
    { id: 'insights', name: 'Insights' },
    { id: 'insights:article', name: 'Insights - Article' },
    { id: 'insights:audio', name: 'Insights - Audio' },
    { id: 'insights:product', name: 'Insights - Product' },
    { id: 'insights:video', name: 'Insights - Video' },
    { id: 'investments', name: 'Investments' },
    { id: 'investments:capabilities', name: 'Investments - Capabilities' },
    { id: 'investments:product', name: 'Investments - Product', metadata: { a: [{ scope: 'default', icg: [] }, { scope: 'documents', icg: ['UmVnaW9uOkxVWCAvIFJvbGU6RkEsSUk='] }, { scope: 'kiids', icg: ['UmVnaW9uOkVNRUEgLyBSb2xlOkZBLElJ'] }] } },
    { id: 'investments:strategy', name: 'Investments - Strategy', metadata: { a: [{ scope: 'default', icg: ['UmVnaW9uOkFMTCAvIFJvbGU6REksRkEsSUMsSUk='] }, { scope: 'funds', icg: ['UmVnaW9uOkFMTCAvIFJvbGU6REksRkEsSUMsSUk='] }, { scope: 'documents', icg: ['UmVnaW9uOkxVWCAvIFJvbGU6RkEsSUk='] }, { scope: 'kiids', icg: ['UmVnaW9uOkVNRUEgLyBSb2xlOkZBLElJ'] }, { scope: 'separateAccounts', icg: ['UmVnaW9uOkFMTCAvIFJvbGU6RkEsSUMsSUk='] }, { scope: 'separatelyManagedAccounts', icg: ['Q291bnRyeTpVUyAvIFJvbGU6RkE='] }] } },
    { id: 'investments:teams', name: 'Investments - Team' },
    { id: 'legal', name: 'Legal' },
    { id: 'other', name: 'Other' },
    { id: 'pr', name: 'Press Release' },
    { id: 'resources', name: 'Resources' },
    { id: 'resources:account-services', name: 'Resources - Account Services' },
    { id: 'resources:money-market-primers', name: 'Resources - Money Market Primers' },
    { id: 'resources:practice-management', name: 'Resources - Practice Management' },
    { id: 'resources:product-alert:product', name: 'Resources - Product Alert - Product' }],
  'client-region': [{ id: 'APAC', name: 'APAC Countries', metadata: { countries: ['AU', 'CN', 'HK', 'JP', 'NZ', 'SG', 'KR'] } },
    { id: 'ALL', name: 'All Countries', metadata: { countries: ['AU', 'AT', 'BE', 'CN', 'DK', 'FI', 'FR', 'DE', 'HK', 'IE', 'IT', 'JP', 'LU', 'NL', 'NZ', 'NO', 'PT', 'SG', 'KR', 'ES', 'SE', 'CH', 'GB', 'US'] } },
    { id: 'EMEA', name: 'EMEA Countries', metadata: { countries: ['AT', 'BE', 'DK', 'FI', 'FR', 'DE', 'IE', 'IT', 'LU', 'NL', 'NO', 'PT', 'ES', 'SE', 'CH', 'GB'] } },
    { id: 'LUX', name: 'Lux Fund Countries', metadata: { countries: ['AT', 'BE', 'DK', 'FI', 'FR', 'DE', 'HK', 'IE', 'IT', 'LU', 'NL', 'NO', 'PT', 'ES', 'SE', 'CH', 'GB'] } },
    { id: 'NON-US', name: 'Non-US Countries', metadata: { countries: ['AU', 'AT', 'BE', 'CN', 'DK', 'FI', 'FR', 'DE', 'HK', 'IE', 'IT', 'JP', 'LU', 'NL', 'NZ', 'NO', 'PT', 'SG', 'KR', 'ES', 'SE', 'CH', 'GB'] } }],
  language: { zh: 'Chinese', da: 'Danish', nl: 'Dutch', en: 'English', fr: 'French', de: 'German', it: 'Italian', ja: 'Japanese', ko: 'Korean', nb: 'Norwegian', pt: 'Portuguese', es: 'Spanish', sv: 'Swedish' }
}

export default HARDCODED_LOOKUPS
