import React, { useState } from 'react';

const UpdateUser = () => {
  //Hooks
  //local
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <h2>Atnaujinti vartotojo duomenis</h2>
      <form>
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
          <input type='submit' value='Atnaujinti' />
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
