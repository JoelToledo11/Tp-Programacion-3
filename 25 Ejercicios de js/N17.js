let numero = parseInt(prompt("Ingresa un número:"));

if (numero <= 1) {
    
} else {
    let esPrimo = true;
    // Verificar si el número es divisible por algún número diferente de sí mismo y 1
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false; // Si es divisible, no es primo
            break;
        }
    }
    // Si esPrimo sigue siendo true, entonces el número es primo
    if (esPrimo) {
        document.write(numero + " es un número primo.");
    } else {
        document.write(numero + " no es un número primo.");
    }
}