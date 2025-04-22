// pequeño algoritmo para agregar una nota que funciona mediante modulos
const agregarNota = 'Eren';
const agregarNota2 = 'Mikasa';
const agregarNota3 = 'Armin';
const listaDeNotas = [];
const agregarMiNota = require('./notas/agregarNota.js');
const eliminarMiNota = require('./notas/eliminarNota.js')


let notaAgregada = agregarMiNota.agregarNota(agregarNota);
let notaAgregada2 = agregarMiNota.agregarNota(agregarNota2);
let notaAgregada3 = agregarMiNota.agregarNota(agregarNota3);

listaDeNotas.push(notaAgregada);
listaDeNotas.push(notaAgregada2);
listaDeNotas.push(notaAgregada3);

console.log(listaDeNotas);
console.log(eliminarMiNota.eliminarNota(listaDeNotas));