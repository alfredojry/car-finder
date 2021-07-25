const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    cadastradoPor: {
        type: String,
        required: true
    },
    contato: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    combustivel: {
        type: String,
        required: true
    },
    transmissao: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    urlFotoPrincipal: {
        type: String,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now()
    },
    dataAtualizacao: {
        type: Date,
        default: Date.now()
    },
});

const carModel = mongoose.model('cars', CarSchema);

module.exports = carModel;