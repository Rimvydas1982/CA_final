import React, { useState } from 'react';
import axios from 'axios';
import formstyle from './PostUser.module.css';

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
        setName('');
        setAge('');
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={formstyle.formcontainer}>
      <h2>Prideti nauja vartotoja</h2>
      <form className={formstyle.form} onSubmit={formHandler}>
        <div className={formstyle.formControl}>
          <label className={formstyle.formLabel} htmlFor='name'>
            Vardas
          </label>
          <input
            className={formstyle.formInput}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={formstyle.formControl}>
          <label className={formstyle.formLabel} htmlFor='age'>
            Amzius
          </label>
          <input
            className={formstyle.formInput}
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className={formstyle.formControl}>
          <label className={formstyle.formLabel} htmlFor='model'>
            El.pastas
          </label>
          <input
            className={formstyle.formInput}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={formstyle.formControl}>
          <label className={formstyle.formLabel} htmlFor='password'>
            Slaptazodis
          </label>
          <input
            className={formstyle.formInput}
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={formstyle.formControl}>
          <input
            className={formstyle.btnSubmit}
            type='submit'
            value='Prideti'
          />
        </div>
      </form>
      {message && <h5 className={formstyle.formMessage}>{message}</h5>}
    </div>
  );
};

export default PostUser;
