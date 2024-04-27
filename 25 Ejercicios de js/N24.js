var numero = parseInt(prompt("Ingrese un número para la pirámide:"));

// Iterar desde el número indicado por el usuario hasta 1
for (var i = numero; i >= 1; i--) {
    // Construir la fila de la pirámide con el número repetido i veces
    var fila = "";
    for (var j = 1; j <= i; j++) {
        fila += i;
    }
   
    console.log(fila);
}