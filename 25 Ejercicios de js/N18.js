let edad = prompt("Ingrese su edad:");

if (!isNaN(edad) && parseInt(edad) >= 18) {
    document.write("Tenes " + edad + " años y ya podes conducir");
} else {
    document.write("Perdon, No tenes la edad suficiente para conducir.");
}