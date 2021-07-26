const express = require('express');
const app = express();
const carModel = require('../models/car');

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/cars', async (req, res) => {
    const query = req.q;
    try {
        const cars = await carModel.find();
        res.send(cars);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/cars/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const car = await carModel.findById(id);
        res.send(car);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/cars', async (req, res) => {
    const { body } = req;
    const car = await new carModel(body);
    try {
        await car.save();
        res.send(car);
    } catch(error) {
        res.status(500).send(error);
    }
});

app.put('/cars/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const car = await carModel.findByIdAndUpdate(id, body);
        await car.save();
        res.send(car);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/cars/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const car = await carModel.findByIdAndDelete(id);
        if (!car) res.status(404).send('Item não encontrado');
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = app;