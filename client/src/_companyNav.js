export default {
  items: [
    {
      title: true,
      name: "Dashboard",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "mt-4" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Home",
      url: "/company-dashboard/home",
      icon: "cui-dashboard"
    },
    {
      title: true,
      name: "Reports",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "mt-4" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Traffic Source Perf.",
      url: "/company-dashboard/traffic-source-report",
      icon: "fa fa-line-chart"
    },
    {
      name: "Category Performance",
      url: "/company-dashboard/category-report",
      icon: "fa fa-line-chart"
    },
    {
      name: "Brand Performance",
      url: "/company-dashboard/brand-report",
      icon: "fa fa-line-chart"
    },

    {
      name: "Product Performance",
      url: "/company-dashboard/product-report",
      icon: "fa fa-line-chart"
    }
  ]
};
