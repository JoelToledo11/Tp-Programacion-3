const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const num3 = parseFloat(prompt("Ingresa el tercer número:"));

let mayor = num1;

if (num2 > mayor) {
    mayor = num2;
}

if (num3 > mayor) {
    mayor = num3;
}

document.write("El número mayor de los tres es: " + mayor);