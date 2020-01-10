"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var map = usuarios.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(map);
var filter = usuarios.filter(function (_ref2) {
  var empresa = _ref2.empresa,
      idade = _ref2.idade;
  return empresa == 'Rocketseat' && idade > 18;
});
console.log(filter);
var find = usuarios.find(function (_ref3) {
  var empresa = _ref3.empresa;
  return empresa == 'Google';
});
console.log(find); //unindo opera��es

var newarr = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
});
console.log(newarr);
var newfilter = newarr.filter(function (_ref4) {
  var idade = _ref4.idade;
  return idade < 51;
});
console.log(newfilter);
