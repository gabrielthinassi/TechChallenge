import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Tech Challenge 1</h1>
            <p>O Tech Challenge da Fase 1 sera o desenvolvimento de uma aplicacao web com acesso ao banco de dados e ao storage. Voce devera criar um projeto contendo:</p>
              
        <ul>
            <li>Uma Aplicacao Web</li>
            <li>Uma Web API</li>
            <li>E um banco de dados SQL Azure</li>
        </ul>
        <p>Na aplicacao, deverao ser incluidas imagens armazenadas no Azure Blob Storage.</p>
            <p>Alem disso, todos os recursos deverao ser hospedados no Azure em um mesmo Resource Group e o acesso ao banco de dados devera ser realizado pela API.</p>
        <ul>
            <li>A aplicacao web servira como Front End.</li>
            <li>Como tarefa de pesquisa, voce devera incluir um recurso para realizar o upload de imagens, que posteriormente serao exibidas na aplicacao.</li>
        </ul>
            <a href="https://github.com/gabrielthinassi/TechChallenge" target="_blank">GitHub com o codigo</a>
      </div>
    );
  }
}
