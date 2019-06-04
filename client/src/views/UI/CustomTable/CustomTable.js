/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import _ from "lodash";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import BuildPagination from "./BuildPagination";
import BuildTableHeaders from "./BuildTableHeaders";
import BuildTableRows from "./BuildTableRows";
import FilterByKeyword from "./FilterByKeyword";
import "./CustomTable.scss";

const checkPageByService = (
  pageByService,
  showingResults,
  showingResultsTo,
  tableData,
  displayData
) => {
  if (!pageByService) {
    return displayData.slice(showingResults - 1, showingResultsTo);
  }
  return tableData;
};

class CustomTable extends Component {
  static getDerivedStateFromProps(props, state) {
    // eslint-disable-line complexity
    const o = {};

    if (
      !_.isEqual(state.referenceData, props.tableData) ||
      props.tableData.length !== state.referenceData.length
    ) {
      o.referenceData = props.tableData;
      o.displayData = o.referenceData;
    }
    if (props.serviceCall && props.recordCount !== state.recordCount) {
      o.recordCount = props.recordCount;
      o.activePage = 1;
      o.toPage = 1;
      o.showingResults = 1;
      o.showingResultsTo = state.pageSize || props.pageSize;
    }

    return Object.keys(o).length > 0 ? o : null;
  }

