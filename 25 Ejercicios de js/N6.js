const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
    document.write("El número mayor es: " + num1);
} else if (num2 > num1) {
    document.write("El número mayor es: " + num2);
} else {
    document.write("Los números son iguales.");
}