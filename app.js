//Chame o módulo HTTP
const express = require('express');
const router = require ('./src/routes');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const port = 3001;
const session = require('express-session');
require('dotenv').config();

app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());


app.use(
  cors({
    origin: "http://localhost:3001", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);


mongoose.connect(process.env.DBCONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});



app.listen(port, ()=>{
   console.log(`server running on ${port}`);
})
app.use(express.json());

app.use("/", router);
