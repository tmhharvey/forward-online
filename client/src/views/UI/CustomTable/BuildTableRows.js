import React from "react";
import _ from "lodash";

const BuildTableRows = ({ tableData, columns }) =>
  tableData.map((row, index) => {
    const fields = [];
    _.each(columns, column => {
      if (column.elements) {
        fields.push(
          <td className="align-middle" key={row.id}>
            {column.elements(index, row)}
          </td>
        );
      } else if (
        !row[column.accessor] ||
        typeof row[column.accessor] === "string"
      ) {
        fields.push(
          <td className="align-middle" key={row.id}>
            {row[column.accessor]}
          </td>
        );
      } else if (
        row[column.accessor] &&
        row[column.accessor].elements &&
        !row[column.accessor].hide
      ) {
        fields.push(
          <td
            className={`align-middle ${row[column.accessor].className || ""}`}
            key={row.id}
          >
            {row[column.accessor].elements}
          </td>
        );
      }
    });

    if (row.style && row.style.hasStyle) {
      return (
        <tr className={row.style.className} key={row.id}>
          {fields}
        </tr>
      );
    }

    return <tr key={row.id}>{fields}</tr>;
  });

export default BuildTableRows;
