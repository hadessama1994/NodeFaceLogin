const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;  
require('dotenv').config();
const UserSchema = require('../models/UserSchema');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  UserSchema.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3001/auth/facebook/callback",    
         
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile._json)

    const currentUser = await UserSchema.findOne({
      faceid: profile._json.id,      
    });

    if(!currentUser){      
      const {id, name} = profile._json	    
      user = await UserSchema.create({
      faceid: id,
      name: name
      })
      if (user){        
        done(null, user);
      }
    }       
    
    done(null, currentUser)
    
  }
));