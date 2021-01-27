//mostrar mensaje de incio de javascript
console.log("Starting javascript...");
 
// escribir mi nombre
let myName = "Gabriel";

console.log(myName);

//escribir mi edad
let edad = 35;

console.log(edad);

//la edad de ignasi
let ignasiAge = 32;

//mi edad menos la de ignasi
let ageDiff = edad - ignasiAge;

console.log(ageDiff);

//mostrar si tengo más o menos de 21 años
if(edad > 21){
    console.log("Tienes más de 21 años");
}else{
    console.log("Tienes menos de 21 años");
}

//mostrar si ignasi es mayor o menor que yo
if(edad < ignasiAge){
    console.log("Ignasi es mayor que usted");
}else if(edad == ignasiAge){
    console.log("Ignasi y usted tienen la misma edad");
}else{
    console.log("Ignasi es menor que usted");
}

//nombres de la clase incluyendo mentores
let nombresClase = [
    "Gabriel Balbontín",
    "Carolina Sanhueza",
    "Manuel Yáñez",
    "Melissa Urzua",
    "Rebeca Salgado",
    "Yndira Marcano",
    "Fanny González",
    "Ronald Astorga",
    "Leonardo González",
    "Jenny Barrientos",
    "Guillermo Gualaman",
    "José Sepúlveda",
    "Juan Morales",
    "Karla Díaz",
    "Violeta Fabres",
    "Karin Escobar",
    "Oscar Díaz",
    "Marjorie Lagos",
    "Nicolás Lara",
    "Guillermo Mancilla",
    "Francisca Orellana",
    "Joaquín Ossandón",
    "Camila Pérez",
    "Fernando Martinez",
    "Francisco Puas",
    "María Zuluaga",
    "Sebastián San Martín",
    "Ricardo Seguel"
];

//ordenar nombres alfabéticamente
nombresClase.sort();

//imprimir primer y último nombre
console.log("Primero " + nombresClase[0]);
console.log("Ultimo " + nombresClase[nombresClase.length -1]);

//imprimir todos los nombres ordenados alfabéticamente
function imprimirLista(nombresClase){
    for(let i = 0; i < nombresClase.length; i++){
        console.log(nombresClase[i]);
    }
}

imprimirLista(nombresClase);

//edades de la clase
let edadesClase = [25, 36, 35, 35, 30, 31, 37, 34, 25, 39, 26, 28, 33, 23, 27, 29, 38, 36]

contador = 0;
contadorPares = 0;

//mostrar edades
while (contador < edadesClase.length){
    console.log(edadesClase[contador]);
    contador++;
}

//mostrar edades pares
do{
    let sub = edadesClase[contadorPares];
    if(sub%2 == 0){
        console.log("Nº" + edadesClase[contadorPares]);
    }
    contadorPares++;
} while(contadorPares < edadesClase.length);

//mostrar numero menor
var numerosChicos = [ 67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, 99, 100 ];

var min = numerosChicos[0];

function numeroMenor(numerosChicos){
    for (var i = 0; i < numerosChicos.length ; i++) {
        if (numerosChicos[i] < min) {
            min = numerosChicos[i];
        }
    }
    console.log(min);
}

//mostrar número mayor
var numerosGrandes = [ 67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, 99, 100 ];

var max = numerosGrandes[0];

function numeroMayor(numerosGrandes){
    for (var i = 0; i < numerosGrandes.length ; i++) {
        if (numerosGrandes[i] > max) {
            max = numerosGrandes[i];
        }
    }
    console.log(max);
}

//mostrar un número segun indice

var numerosIndice = [ 67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, 99, 100 ];
var indice;

function mostrarIndice(numerosIndice, indice){
    console.log(numerosIndice[indice]);
}


//mostrar números repetidos

var numerosRepetidos = [ 67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, 99, 100 ];
var auxiliarRepetidos = [];
var repetidos = [];

function mostrarDobles(numerosRepetidos) {
    for(let i = 0; i < numerosRepetidos.length; i++) {
        auxiliarRepetidos[i] = numerosRepetidos[i];
    }

    for(let i = 0; i < auxiliarRepetidos.length; i++) {
        for (let j = i + 1; j < auxiliarRepetidos.length +1; j++) {
            if(auxiliarRepetidos[i] < auxiliarRepetidos[j]){
                let tempVar = auxiliarRepetidos[i];
                auxiliarRepetidos[i] = auxiliarRepetidos[j];
                auxiliarRepetidos[j] = tempVar;
            }
        }
    }

    for (var i = 0; i < auxiliarRepetidos.length; i++) {
        for (let j = i + 1; j < auxiliarRepetidos.length +1; j++) {
            if (auxiliarRepetidos[i] == auxiliarRepetidos[j]) {
                let tempVar = auxiliarRepetidos[i];
                auxiliarRepetidos[i] = auxiliarRepetidos[j];
                auxiliarRepetidos[j] = tempVar;
                repetidos[i]=auxiliarRepetidos[j];
            }
        }
        
    }

    let resultado = "";
    
    for(let i = 0; i < repetidos.length; i++){
        if(repetidos[i]>=0){
            resultado += (repetidos[i] + ", ");
        }  
    }

    return resultado;
}

//unir valores de un array

let myColor = ["Red", "Green", "White", "Black"];

function unirValores(myColor){
    let valoresUnidos = myColor.toString();
    return valoresUnidos;
}

//mostrar numero invertido
function revertirNumero(numero){
    numero = numero.toString();
    let reverso = "";
    for (let i = numero.length -1; i >= 0; i--){
        reverso += numero[i];
    }
    return parseInt(reverso);
}


//ordenar string alfabéticamente
function ordenarString(ingresaPalabra) {
    let palabraArray = [];

    for(let i = 0; i < ingresaPalabra.length; i++) {
        palabraArray[i] = ingresaPalabra[i];
    }

    for(let i = 0; i < palabraArray.length; i++) {
        for(let j = i + 1; j < palabraArray.length; j++) {
            if(palabraArray[i] > palabraArray[j]){
                let tempVar = palabraArray[i];
                palabraArray[i] = palabraArray[j];
                palabraArray[j] = tempVar;
            }
        }
    }

    let resultado = "";
    
    for(let i = 0; i < palabraArray.length; i++){
        resultado += palabraArray[i];
    }

    return resultado;
}


// invertir string

function invertirString(cadena) {
    let x = cadena.length;
    let cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
}

// mayusculas al inicio de cada palabra
function titleCase(texto) {
    const re = /(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(?:([a-záéíóúüñ])|([A-ZÁÉÍÓÚÜÑ]))|([A-ZÁÉÍÓÚÜÑ]+)/gu;
    return texto.replace(re,
        (m, caracterPrevio, minuscInicial, mayuscInicial, mayuscIntermedias) => {
            const locale = ['es', 'gl', 'ca', 'pt', 'en'];
            return caracterPrevio
                 + (minuscInicial ? minuscInicial.toLocaleUpperCase(locale) : mayuscInicial);
        }
    );
}


//encontrar la palabra más larga de una frase

function palabraLarga(frase) {
  
    var length = 0
    var masLarga = "";
    var compara = frase.split(" ");
    
    for(var i = 0 ; i < compara.length; i++)
      {
        if(compara[i].length > length)
          {
          length = compara[i].length;
            masLarga = compara[i];
            }
        
      }
  
    return masLarga;
  }
  



