import React from 'react';
import style from './AdminPage.module.css';
import PostUser from '../components/PostUser';
import Users from '../components/Users';

const AdminPage = () => {
  return (
    <main className={style.main}>
      <h1 className={style.styledh1}>Vartotojų Tvarkyklė</h1>
      <Users />
      <PostUser />
    </main>
  );
};

export default AdminPage;
