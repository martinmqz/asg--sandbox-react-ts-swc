// *Legacy
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react'
import joinClassNames from 'classnames'
import get from 'lodash-es/get'
import isArray from 'lodash-es/isArray'
import { ITableColumnConfig, ITableFixedIncomeConfig, ITableMoneyMarketConfig, ITableNonMoneyMarketConfig, ITableRestConfig } from '../helpers/TableConfig'
import { MappedFund } from '../Performance.data.interfaces'
import { IAssetClassContent } from '../Performance'

export type DataItemJSON = Record<string, string>;
export interface Props {
  config: ITableMoneyMarketConfig | ITableNonMoneyMarketConfig | ITableFixedIncomeConfig | ITableRestConfig
  data: IAssetClassContent
  currentShareClass: string
  selectedCalendar: string; // FIXME - needed for renderer call being passed through state.
}

export interface State {
  selectedCalendar: string
  sortBy: string
  sortOrder: string
  sortedTableData: MappedFund[]
}

/* ================================================== start Component ================================================== */
class PerformanceTable extends React.Component<Props, State> {
  tableData: DataItemJSON[]
  allColumnNames: string[]
  defaultColumnName: string
  isFiltering: boolean

  constructor (props:Props) {
    super(props)
    this.state = {
      selectedCalendar: this.props.selectedCalendar,
      sortBy: this.props.config.columns[0].text as string,
      sortOrder: 'ascending',
      sortedTableData: this.props.data.funds
    }

    this.tableData = []
    this.allColumnNames = []
    this.defaultColumnName = this.props.config.columns[0].text as string
    this.isFiltering = false
    this.handleSortClick = this.handleSortClick.bind(this)
  }

  componentDidUpdate (prevProps:Props) {
    // If the selectedCalendar props was updated, update it in state and re-sort.
    if (this.props.selectedCalendar !== prevProps.selectedCalendar) {
      this.isFiltering = true
      this.setState({ selectedCalendar: this.props.selectedCalendar },
        () => this.handleSortClick(this.state.sortBy, true))
    } else if (this.props.data.funds.length !== prevProps.data.funds.length) { // Else if the data props was updated, update it in state and re-sort.
      this.isFiltering = true
      this.setState({ sortedTableData: this.props.data.funds },
        () => this.handleSortClick(this.state.sortBy, true))
    }
  }

  handleSortClick (headerText: string, reSort = false) {
    let order = this.state.sortOrder
    let by = this.state.sortBy
    const name = this.defaultColumnName

    if (!reSort) {
      // If column name is already being sorted
      if (headerText === by) {
        order = order === 'ascending' ? 'descending' : 'ascending'
      } else if (headerText.toLowerCase() === 'fund' ||
        headerText.toLowerCase() === 'gross/net expenses' ||
        headerText.toLowerCase() === 'morningstar category') {
        by = headerText
        order = 'ascending'
      } else { // if new column name is being sorted
        by = headerText
        order = 'descending'
      }
    }

    // sets a variable to reverse the sorting direction if needed
    const reverse = order === 'ascending' ? 1 : -1

    // sorting of the collected data table
    this.tableData.sort(function (a, b) {
      if (a[`${headerText}`] === b[`${headerText}`]) {
        return a[`${name}`] > b[`${name}`] ? 1 : -1
      } else if (a[`${headerText}`] === '-') {
        return reverse * -1
      } else if (b[`${headerText}`] === '-') {
        return reverse * 1
      }
      return reverse * (a[`${headerText}`] > b[`${headerText}`] ? 1 : -1)
    })

    const newTableData = []

    // Reorders the table in state to match the table sorted by the user selected parameters
    for (const tableDataItem of this.tableData) {
      for (const fund of this.props.data.funds) {
        if (tableDataItem[this.defaultColumnName] === fund.name) {
          newTableData.push(fund)
        }
      }
    }

    this.setState({
      sortBy: by,
      sortOrder: order,
      sortedTableData: newTableData
    })
  }

  renderSortingIcon (headerText: string) {
    let iconClass
    if (this.state.sortBy !== headerText) {
      iconClass = 'fas fa-sort'
    } else {
      iconClass = `fas fa-caret-${this.state.sortOrder === 'ascending' ? 'up' : 'down'} fa-lg`
    }
    return (
      <>
        <br />
        <span className={iconClass}></span>
      </>
    )
  }

  renderTableHead (columns:ITableColumnConfig[], assetClassContent:IAssetClassContent) {
    const headers = []

    for (let i = 0; i < columns.length; i++) {
      const className = joinClassNames(get(columns[i], 'classNames', []))
      const headerText =
        // eslint-disable-next-line @typescript-eslint/ban-types
        typeof columns[i].text === 'function' ? (columns[i].text as Function).call(this, assetClassContent) as string : columns[i].text as string
      this.allColumnNames.push(headerText)
      if (!headerText) {
        headers.push(<th key={i} className={`${className}`} scope="col"></th>)
      } else {
        headers.push(
            <th
                key={i}
            className={`${className} column-sort`}
            role="columnheader"
            scope="col"
            aria-sort={this.state.sortBy === headerText ? (this.state.sortOrder === 'ascending' ? 'ascending' : 'descending') : 'none'} // not sure why usingSortOrder variable doesn't work if value is same
          >
          <button
            onClick={() => this.handleSortClick(headerText)}
            aria-label={`${headerText} column sort ${(this.state.sortBy === headerText) ? this.state.sortOrder : ''}`}
            className={i !== 0 ? 'btn-block' : ''}
          >
            <strong className="column-title">{headerText}</strong>
            {this.renderSortingIcon(headerText)}
          </button>
        </th>)
      }
    }

    return (
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
    )
  }

