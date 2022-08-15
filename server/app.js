const express = require('express');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/users-routes');

const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/users', usersRoutes);

mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
  app.listen(5000);
})
.catch(err => {
  console.log(err);
});