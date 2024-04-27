
let fraseUsuario = prompt("Por favor, ingresa una frase:");
fraseUsuario = fraseUsuario.toLowerCase(); // Convertir la frase a minúsculas para evitar problemas de sensibilidad a mayúsculas

let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;


for (let i = 0; i < fraseUsuario.length; i++) {
    let caracter = fraseUsuario[i];
    switch (caracter) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
    }
}

console.log("La cantidad de 'a' son: " + contadorA);
console.log("La cantidad de 'e' son: " + contadorE);
console.log("La cantidad de 'i' son: " + contadorI);
console.log("La cantidad de 'o' son: " + contadorO);
console.log("la Cantidad de 'u' son: " + contadorU);
