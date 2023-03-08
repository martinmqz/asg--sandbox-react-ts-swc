
export enum TableTypesEnum {
  /* eslint-disable-next-line no-unused-vars */ // It's ok with enums in Typescript
  CORPORATE_TRUST_SERVICES = 'corporate-trust-services',
  /* eslint-disable-next-line no-unused-vars */ // It's ok with enums in Typescript
  GIB = 'gib',
  /* eslint-disable-next-line no-unused-vars */ // It's ok with enums in Typescript
  AT_A_GLANCE = 'at-a-glance',
  /* eslint-disable-next-line no-unused-vars */ // It's ok with enums in Typescript
  RATE_SHEET = 'rate-sheet',
  /* eslint-disable-next-line no-unused-vars */ // It's ok with enums in Typescript
  STAGECOACH_SWEEP = 'stagecoach-sweep'
}

export function isValidTableType (type:string):boolean {
  return Object.values(TableTypesEnum).includes(type as TableTypesEnum)
}

export type ITableBypesByReportId = Record<string, TableTypesEnum>;

const tableTypesByReportId:ITableBypesByReportId = {
  'wells-fargo-corporate-trust-services': TableTypesEnum.CORPORATE_TRUST_SERVICES,
  'government-and-institutional-banking': TableTypesEnum.GIB,
  'at-a-glance': TableTypesEnum.AT_A_GLANCE,
  'at-a-glance-institutional': TableTypesEnum.AT_A_GLANCE,
  'ultra-short': TableTypesEnum.RATE_SHEET,
  'stagecoach-sweep': TableTypesEnum.STAGECOACH_SWEEP
}

export default tableTypesByReportId
