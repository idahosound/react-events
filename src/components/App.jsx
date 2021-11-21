import React, { useState } from "react";
import headings from "./headings";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [btnClass, setBtnClass] = useState("");
  const [name, setName] = useState("");
  var newHeading = "";

  function randomHeading() {
    do {
      newHeading = Math.floor(Math.random() * headings.length);
    }
    while (headingText === headings[newHeading]);
    const randomText = headings[newHeading];
    return randomText
  }

  function handleChange(event){
    setName(event.target.value)
  }

  function handleClick() {
    name ? setHeadingText("Hello, " + name) : setHeadingText(randomHeading);
    setName("");
  }

  function handleOnHover(event) {
    setBtnClass("hover")
  }

  function handleMouseOut() {
    setBtnClass("")
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <div className="small-container">
        <input 
          type="text" 
          placeholder="What's your name?"
          onChange={handleChange}
          value={name} />
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
