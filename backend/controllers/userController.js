const User = require('../models/user');

exports.getUserInfo = (req, res) => {
  const userId = req.params.id; // URL 경로에서 사용자 ID를 가져옴
  User.findById(userId)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.toString() }));
};