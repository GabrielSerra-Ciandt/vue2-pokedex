'use strict';
const express = require('express');
const router = require('./src/main/gateways/http/router')(express.Router());

const PORT = process.env.PORT || 3000;
const path = __dirname + '/pokeapi';
const app = express();

app.use(express.static(path));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`application running on port ${PORT}`);
});
