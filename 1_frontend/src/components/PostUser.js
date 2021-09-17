import React, { useState } from 'react';
import axios from 'axios';

const PostUser = () => {
  //Hooks
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  //Custom functions
  const formHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users', {
        name: name,
        age: age,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Prideti nauja vartotoja</h1>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor='name'>Vardas</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='age'>Amzius</label>
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='model'>El.pastas</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Slaptazodis</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <input type='submit' value='Prideti' />
        </div>
      </form>
      {message && <h5>{message}</h5>}
    </div>
  );
};

export default PostUser;
