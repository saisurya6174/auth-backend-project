const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: `Hello, user ${req.user.id}. You are authenticated.` });
});

module.exports = router;
