import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      &copy; {new Date().getFullYear()} All rights reserved
    </footer>
  );
};

export default Footer;
