// Script pour créer un admin dans la base
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createAdmin() {
  const username = 'KellyLC'; // à personnaliser
  const password = 'K4h1lF4rr3l'; // à personnaliser
  const hash = await bcrypt.hash(password, 10);
  await User.create({ username, password: hash });
  console.log('Admin créé !');
  mongoose.disconnect();
}

createAdmin();
