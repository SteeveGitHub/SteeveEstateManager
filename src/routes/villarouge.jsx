import React from "react";
import villarouge from "../assets/images/villa_rouge.jpg";

export default function Villarouge({title}) {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Page de la Villa Rouge {title}</h2>
        <div>
        <img src={villarouge} alt="villa_rouge" />
        </div>
      </main>
    );
  }