"use strict";

var usuario = {
  nome: 'Pablo',
  idade: 26,
  endereco: {
    cidade: 'Indaial',
    estado: 'SC'
  }
}; //const { nome, idade, endereco: { cidade } } = usuario;
//
//console.log(nome);
//console.log(idade);
//console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
