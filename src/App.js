import { Link } from "react-router-dom";
import React from "react";
import "./App.css";


function App() {
  return (
    <div>
      <h1>Mon site internet</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/list/flats">Liste des appartements</Link>
      </nav>
      
    </div>
  );
}

export default App