const frase = prompt("Ingresa la frase:");
let count = 0;

for (let i = 0; i < frase.length; i++) {
    const char = frase[i].toLowerCase();
    if (char === 'a') {
        count++;
    }
}

document.write("La letra 'a' aparece " + count + " veces.");