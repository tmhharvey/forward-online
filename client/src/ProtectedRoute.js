import React from "react";
import { Route, Redirect } from "react-router-dom";
import withContext from "./ContextAPI/Context_HOC";

const ProtectedRoute = ({
  context: {
    state: { authenticated }
  },
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default withContext(ProtectedRoute);
