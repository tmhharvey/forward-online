import React, { Component } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
import ProtectedRoute from "./ProtectedRoute";
import ContextProvider, { AppContext } from "./ContextAPI/ContextProvider";
import withContext from "./ContextAPI/Context_HOC";

import "./App.scss";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const CompanyLayout = Loadable({
  loader: () => import("./containers/CompanyLayout"),
  loading
});

// Pages
const CompanyLogin = Loadable({
  loader: () => import("./views/CompanyDashboard/CompanyLogin/CompanyLogin"),
  loading
});

const CompanyDashboard = Loadable({
  loader: () => import("./views/CompanyDashboard/CompanyDashboard"),
  loading
});

const CompanyRegister = Loadable({
  loader: () =>
    import("./views/CompanyDashboard/CompanyRegister/CompanyRegister"),
  loading
});

const DefaultLogin = Loadable({
  loader: () => import("./views/UI/Login/Login"),
  loading
});

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <ContextProvider>
            <Switch>
              <Route
                exact
                path="/"
                name="Login Page"
                component={withContext(CompanyLogin)}
              />

              <Route
                path="/register"
                name="Register Page"
                component={CompanyRegister}
              />

              <ProtectedRoute
                path="/company-dashboard"
                name="Home"
                component={withContext(CompanyLayout)}
              />
            </Switch>
          </ContextProvider>
        </HashRouter>
      </>
    );
  }
}

export default App;
