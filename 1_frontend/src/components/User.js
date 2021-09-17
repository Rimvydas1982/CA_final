import React from 'react';

const User = ({ item, action }) => {
  return (
    <div key={item._id}>
      <h4>{item.name}</h4>
      <p>El.pastas:{item.email}</p>
      <p>Amzius:{item.age} metai</p>
      <button onClick={() => action(item._id)}>Istrinti vartotoja</button>
    </div>
  );
};

export default User;
