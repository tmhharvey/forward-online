import React from "react";
import ReactDOM from "react-dom";
import FindCompanies from "./FindCompanies";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FindCompanies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
