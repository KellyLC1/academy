const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connecté');
    console.log('Base utilisée :', mongoose.connection.name);

    const username = 'KellyLC';
    const password = 'K4h1lF4rr3l';

    const hash = await bcrypt.hash(password, 10);

    const admin = await User.create({
      username,
      password: hash
    });

    console.log('Admin créé !');
    console.log('ID :', admin._id);

  } catch (error) {
    console.error('Erreur :', error);
  } finally {
    await mongoose.disconnect();
  }
}

createAdmin();