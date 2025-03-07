const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String }, // Email não é mais obrigatório
  cpf: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  returnDate: { type: Date },// opcional
  password: { type: String, required: true },
  observation: { type: String, required: true },
  signature: { type: String }, // Armazena a assinatura atual em Base64
  purchaseHistory: [
    {
      observation: { type: String},
      purchaseDate: { type: Date },
      returnDate: { type: Date },
      signature: { type: String },
    },
  ], // Histórico de compras e devoluções
});


module.exports = mongoose.model('Customer', customerSchema);