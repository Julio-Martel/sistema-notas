// pequeño algoritmo para agregar una nota que funciona mediante modulos
const agregarNota = 'Julio';
const listaDeNotas = [];
const agregarMiNota = require('./notas/agregarNota.js');

let notaAgregada = agregarMiNota.agregarNota(agregarNota);

listaDeNotas.push(notaAgregada);

console.log(listaDeNotas);