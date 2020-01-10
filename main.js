const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const map = usuarios.map(({ idade }) => idade);

console.log(map);

const filter = usuarios.filter(({ empresa, idade }) => empresa == 'Rocketseat' && idade > 18);

console.log(filter);

const find = usuarios.find(({ empresa }) => empresa == 'Google');

console.log(find);

//unindo operações

const newarr = usuarios.map(function (item) {
    item.idade = item.idade * 2;
    return item;
});

console.log(newarr);

const newfilter = newarr.filter(({ idade }) => idade < 51);

console.log(newfilter);
