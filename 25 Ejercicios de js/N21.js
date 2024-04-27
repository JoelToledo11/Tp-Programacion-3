let suma = 0;
let numero;

while (true) {
  
  numero = prompt("Introduce un número:");

  if (numero === null) {
    break;// Salir del bucle si el usuario pulsa cancelar
  }

  numero = parseInt(numero);

  // Comprobar si el valor ingresado es un número
  if (isNaN(numero)) {
    alert("Por favor, introduce un número válido.");
    continue; // Volver al inicio del bucle
  }

  suma += numero;
}

alert("La suma total de los números introducidos es: " + suma);