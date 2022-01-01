import logo from "./logo.svg";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";
import Home from "./Home";
import Estoque from "./Estoque";

// const App = () => {
//   const produtos = [
//     <li key="e1">
//       <a href=""> Notebook </a>
//     </li>,
//     <li key="e2">
//       <a href=""> Tablet </a>
//     </li>,
//   ];

//   return (
//     <div>
//       Gloria Deus! Aleleuia
//       {produtos}
//     </div>
//   );
// };
// const App = () => {
//   const filmes = ["superman", "batman", "hulk", "wolverine"];

//   return (
//     <ul>
//       {filmes.map((filme) => (
//         <li key={filme}>{filme}</li>
//       ))}
//     </ul>
//   );
// };
// const App = () => {
//   const livros = [
//     { nome: "Game of Trones", ano: 1996 },
//     { nome: "Clash of Kings", ano: 1998 },
//     { nome: "Storm od Swords", ano: 2000 },
//   ];

//   return (
//     <ul>
//       {livros
//         .filter((livro) => livro.ano >= 2000)
//         .map((livro) => (
//           <li key={livro.nome}>
//             {livro.nome},{livro.ano}
//           </li>
//         ))}
//     </ul>
//   );
// };

//MESMA FUNÇÃO ACIMA COM DESTRUCTING
//AULA -208 JSX ARRAYS
// const App = () => {
//   const livros = [
//     { nome: "Game of Trones", ano: 1996 },
//     { nome: "Clash of Kings", ano: 1998 },
//     { nome: "Storm od Swords", ano: 2000 },
//   ];

//   return (
//     <ul>
//       {livros
//         .filter(({ ano }) => ano >= 1998)
//         .map(({ nome, ano }) => (
//           <li key={nome}>
//             <a href="">
//               {nome}, {ano}
//             </a>
//           </li>
//         ))}
//     </ul>
//   );
// };

// const produtos = [
//   {
//     id: 1,
//     nome: "smartphone",
//     preco: "R$ 2500",
//     cores: ["#29d8d5", "#252a34", "#fc3766"],
//   },
//   {
//     id: 2,
//     nome: "Notebook",
//     preco: "R$ 4700",
//     cores: ["#ffd045", "#d4364b", "#f37c59"],
//   },
//   {
//     id: 3,
//     nome: "Tablet",
//     preco: "R$ 1700",
//     cores: ["#365029", "#47C1C8", "#f95786"],
//   },
// ];

// const App = () => {
//   const dados = produtos.filter(
//     ({ preco }) => Number(preco.replace("R$", "")) > 1700
//   );

//   return (
//     <section>
//       {dados.map(({ id, nome, preco, cores }) => (
//         <div key={id}>
//           <h2>{nome}</h2>
//           <p>Preço: {preco}</p>
//           <ul>
//             {cores.map((cor) => (
//               <li style={{ backgroundColor: cor, color: "white" }} key={cor}>
//                 {cor}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </section>
//   );
// };

//AULA -209 - EVENTOS EM REACT
// const App = () => {
//   function clique(event) {
//     console.log(event);
//   }
//   function sCroll(event) {
//     console.log(event);
//   }
//   window.addEventListener("scroll", sCroll);

//   return (
//     <div style={{ position: "relative", display: "grid" }}>
//       <button
//         style={{ marginLeft: "20px", height: "50px", width: "170px" }}
//         onClick={clique}
//       >
//         {" "}
//         Clique{" "}
//       </button>
//       <button
//         style={{ marginLeft: "20px", height: "50px", width: "170px" }}
//         onClick={(event) => alert(event.target.innerText)}
//       >
//         ---Evento de Scroll---
//       </button>
//     </div>
//   );
// };

//AULA - 210 - COMPONENTES
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <p>Gloŕia DEUS</p>
//       <Form />
//       <Form />
//       <Footer />
//     </div>
//   );
// };

//AULA 211 - PROPRIEDADES

// const Titulo = (props) => {
//   return (
// <h1 style={{ color: props.cor, backgroundColor: props.backgroundColor }}>
//   {props.texto}
// </h1>
// const Titulo = ({ cores, back, fnt, text, children }) => {
//   return (
//     <h1 style={{ color: cores, fontSize: fnt, backgroundColor: back }}>
//       {text}, {children}
//     </h1>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Form />
//       <Titulo back="blue" text="Titulo 1" cores="pink" back="blue">
//         Parte do children
//       </Titulo>
//       <Titulo text="Titulo 2" cores="red" back="pink" />
//       <Titulo text="Titulo 3" cores="pink" back="red" />
//       <Titulo fnt="2.8rem" text="Titulo 4" cores="#077aaa" back="pink" />
//     </div>
//   );
// };
// EXERCICIO AULA - 2012 - COMPONENTES
// const App = () => {
//   // Lógica para mudar de página
//   const { pathname } = window.location;

//   let Pagina;
//   if (pathname === "/Estoque") {
//     Pagina = Estoque;
//   } else {
//     Pagina = Home;
//   }
//   return (
//     <section>
//       <Header />
//       <Pagina />
//     </section>
//   );
// };

// export default App;

// AULA 301 USESTATE
import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
// const App = () => {
//   const ativo = true;

//   return <button disabled={!ativo}> {ativo ? "Ativo" : " Inativo"} </button>;
// };
// const App = () => {
//   let ativo = true;

//   function handleClick() {
//     ativo = !ativo;
//     console.log(ativo);
//   }
//   return <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>;
// };

// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);
//   const [dados, setDados] = React.useState({ nome: "William", idade: "42" });

//   function handleClick() {
//     setAtivo(!ativo);
//     setDados({ ...dados, faculdade: "Faenac Editora Nacional" });
//     console.log(ativo);
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>{ativo ? "Ativado" : "Desativado"}</button>
//       <p>{dados.nome}</p>
//       <p>{dados.idade}</p>
//       <p>{dados.faculdade}</p>
//     </div>
//   );
// };
const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      <ButtonModal setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default App;
