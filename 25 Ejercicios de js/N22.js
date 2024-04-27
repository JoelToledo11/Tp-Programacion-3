while (true) {
    // Solicitar al usuario el número de DNI
    var dni = prompt("Ingrese el número de DNI (sin letra):");

    // Verificar si se cancela o no se ingresa ningún valor
    if (dni === null || dni === "") {
        alert("¡Hasta luego!");
        break;
    }

    // Convertir a número
    dni = parseInt(dni);

    // Verificar si es un número válido
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("El número de DNI ingresado no es válido.");
        continue;
    }

    // Calcular la letra del DNI
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var resto = dni % 23;
    var letra = letras.charAt(resto);

    // Mostrar la letra calculada
    alert("La letra de tu DNI es: " + letra);
}