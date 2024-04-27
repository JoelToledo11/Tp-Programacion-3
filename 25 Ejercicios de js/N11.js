const frase = prompt("Ingresa la frase:");
let contVocales = 0;

for (let i = 0; i < frase.length; i++) {
    const char = frase[i].toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        contVocales++;
    }
}

document.write("La frase tiene " + contVocales + " vocales.");