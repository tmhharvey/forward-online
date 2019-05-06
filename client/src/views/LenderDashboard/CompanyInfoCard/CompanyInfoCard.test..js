import React from "react";
import ReactDOM from "react-dom";
import CompanyInfoCard from "./CompanyInfoCard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CompanyInfoCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
