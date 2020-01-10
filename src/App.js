import React from "react";
import ImageTree from "./components/ImageTree";
import NavMenu from "./components/NavMenu";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div className="App-header">
        <h1>NASA Image of the Day</h1>
        <ImageTree />
      </div>
    </div>
  );
}

export default App;
