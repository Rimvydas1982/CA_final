import React from 'react';

const User = ({ item, action }) => {
  return (
    <div key={item._id}>
      <h4>{item.name}</h4>
      <p>
        <strong>El.pastas:</strong>
        {item.email}
      </p>
      <p>
        <strong>Amzius: </strong>
        {item.age} metai
      </p>
      <button onClick={() => action(item._id)}>Istrinti vartotoja</button>
    </div>
  );
};

export default User;
