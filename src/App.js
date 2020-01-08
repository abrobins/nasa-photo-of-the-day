import React from "react";
import ImageTree from "./components/ImageTree";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NASA Image of the Day</h1>
      <p>
        <ImageTree />
      </p>
    </div>
  );
}

export default App;
