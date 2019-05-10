import React, { Component } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
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
const Login = Loadable({
  loader: () => import("./views/UI/Login/Login"),
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
            <Route exact path="/" name="Login Page" component={Login} />
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
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default App;
