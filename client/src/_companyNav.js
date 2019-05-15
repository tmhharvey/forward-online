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
      name: "Performance Report",
      url: "/company-dashboard/product-report",
      icon: "fa fa-money"
    }
  ]
};
