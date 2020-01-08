import React from "react";
import ImageTree from "./components/ImageTree";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>NASA Image of the Day</h1>
        <ImageTree />
      </div>
    </div>
  );
}

export default App;
