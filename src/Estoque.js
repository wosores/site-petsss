import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

function Estoque() {
  const produtos = [
    { nome: "Notebook", propriedade: ["16gb ram", "512gb ssd"] },
    { nome: "Tablet", propriedade: ["4gb ram", "120gb flash"] },
    { nome: "Smartphone", propriedade: ["8gb ram", "256gb flash"] },
    { nome: "Computador Gamer", propriedade: ["64gb ram", "3T ssd"] },
  ];
  return (
    <section>
      <Titulo texto="Produtos mais vendidos nesse mês" />
      {produtos.map((item) => (
        <Produto key={item.nome} {...item} />
      ))}
    </section>
  );
}

export default Estoque;
