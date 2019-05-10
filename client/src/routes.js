import React from "react";

const CompanyDashboard = React.lazy(() =>
  import("./views/CompanyDashboard/CompanyDashboard")
);

const CompanyProfile = React.lazy(() =>
  import("./views/CompanyDashboard/Profile/Profile")
);

const ProductReport = React.lazy(() =>
  import("./views/CompanyDashboard/ProductReport/ProductReport")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  //Company User-type Routes

  {
    path: "/company-dashboard/home",
    name: "Home",
    component: CompanyDashboard,
    exact: true
  },
  {
    path: "/company-dashboard/profile",
    name: "Company Profile",
    component: CompanyProfile,
    exact: true
  },
  {
    path: "/company-dashboard/product-report",
    name: "Performance Report",
    component: ProductReport,
    exact: true
  }
];

export default routes;
