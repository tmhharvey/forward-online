import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_companyNav";
// routes config
import routes from "../../routes";
import CompanyLogin from "../../views/CompanyDashboard/CompanyLogin/CompanyLogin";
import CompanyRegister from "../../views/CompanyDashboard/CompanyRegister/CompanyRegister";
import { throws } from "assert";

const CompanyLayoutAside = React.lazy(() => import("./CompanyLayoutAside"));
const CompanyLayoutFooter = React.lazy(() => import("./CompanyLayoutFooter"));
const CompanyLayoutHeader = React.lazy(() => import("./CompanyLayoutHeader"));

class CompanyLayout extends Component {
  state = {
    userId: "",
    userType: "",
    registration: false,
    loggedOut: false
  };

  registrationRender = () => {
    this.setState({
      registration: true
    });
  };

  logoutHandler = () => {
    this.setState({
      loggedOut: true,
      registration: false,
      userId: "",
      userType: ""
    });
  };

  loginHandler = async (e, email, password) => {
    e.preventDefault();

    try {
      console.log("we're about to post login to the server");
      console.log(process.env.REACT_APP_BACKEND);
      const loginResponse = await fetch(
        process.env.REACT_APP_BACKEND + `auth/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password
          }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const parsedRes = await loginResponse.json();
      console.log("We are halfway through the process...");
      console.log(parsedRes.status);

      // If a successful response...

      if (parsedRes.status === 200) {
        console.log("got login data! Response is...");
        console.log(parsedRes.data);

        // clean incoming data

        // set state
        const loginState = { ...this.state.loggedOut };
        const newLoginState = !loginState;

        this.setState({
          loggedOut: newLoginState,
          userId: parsedRes.data.userId,
          userType: parsedRes.data.userType,
          registration: false
        });
      } else {
        console.log("failed to get login data!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  registerHandler = async (e, email, password) => {
    e.preventDefault();

    try {
      console.log("we're about to post login to the server");
      console.log(process.env.REACT_APP_BACKEND);
      const registerResponse = await fetch(
        process.env.REACT_APP_BACKEND + "auth/register",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password
          }),
          credentials: "include",
          headers: {
            "Content-type": "application/json"
          }
        }
      );

      const parsedRes = await registerResponse.json();
      console.log("Register Response Data....." + parsedRes);

      // If a successful response...

      if (parsedRes.status === 200) {
        console.log("Sucessful register! Response is...");
        console.log(parsedRes.data);
        console.log(parsedRes.data.userId);
        console.log(parsedRes.data.userType);

        // set state
        const loginState = { ...this.state.loggedOut };
        const newLoginState = !loginState;
        const newUserType = parsedRes.data.userType;
        this.setState(
          {
            userId: parsedRes.data.userId,
            loggedOut: newLoginState,
            userType: newUserType
          },
          () => {
            window.location.href =
              "http://localhost:3000/#/company-dashboard/profile";
          }
        );
      } else {
        console.log("Failed to register!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">
      <div className="sk-spinner sk-spinner-pulse" />
    </div>
  );

  render() {
    // if (this.state.loggedOut && !this.state.registration) {
    //   return (
    //     <CompanyLogin
    //       login={this.loginHandler}
    //       registration={this.registrationRender}
    //     />
    //   );
    // } else if (this.state.registration && this.state.loggedOut) {
    //   return <CompanyRegister register={this.registerHandler} />;
    // } else if (!this.state.loggedOut) {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <CompanyLayoutHeader logout={this.logoutHandler} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/company-dashboard/home" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <CompanyLayoutFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
    // } else {
    //   return <CompanyLogin login={this.loginHandler} />;
    // }
  }
}

export default CompanyLayout;
