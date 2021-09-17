//Required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

const PORT = process.env.PORT;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => res.send('Super API is running...'));

//--Connecting to MONGO DB
mongoose
  .connect(process.env.MONGO_DB)
  .then((res) => {
    console.log('Connected to MongoDB ');
    //Starting server
    app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
  })
  .catch((err) => console.log(err));
