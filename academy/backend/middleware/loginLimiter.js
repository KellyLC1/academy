const rateLimit = require('express-rate-limit');

// limite -> 5 tentatives de co -> 15 minutes par IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: 'Trop de tentatives de connexion, réessayez plus tard.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = loginLimiter;
