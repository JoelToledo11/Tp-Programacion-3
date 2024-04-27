for (var i = 1; i <= 500; i++) {
    // Verificar si es múltiplo de 4 y/o 9
    var mensaje = '';
    if (i % 4 === 0) {
        mensaje += ' (Múltiplo de 4)';
    }
    if (i % 9 === 0) {
        mensaje += ' (Múltiplo de 9)';
    }

    // Imprimir el número y el mensaje
    console.log(i + mensaje);

    // Verificar si es necesario imprimir la línea horizontal
    if (i % 5 === 0 && i !== 500) {
        console.log('————————————————————');
    }
}