const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers/helpers');
const app = express();

const port = process.env.PORT || 8989;

app.use(express.static(__dirname + '/public'));

// hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// helper

app.get('/', (req, res) => {

    res.render('home', {
        anio: new Date().getFullYear()
    });

});

// about
app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log(`Listen on ${port}`);
});