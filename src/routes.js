const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require ('./controller/UserController')
const UserSchema = require('./models/UserSchema')

router.get('/', (req,res) => {
   res.send('BEM VINDO')
   });

router.get('/profile', (req, res) => {
  res.send(req.user)
})

router.get('/auth/facebook', passport.authenticate("facebook"));

router.get(
   "/auth/facebook/callback",
   passport.authenticate("facebook", {
     successRedirect: "/profile",
     failureRedirect: "/fail"
   })
 );
router.post('/user/signin/facebook',passport.authenticate('facebookToken', {session:false}))

module.exports = router;