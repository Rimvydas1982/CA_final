import React from 'react';

const User = ({ item, action }) => {
  return (
    <div key={item._id}>
      <h3>Vardas:{item.name}</h3>
      <h4>El.pastas:{item.email}</h4>
      <h5>Amzius:{item.age} metai</h5>
      <button onClick={() => action(item._id)}>Istrinti vartotoja</button>
    </div>
  );
};

export default User;
