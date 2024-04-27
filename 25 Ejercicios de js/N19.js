let nota = parseFloat(prompt("Ingrese su nota:"));

// Verificar la calificación según la nota ingresada
if (nota >= 0 && nota <= 3) {
    document.write("Muy deficiente");
} else if (nota > 3 && nota <= 5) {
    document.write("Insuficiente");
} else if (nota > 5 && nota <= 6) {
    document.write("Suficiente");
} else if (nota > 6 && nota <= 7) {
    document.write("Bien");
} else if (nota > 7 && nota <= 9) {
    document.write("Notable");
} else if (nota > 9 && nota <= 10) {
    document.write("Sobresaliente");
} else {
    document.write("Nota fuera de rango. ngrese una nota válida entre 0 y 10.");
}