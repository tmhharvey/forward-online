import React, { Component } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
import "./App.scss";
import CompanyDashboard from "./views/CompanyDashboard/CompanyDashboard";

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

const LenderLayout = Loadable({
  loader: () => import("./containers/LenderLayout"),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import("./views/UI/Login/Login"),
  loading
});

const CompanyLogin = Loadable({
  loader: () => import("./views/CompanyDashboard/CompanyLogin/CompanyLogin"),
  loading
});

const CompanyRegister = Loadable({
  loader: () =>
    import("./views/CompanyDashboard/CompanyRegister/CompanyRegister"),
  loading
});

const CompanyBankAuth = Loadable({
  loader: () =>
    import("./views/CompanyDashboard/CompanyBankAuth/CompanyBankAuth"),
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
          <Switch>
            <Route exact path="/" name="Login Page" component={CompanyLayout} />
            {/* <Route
              exact
              path="/company-login"
              name="Login Page"
              component={CompanyLogin}
            />
            <Route
              exact
              path="/company-register"
              name="Register Page"
              component={() => (
                <CompanyRegister register={this.registerHandler} />
              )}
            /> */}
            <Route
              exact
              path="/company-bank-authentication"
              name="Bank Authentication"
              component={CompanyBankAuth}
            />

            <Route
              path="/company-dashboard"
              name="Home"
              component={CompanyLayout}
            />
            <Route
              path="/lender-dashboard"
              name="Home"
              component={LenderLayout}
            />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default App;
