import tableHeaders from './table-headers'
import tableTypesByReportId, { ITableBypesByReportId } from './table-types-by-report-id'
import tableHeadersConfig, { ITableHeadersConfig } from './row-headings-config'

export interface ITableConfig {
  tableHeaders:ITableHeadersConfig
  tableTypesByReportId:ITableBypesByReportId
  tableHeadersConfig:ITableHeadersConfig
}

const tableConfig = {
  tableHeaders,
  tableTypesByReportId,
  tableHeadersConfig
}
export default tableConfig
