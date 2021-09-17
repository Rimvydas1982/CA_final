//Required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import user
const User = require('./model/userModel');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

//Middlewares
app.use(cors());
app.use(express.json());

//--Connecting to MONGO DB
mongoose
  .connect(process.env.MONGO_DB)
  .then((res) => {
    console.log('Connected to MongoDB ');
    //Starting server
    app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
  })
  .catch((err) => console.log(err));

//--Routes

app.get('/', (req, res) => res.send('Super API is running...'));

//POST new user
app.post('/api/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.json({ newUser, message: 'Naujas vartotojas pridetas' });
  } catch (err) {
    res.json({ message: 'Nepavyko prideti vartotojo' });
  }
});

//GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ mesage: 'Negalima gauti vartotoju' });
  }
});

//UPDATE user
app.put('/api/users/:userId', async (req, res) => {
  try {
    const updatedUsers = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: { name: req.body.name, age: req.body.age, email: req.body.email },
      }
    );
    res.json(updatedUsers);
  } catch (error) {
    res.json({ message: 'Negalima atnaujinti' });
  }
});

//DELETE user
app.delete('/api/users/:userId', async (req, res) => {
  try {
    const findedUserToDelete = await User.findByIdAndDelete(req.params.userId);
    res.json(findedUserToDelete);
  } catch (error) {
    res.json({ message: 'Nepavyko rasti vartotojo' });
  }
});
