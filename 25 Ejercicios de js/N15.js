var numero = parseInt(prompt("Ingresa un número:"));

for (var i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}

console.log("Los divisores de " + numero + " son:");