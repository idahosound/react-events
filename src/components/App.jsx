import React, {useState} from "react";
import headings from "./headings";

function App() {

const [headingText, setHeadingText] = useState("Hello")

function randomHeading(){
  const i = Math.floor(Math.random() * headings.length);
  const randomText = headings[i];
  return randomText
}

function btnClick(){
  setHeadingText(randomHeading);
}

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick = {btnClick}>Submit</button>
    </div>
  );
}

export default App;
