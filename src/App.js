import React from "react";

import jsxImage from "./assets/jsx-src.png";

import "./App.css";

function App() {
  let name = "Hello paragraph";
  return (
    /**
     * JSX code
     */
    <div className="App">
      {/* use expression to view data */}
      <h2 style={{ backgroundColor: "red" }}>{2 * 5}</h2>
      <p className="test-paragraph">{name}</p>

      {/* Closing tags */}
      <hr style={{ width: "50%" }} />

      {/* Warning without the "alt" prop of "img" tag */}
      <img
        src="https://flyclipart.com/thumb2/react-logo-import-io-221727.png"
        style={{ width: "30%" }}
        alt="react logo"
      />

      {/* importing images */}
      {/*  from public */}
      <img src="jsx.png" alt="jsx logo" style={{ width: "30%" }} />
      {/* from src */}
      <img src={jsxImage} alt="jsx logo" style={{ width: "30%" }} />
    </div>

    /**
     * JSX Code => JS code
     */
    // <div className= "App">
    //   <p className= "test-paragraph">Hello paragraph</p>
    // </div>

    // JS code
    // React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("p", { className: "test-paragraph" }),
    //   "Hello paragraph"
    // )
  );
}

export default App;
