const hbs = require('hbs');

// entrega el a;o actual para no cambiarlo en el footer. 
hbs.registerHelper('getAnio', () => new Date().getFullYear());

// pone la primera letra de los textos en mayusculas. 
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabras, idx) => {
        palabras[idx] = palabras.charAt(0).toUpperCase() + palabras.slice(1).toLowerCase;
    });
    return palabras.join(' ');
});