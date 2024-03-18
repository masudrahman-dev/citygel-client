import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

// import { useEffect } from "react";
// import {
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";

function App() {

  {/**This is from ai-5 component */}

  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);





  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
