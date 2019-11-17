import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

import './Content.css';

const Content = ({ children }) => {
  return (
    <>
      <Sidebar />
      <section className='main-container'>{children}</section>
    </>
  );
};

export default Content;
