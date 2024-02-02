// const express = require('express');
// const cors = require("cors");
// require('dotenv').config();

// const app = express();
// //CORS
// app.use(cors());

// app.use(express.static('public'));

// //Lectura y parseo del body
// app.use(express.json());


// //Rutas

// app.use('/api/v1/posts', require("./routes/PostRoutes"));



// app.listen(process.env.PORT, () => console.log(`Servidor en puerto ${(process.env.PORT)}`));

require('dotenv').config();
const Server = require('./config/server');


const server = new Server();



server.listen();