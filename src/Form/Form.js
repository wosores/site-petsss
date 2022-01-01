import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const testePassandoarray = ["banana", "maça", "uva", "tomate"];

  return (
    <div style={{ color: "red" }}>
      {" "}
      <Input id="email" label="Email " type="text" />
      <Input id="senha" label="Senha " type="password" />
      <Button items={testePassandoarray} />
    </div>
  );
};

export default Form;
