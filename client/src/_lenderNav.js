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
      url: "/lender-dashboard/home",
      icon: "cui-dashboard"
    },
    {
      name: "Find Companies",
      url: "/lender-dashboard/find-companies",
      icon: "cui-magnifying-glass icons font-1xl"
    },
    {
      name: "Settings",
      url: "/lender-dashboard/settings",
      icon: "fa fa-gears"
    }
  ]
};
