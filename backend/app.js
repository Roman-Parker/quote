const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Quote = require('../models/Quotes');

// create our express app
const app = express();

// middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.send("my hompepage dey show sha");
})
console.log(process.env.userName, process.env.password)
//start server
app.listen(3000, ()=> {
    console.log("listening at port: 3000")
});

const uri = `mongodb+srv://${process.env.userName}:${process.env.password}@cluster0.iwjikyv.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err))

  const QuotesRoute = require('../routes/Quotes')
  app.use('/quotes', QuotesRoute)