  constructor(props) {
    super(props);
    const { columns } = this.props;
    this.columnSorts = [];
    this.customDefaultSort = "";
    columns.forEach(column => {
      if (column.sortFunction) {
        this.columnSorts[column.sortName] = column.sortFunction;
      }

      if (column.defaultSortOrder) {
        this.customDefaultSort = column.sortName;
      }
    });
    const pageSize = props.pageSize || 10;
    this.state = {
      sortOrder: props.sortOrder || "",
      activeSortName: props.activeColumnName || "",
      offset: 1,
      referenceData: props.tableData,
      displayData: props.tableData,
      showingResults: 1,
      showingResultsTo: pageSize,
      activePage: 1,
      toPage: 1,
      pageSize,
      sorted: false,
      filterValue: ""
    };
    this.handlePageSize = this.handlePageSize.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleGoToPage = this.handleGoToPage.bind(this);
    this.sortFunction = this.sortFunction.bind(this);
    this.getPaginationData = this.getPaginationData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleSortDirection = this.toggleSortDirection.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidUpdate(previousProps) {
    const { displayData, sorted } = this.state;
    const { tableData } = this.props;
    if (!sorted && this.customDefaultSort && displayData) {
      this.toggleSortDirection(this.customDefaultSort);
    } else if (
      !this.serviceCall &&
      displayData &&
      !_.isEqual(previousProps.tableData, tableData)
    ) {
      this.filter();
    }
  }

  getPaginationData(pages) {
    const {
      showingResults,
      showingResultsTo,
      activePage,
      pageSize,
      toPage
    } = this.state;
    const { recordCount } = this.props;
    return {
      showingResults,
      showingResultsTo:
        showingResultsTo > recordCount ? recordCount : showingResultsTo,
      activePage,
      pages,
      pageSize,
      handleGoToPage: this.handleGoToPage,
      handlePageSize: this.handlePageSize,
      handlePaginationSelect: this.handlePaginationSelect,
      toPage:
        toPage > pages || isNaN(toPage) || toPage === "0" ? activePage : toPage
    };
  }

  handleGoToPage(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePageSize(e) {
    const {
      pageByService,
      serviceCall,
      tableData,
      showingResults,
      showingResultsTo
    } = this.props;
    if (pageByService) {
      this.setState(
        {
          [e.target.name]: e.target.value,
          toPage: 1,
          offset: 1,
          showingResults: 1,
          showingResultsTo: e.target.value,
          activePage: 1
        },
        () => serviceCall(this.state)
      );
    } else {
      this.setState(
        {
          [e.target.name]: e.target.value,
          toPage: 1,
          showingResults: 1,
          showingResultsTo: e.target.value,
          activePage: 1
        },
        () => tableData.slice(showingResults - 1, showingResultsTo)
      );
    }
  }

  handlePaginationSelect(eventKey) {
    const { pageByService, serviceCall } = this.props;
    const { pageSize } = this.state;
    if (pageByService) {
      this.setState(
        () => ({
          activePage: eventKey,
          offset: eventKey === this.numberOfPages ? 0 : eventKey,
          pageSize,
          toPage: eventKey,
          showingResults: (eventKey - 1) * pageSize + 1,
          showingResultsTo: eventKey * pageSize
        }),
        () => serviceCall(this.state)
      );
    } else {
      this.setState(() => ({
        activePage: eventKey,
        pageSize: parseInt(pageSize, 10),
        toPage: eventKey,
        showingResults: (eventKey - 1) * pageSize + 1,
        showingResultsTo: eventKey * pageSize
      }));
    }
  }

  sortFunction(columnName = this.customDefaultSort) {
    const { displayData, sortOrder } = this.state;
    const tableData = displayData;
    let sortedData;
    if (this.columnSorts[columnName]) {
      sortedData = tableData.sort(this.columnSorts[columnName]);
    } else {
      sortedData = _.sortBy(tableData, [
        i =>
          i[columnName].rawData
            ? i[columnName].rawData.toLowerCase()
            : i[columnName].toLowerCase()
      ]);
    }
    sortedData = sortOrder === "ascending" ? sortedData : sortedData.reverse();
    this.setState({
      activeSortName: columnName,
      displayData: sortedData,
      sorted: true
    });
  }

  toggleSortDirection(columnName) {
    const { sortOrder, activeSortName } = this.state;
    const { serviceCall } = this.props;
    let newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
    newSortOrder = columnName === activeSortName ? sortOrder : "ascending";
    this.setState(
      {
        activeSortName: columnName,
        sortOrder: newSortOrder
      },
      serviceCall
        ? () => serviceCall(this.state)
        : () => this.sortFunction(columnName)
    );
  }

  handleSearch(e) {
    const { pageSize } = this.state;
    this.setState(
      {
        filterValue: e.target.value,
        activePage: 1,
        toPage: 1,
        showingResults: 1,
        showingResultsTo: pageSize
      },
      () => this.filter()
    );
  }

  filter() {
    const { ignoredFilterProperties } = this.props;
    const { referenceData, filterValue, activeSortName } = this.state;
    if (!referenceData || !ignoredFilterProperties) return [];
    const filteredProps =
      ignoredFilterProperties.length > 0
        ? Object.keys(referenceData[0]).filter(p => !referenceData.includes(p))
        : Object.keys(referenceData[0]);
    const result = referenceData.filter(o => {
      let found = false;
      let field = "";
      _.forEach(filteredProps, p => {
        if (typeof o[p] === "string") {
          field = o[p];
        } else if (typeof o[p].rawData === "string") {
          field = o[p].rawData;
        }
        found = field.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
        return !found;
      });
      return found;
    });
    // call this.setState inside of handler to update list
    return this.setState({ displayData: result }, () =>
      this.sortFunction(activeSortName)
    );
  }

  render() {
    // eslint-disable-line complexity
    const {
      columns,
      tableHeaderWithPopovers,
      tableName,
      ignoredSortHeaders,
      hasPagination,
      hasInfoIcons,
      pageByService,
      children,
      hasSearch,
      recordCount,
      entriesTitle
    } = this.props;
    const {
      referenceData,
      showingResults,
      showingResultsTo,
      displayData,
      activeSortName,
      pageSize,
      sortOrder
    } = this.state;
    this.numberOfPages =
      ((recordCount || displayData.length) / pageSize) % 2 !== 0
        ? parseInt(
            Math.ceil((recordCount || displayData.length) / pageSize),
            10
          )
        : parseInt(
            Math.floor((recordCount || displayData.length) / pageSize),
            10
          );
    this.numberOfPages = this.numberOfPages === 0 ? 1 : this.numberOfPages;
    if (!columns || !referenceData) return null;
    const tableContent = checkPageByService(
      pageByService,
      showingResults,
      showingResultsTo,
      referenceData,
      displayData
    );
    return (
      <div className="custom-table">
        {hasSearch && <FilterByKeyword handler={this.handleSearch} />}
        <div className="table-container">
          <Table className="m-b-2">
            <thead>
              <tr>
                <BuildTableHeaders
                  columns={columns}
                  hasInfoIcons={hasInfoIcons}
                  toggleSortDirection={this.toggleSortDirection}
                  tableHeaderWithPopovers={tableHeaderWithPopovers}
                  tableName={tableName}
                  ignoredSortHeaders={ignoredSortHeaders}
                  sortOrder={sortOrder}
                  activeSortName={activeSortName}
                />
              </tr>
            </thead>
            <tbody>
              {tableContent.length === 0 ? (
                <tr className="text-center">
                  <td colSpan="12" className="text-danger">
                    No matching records found
                  </td>
                </tr>
              ) : (
                <BuildTableRows tableData={tableContent} columns={columns} />
              )}
            </tbody>
          </Table>
          <div>
            {hasPagination ? (
              <BuildPagination
                pagination={this.getPaginationData(this.numberOfPages)}
                totalSize={recordCount || referenceData.length}
                data={pageByService ? recordCount : displayData.length}
                entriesTitle={entriesTitle}
              >
                {children}
              </BuildPagination>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CustomTable.propTypes = {
  activeColumnName: PropTypes.string,
  sortOrder: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  serviceCall: PropTypes.func,
  pageSize: PropTypes.number,
  tableHeaderWithPopovers: PropTypes.object,
  columns: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasPagination: PropTypes.bool,
  hasInfoIcons: PropTypes.bool,
  pageByService: PropTypes.bool,
  showingResults: PropTypes.number,
  showingResultsTo: PropTypes.number,
  tableName: PropTypes.string,
  ignoredSortHeaders: PropTypes.arrayOf(PropTypes.string),
  ignoredFilterProperties: PropTypes.arrayOf(PropTypes.string),
  hasSearch: PropTypes.bool,
  recordCount: PropTypes.number,
  entriesTitle: PropTypes.string
};

export default CustomTable;
