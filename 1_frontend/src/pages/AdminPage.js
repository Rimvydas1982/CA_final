import React from 'react';
import style from './AdminPage.module.css';
import PostUser from '../components/PostUser';
import Users from '../components/Users';

const AdminPage = () => {
  return (
    <section className={style.section}>
      <Users />
      <PostUser />
    </section>
  );
};

export default AdminPage;
