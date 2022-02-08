const express = require('express');
const app = express();
const port = 3030;
const main = require('./routers/main.js');
const about = require('./routers/about.js');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../', 'public')));

app.use('/', main);
/* app.use('/about', about); */

app.listen(port, () => {
    console.log('Servidor levantado en http://localhost:' + port + '/');
})