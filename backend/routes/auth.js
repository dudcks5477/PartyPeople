const express = require('express');
const router = express.Router();
const passport = require('passport');
const {OAuth2Client} = require('google-auth-library');
const User = require('../models/user');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/auth/google/token', async (req, res) => {
  const {idToken} = req.body; // 클라이언트로부터 받은 ID 토큰

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const {sub: googleId, name, email, picture: photo} = ticket.getPayload();

    // 사용자 정보를 데이터베이스에 저장
    const user = await User.findOneAndUpdate(
      {googleId},
      {name, email, photo},
      {upset: true, new: true, runValidators: true}
    );

    res.json(user); // 사용자 정보를 응답으로 보냄
  } catch (error) {
    res.status(401).json({message: 'ID 토큰 검증 실패'});
  }
});

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile']})
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

module.exports = router;