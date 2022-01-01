//App.js
import React from 'react';
import Header from '.Header';
import Home from '/Home';
import Produtos from './Produtos';

const App = () =>{
  const {pathname} = window.location;

  let Pagina;
  if(pathname === '/produtos'){
    Pagina = Produtos
  }else{
    Pagina = Home;
  }

return(
  <section>
  <Header />
  <Pagina />
  </section>
);
};
export default appAtom;

//Home.js
import React from 'react';
import Titulo from './Titulo'

const Home = () => {
  return (
    <section>
    <Titulo texto ="Pagina Home" />
    </section>
  )
}

// Titulo.js
import React from 'react';

const Titulo = ({texto}) => {
  return <h1 style={{color:'#4c8b64'}} >{texto}</h1>
};
export default Titulo;

//Produtos.js
import React from 'react';
import Titulo from './Titulo';

const Produtos =() =>{
  const produtos = [
    {nome:'Notebok', propriedades:['2gb ram','ssd 256gb']},
    {nome:'Smartphone', propriedades:['1gb ram','flash 128gb']},
  ];

  return(
    <section>
    <Titulo texto ="Produtos" />
    {produtos.map((produto) => (
      <Produto key={produto.nome} {...produto} />
    ))}
    </section>
  );
};
export default Produtos;

//Produto.js
import React from 'react';

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border:'1px solid',margin:'1rem 0',padding:'1rem'}} >
    <p>{nome}</p>
    <ul>
    {propriedades.map(propriedade =>(<li>{propriedade}</li>))}
    </ul>
    </div>
  );
};
export default Produto;
