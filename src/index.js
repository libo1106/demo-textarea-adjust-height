import React from "react";
import ReactDOM from "react-dom";

import TextArea from "./textarea";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>高度自适应的 textarea</h1>
      <div className="demo-container">
        <TextArea />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
