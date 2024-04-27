let cadenas = [];

// Bucle para solicitar cadenas hasta que se cancele
while (true) {
  let cadena = prompt("Introduce una cadena de texto:");
  
  if (cadena === null) {
    break; // Si se cancela la entrada, sal del bucle
  }
  
  // Agregar la cadena al array
  cadenas.push(cadena);
}

// Concatenar las cadenas separadas por guión
let resultado = cadenas.join("-");

// Mostrar el resultado
console.log("Cadenas concatenadas:", resultado);