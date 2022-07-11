'use strict';
const express = require('express');
const cors = require('cors')
const router = require('./src/main/gateways/http/router')(express.Router());
const PORT = process.env.PORT || 3000;
const path = __dirname + '/pokeapi';
const app = express();

app.use(cors())
app.use(express.static(path));
app.use('/pokeapi', router);

app.listen(PORT, () => {
    console.log(`application running on port ${PORT}`);
});
