import React from "react";

function Produto({ nome, propriedade }) {
  return (
    <div
      style={{
        border: "2px solid",
        color: "#4c8b64",
        margin: "2rem",
        marginLeft: "2rem ",
        marginRight: "2rem",
        padding: "2rem",
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedade.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;
