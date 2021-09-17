import React from 'react';
import PostUser from '../components/PostUser';
import Users from '../components/Users';

const AdminPage = () => {
  return (
    <div>
      <h1>VARTOTOJŲ TVARKYKLĖ</h1>
      <Users />
      <PostUser />
    </div>
  );
};

export default AdminPage;
