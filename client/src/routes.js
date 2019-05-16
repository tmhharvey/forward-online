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

const CategoryReport = React.lazy(() =>
  import("./views/CompanyDashboard/CategoryReport/CategoryReport")
);

const BrandReport = React.lazy(() =>
  import("./views/CompanyDashboard/BrandReport/BrandReport")
);

const TrafficSourceReport = React.lazy(() =>
  import("./views/CompanyDashboard/TrafficSourceReport/TrafficSourceReport")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  //Company User-type Routes

  {
    path: "/company-dashboard/home",
    name: "Home Dashboard",
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
    name: "Performance By Product",
    component: ProductReport,
    exact: true
  },
  {
    path: "/company-dashboard/category-report",
    name: "Performance By Category",
    component: CategoryReport,
    exact: true
  },
  {
    path: "/company-dashboard/brand-report",
    name: "Performance By Brand",
    component: BrandReport,
    exact: true
  },
  {
    path: "/company-dashboard/traffic-source-report",
    name: "Performance By Traffic Source",
    component: TrafficSourceReport,
    exact: true
  }
];

export default routes;
