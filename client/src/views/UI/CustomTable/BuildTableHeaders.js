import React from "react";
import { Button } from "react-bootstrap";
import { popoverHeaderHelper } from "../../../utils/helpers";
// import { statusDescription } from '../../pages/MyPatients2/helpers';

const getSortIcons = (activeSortName, sortOrder, column) => {
  let sortIcons = null;
  if (activeSortName === column.sortName) {
    const iconType = sortOrder === "ascending" ? "caret-up" : "caret-down";
    sortIcons = (
      <i
        type={iconType}
        title={
          iconType === "ascending"
            ? `Sort ascending based on ${column.value} field`
            : `Sort descending based on ${column.value} field`
        }
        size="1x"
      />
    );
  } else {
    sortIcons = (
      <i
        type="unsorted"
        title={`Sort ascending based on ${column.value} field`}
        size="1x"
      />
    );
  }
  return sortIcons;
};

const BuildTableHeaders = ({
  columns,
  hasInfoIcons,
  toggleSortDirection,
  tableHeaderWithPopovers,
  ignoredSortHeaders,
  tableName,
  sortOrder,
  activeSortName
}) =>
  columns.map(column => {
    const sortIcons = getSortIcons(activeSortName, sortOrder, column);
    return column.sortName ? (
      <th
        className={`p-r-1 ${column.classes ? column.classes : ""}`}
        key={column.sortName}
      >
        {(ignoredSortHeaders &&
          !ignoredSortHeaders.includes(column.sortName)) ||
        !ignoredSortHeaders ? (
          <Button
            className="text-no-underline"
            onClick={() => toggleSortDirection(column.sortName)}
          >
            {column.value}
            {hasInfoIcons
              ? popoverHeaderHelper(
                  tableHeaderWithPopovers,
                  tableName,
                  column.value
                )
              : null}
            {sortIcons}
          </Button>
        ) : (
          <Button className="no-button">Action</Button>
        )}
      </th>
    ) : (
      <th
        className={column.classes ? column.classes : ""}
        key={column.sortName}
      >
        {column.value}
        {hasInfoIcons
          ? popoverHeaderHelper(
              tableHeaderWithPopovers,
              tableName,
              column.value
            )
          : null}
      </th>
    );
  });

export default BuildTableHeaders;