  /**
   * Checks to see if tableData reset is needed and creates all table rows.
   * @param columns
   * @return a react fragment for each table row.
   */
  renderAllTableRows (columns:ITableColumnConfig[]) {
    if (this.isFiltering) {
      this.tableData = []
      this.isFiltering = false
    }

    return (
      <>
        {this.state.sortedTableData.map((fund, index) => {
          return <React.Fragment key={index}>{this.renderTableRow(columns, fund)}</React.Fragment>
        })}
      </>
    )
  }

  renderTableRow (columns:ITableColumnConfig[], fund:MappedFund) {
    const rowspans:number[] = []
    const rows:any[] = []

    for (const column of columns) {
      if (Object.prototype.hasOwnProperty.call(column, 'rowspan') && typeof column.rowspan === 'function') {
        // eslint-disable-next-line @typescript-eslint/ban-types
        rowspans.push((column.rowspan as Function).call(this, fund) as number)
      } else if (Object.prototype.hasOwnProperty.call(column, 'rowspan') && typeof column.rowspan === 'number') {
        if (column.rowspan) rowspans.push(column.rowspan)
      } else {
        rowspans.push(1)
      }
    }

    const maxRowspans = Math.max(...rowspans)
    for (let j = 0; j < maxRowspans; j++) {
      const cells:any[] = [] // *FIX any type
      for (let k = 0; k < columns.length; k++) {
        if (j && j < rowspans[k]) {
          continue
        }
        const cell = columns[k].renderer.call(this, fund, this.state) as any // *FIX: any type
        const key = `${fund.accountingId}_${j}_${k}`
        if (!cells.length || (k && rowspans[k - 1] > rowspans[k])) {
          cells.push(
              <th
                  key={key}
              scope="row"
              rowSpan={rowspans[k] > 1 ? rowspans[k] : 1}
            >
              {cell?.frags && isArray(cell.frags) ? cell.frags[j] : cell}
            </th>)
        } else {
          cells.push(
              <td
                  key={key}
              className="text-center"
              rowSpan={rowspans[k] > 1 ? rowspans[k] : 1}
            >
              {cell?.frags && isArray(cell.frags) ? cell.frags[j] : cell}
            </td>)
        }
      }

      rows.push(<tr key={j}>{cells}</tr>)
    }

    // Cleans and collects data to be used for sorting. Only needs to be done 1 time.
    if (this.tableData.length < this.props.data.funds.length) {
      const allCells = get(rows, '0.props.children', []) as any[] // Gets all the cells for a table row
      const dataItemJSON:DataItemJSON = {}
      for (let i = 0; i < allCells.length; i++) {
        let dataItem:string
        const gross = get(allCells[i], 'props.children.0') as string
        const expense = get(allCells[i], 'props.children.1.props.children.1.props.children') as string
        // Checks if gross/net expenses exists to format the specific data item. Gross/net expenses follows a different format than other data items.
        if (gross && expense) {
          dataItem = `${expense}~~~${gross}`
        } else {
          dataItem = get(allCells[i], 'props.children.props.children.0.props.children') || // Fund name
            get(allCells[i], 'props.children.props.children') || // NAV
            get(allCells[i], 'props.children.0.props.aria-label') || // Morningstar
            get(allCells[i], 'props.children') // % data, Morningstar category
          // Checks if item is a decimal number and creates a float to be used for the data item.
          if (String(dataItem).includes('.') && !isNaN(parseFloat(dataItem))) {
            dataItem = parseFloat(dataItem).toString()
          } else if (dataItem === 'Not rated') { // If value is not rated (i.e. morningstar returns 0 stars) set to 0 stars
            dataItem = '0 stars'
          }
        }
        dataItemJSON[(this.allColumnNames[i] === '') ? `column-${i}` : this.allColumnNames[i]] = dataItem // Creates key and assigns data item value for each respective item.
      }
      this.tableData.push(dataItemJSON)
    }

    return rows
  }

  render () {
    const columns = this.props.config.columns
    const shareClass = this.props.currentShareClass === 'I' ? 'Inst' : this.props.currentShareClass
    return (
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-sm">
            <caption><h3 className="h4">{this.props.data.name} ({shareClass})</h3></caption>
            {this.renderTableHead(columns, this.props.data)}
            <tbody>
              {this.renderAllTableRows(columns)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
} /* ==================================================  end Component  ================================================== */

export default React.memo(PerformanceTable)
