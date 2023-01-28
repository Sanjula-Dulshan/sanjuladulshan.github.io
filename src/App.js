import React from "react";
import Header from "./component/Head/Header";
import Features from "./component/Features/Features";
import Home from "./component/Hero/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />
    </>
  );
};

export default App;
