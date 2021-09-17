import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import style from './User.module.css';

const Users = () => {
  //Hooks
  //local state
  const [users, setUsers] = useState([]);

  //--Side effects
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users')
      .then((response) => setUsers(response.data));
  }, [users]);

  //Custom Functions

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then((res) => console.log(res));
  };
  return (
    <div className={style.centered}>
      <h2>Visi vartotojai</h2>
      <section className={style.section}>
        {users.map((item) => (
          <User item={item} key={item._id} action={deleteHandler} />
        ))}
      </section>
    </div>
  );
};

export default Users;
