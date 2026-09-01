//arrays 

const nombre = ["alberto", "carlos"];   
//const numeros = [10, 28, 30];
const boolenos = [true, false, true];
const mixto = ["hola", 100, true];
const objetos = [{}, {},{} ];
const arrayVacio = [];

console.log (nombre);
//console.log (numeros);

//indice          0   1   2   3  4
const numeros = [10, 20, 30, 40, 50];

// forma de visualizarlos

console.log(numeros[2]);
console.log(numeros[4]);
console.log(numeros[0]);
console.log(numeros[7]); //undefined

console.log(numeros.length);

let resultado = numeros [0] + numeros [2];
console.log(resultado); 

const alumnos = ["alberto", "betriz", "carlos", "diana", "eduardo"]

// for (let i=0; i <alumnos.length; i++) {
//     console.log(alumnos[i]);
// }

// const productos = ["lavandina", "jabon", "pan", "leche"]

// for (let i=0; i <productos.length; i++) {
//     console.log(productos[i]);
// }


// for...of

for (const alumno of alumnos) {
    console.log(alumno);
}

const compras = ["leche", "pan", "huevo", "queso", "manteca"]
console.log(compras)

//metodos

//push() - agregar uno o mas elementos al final de un array

compras.push("azucar");
console.log(compras);
compras.push("cafe"),
console.log(compras);


//pop() - elimina el ultimo elemento de un array y lo devuelve

compras.pop();
console.log(compras);

//shift() - elimina el primer elemento de un array y lo devuelve

compras.shift();
console.log(compras);

//unshift() - agrega uno o mas elementos al inicio de un array

compras.unshift("leche");
console.log(compras);

compras.unshift("dulce de leche");
console.log(compras);

//indexof() - devulve el primer inice en el que se encuentra un prodcuto

console.log(compras.indexOf("leche"));

//includes() - determina si un array incluye un determinado elemento

console.log(compras.includes("facturas"));

//sort() - ordena los elementos de un array alfabeticamente

compras.sort();
console.log(compras);

console.log(compras [3]);

// reverse() - invierte el origen de los elementos de un array

compras.reverse();
console.log(compras);

//join() - une todos los elementos de un array en una cadena de texto

console.log(compras.join(","));