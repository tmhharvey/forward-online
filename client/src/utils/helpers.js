import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

export const getMask = key => {
  if (key === "workPhone" || key === "mobilePhone") {
    return "999-999-9999";
  }
  return null;
};

export const currencyFormat = value =>
  `$${parseFloat(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

export const infoPopover = description => (
  <Popover id="popoverDemo">
    <p className="m-b-1">{description}</p>
  </Popover>
);

export const popoverHelper = info =>
  info ? (
    <OverlayTrigger placement="top" overlay={infoPopover(info)}>
      <span className="popover-container m-l-2 fas fa-info-circle" />
    </OverlayTrigger>
  ) : null;

export const tableHeaderWithPopovers = {
  "my-patients": [
    {
      columnName: "Open Activity",
      description: `If additional details are required from the prescriber
               for this activity, Accredo will contact you.`
    },
    {
      columnName: "Status",
      description: "something goes here"
    }
  ]
};

export const popoverHeaderHelper = (columnNameInfo, tableName, columnName) => {
  const info = columnNameInfo[tableName].filter(
    columnInfo => columnInfo.columnName === columnName
  );
  return (
    info[0] && (
      <OverlayTrigger
        placement="bottom"
        overlay={infoPopover(info[0].description)}
      >
        <span className="popover-container m-l-1 m-r-1 fas fa-info-circle" />
      </OverlayTrigger>
    )
  );
};
