import React, { useState } from "react";
import headings from "./headings";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [btnClass, setBtnClass] = useState("");
  var newHeading = "";

  function randomHeading() {
    do {
      newHeading = Math.floor(Math.random() * headings.length);
    }
    while (headingText === headings[newHeading]);
    const randomText = headings[newHeading];
    return randomText
  }

  function handleClick() {
    setHeadingText(randomHeading);
  }

  function handleOnHover() {
    setBtnClass("hover")
  }

  function handleMouseOut() {
    setBtnClass("")
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <div className="small-container">
        <input type="text" placeholder="What's your name?" />
        <button
          className={btnClass}
          onClick={handleClick}
          onMouseOver={handleOnHover}
          onMouseOut={handleMouseOut}>Submit</button>
      </div>
    </div >
  );
}

export default App;
