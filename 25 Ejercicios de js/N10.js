const frase = prompt("Ingresa la frase:");
const Encontradas = new Set();

const vocales = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < frase.length; i++) {
    const char = frase[i].toLowerCase();
    if (vocales.includes(char)) {
        Encontradas.add(char);
    }
}

document.write("Las vocales que aparecen son: " + Array.from(Encontradas).join(', '));