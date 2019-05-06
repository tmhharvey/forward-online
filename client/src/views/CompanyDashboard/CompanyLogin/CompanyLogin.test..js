import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import CompanyLogin from "./CompanyLogin";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <CompanyLogin />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
