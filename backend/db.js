// db.js
const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = { connect };