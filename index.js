const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    serverSelectionTimeoutMS: 120000
})
.then(() => {console.log('Mongoose está conectado!!!')})
.catch((error) => {console.log(error)});

app.use(cors());
app.use(express.json());
app.set('view engine', 'pug');
const carsRouter = require('./routes/carsRoutes');
app.use(carsRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});