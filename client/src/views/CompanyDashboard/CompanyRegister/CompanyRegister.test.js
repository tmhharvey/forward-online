import React from "react";
import ReactDOM from "react-dom";
import CompanyRegister from "./CompanyRegister";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CompanyRegister />, div);
  ReactDOM.unmountComponentAtNode(div);
});
