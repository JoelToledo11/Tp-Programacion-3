var numero1 = parseInt(prompt("Ingrese el primer numero:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));
var divisoresComunes = [];

for (var i = 1; i <= numero1; i++) {
    if (numero1 % i === 0) {

        if (numero2 % i === 0) {
            divisoresComunes.push(i);
        }
    }
}

document.write("Los divisores comunes de " + numero1 + " y " + numero2 + " son: " + divisoresComunes);