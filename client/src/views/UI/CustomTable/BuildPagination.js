import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
// import { keyPress } from '../../utils/helpers';
import Pagination from "react-js-pagination";
import Select from "../Select";

class BuildPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      pagination: {
        pageSize,
        handlePageSize,
        handlePaginationSelect,
        showingResults,
        showingResultsTo,
        handleGoToPage,
        activePage,
        toPage,
        pages,
        totalSize
      },
      data,
      entriesTitle,
      children
    } = this.props;
    return (
      <div className="pagination">
        <div className="paginationDiv">
          {children || (
            <div className="page-size">
              Show:
              <Select
                name="pageSize"
                options={["1", "5", "10", "50", "100"]}
                value={pageSize}
                id="activityLogPageSize"
                onChange={handlePageSize}
                className="form-control-md"
              />
              {/* Go to Page
              <Form.Control
                className="go-to-page form-control-md"
                value={toPage}
                name="toPage"
                // onKeyPress={e => keyPress(e, handlePaginationSelect)}
                onChange={handleGoToPage}
              />{" "}
              of {pages} */}
            </div>
          )}
        </div>
        <div className="text-center showing-results">
          Showing {data === 0 ? 0 : showingResults} to{" "}
          {showingResultsTo > data ? data : showingResultsTo} of {data}{" "}
          {entriesTitle === undefined ? "entries" : entriesTitle}
          {data < totalSize
            ? ` (Filtered from ${totalSize} total entries)`
            : null}
        </div>
        <div className="pagination-buttons">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={pageSize}
            totalItemsCount={data}
            pageRangeDisplayed={pages}
            onChange={handlePaginationSelect}
          />
        </div>
      </div>
    );
  }
}

BuildPagination.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.number,
  pagination: PropTypes.object,
  entriesTitle: PropTypes.string
};

export default BuildPagination;
