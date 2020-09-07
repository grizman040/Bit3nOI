const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const { MONGODB_URI } = require("./keys");
const mongoose = require('mongoose');
const db = mongoose.connection;

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))


app.get("/", (req, res) => {
  res.send('Hello World')
});



mongoose.connect(MONGODB_URI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>console.log("Connected to Data Base"))
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log("The server is running successful on port", PORT);
});