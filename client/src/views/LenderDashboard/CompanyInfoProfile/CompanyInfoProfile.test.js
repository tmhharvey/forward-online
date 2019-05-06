import React from "react";
import ReactDOM from "react-dom";
import CompanyInfoProfile from "./CompanyInfoProfile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CompanyInfoProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
