import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Portfolio resumeData={resumeData} />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
