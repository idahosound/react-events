import React, { useState } from "react";
import headings from "./headings";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [btnClass, setBtnClass] = useState("");
  const [name, setName] = useState("");
  const [placeholder, setPlaceholder] = useState("What's your name?")
  var newHeading = "";

  function randomHeading() {
    do {
      newHeading = Math.floor(Math.random() * headings.length);
    }
    while (headingText === headings[newHeading]);
    const randomText = headings[newHeading];
    return randomText
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick() {
    if (name) {
      setHeadingText("Hello, " + name);
      setPlaceholder("Who else is there?")
    } else {
      setHeadingText(randomHeading);
      setPlaceholder("What's your name?");
    }
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
          placeholder={placeholder}
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
