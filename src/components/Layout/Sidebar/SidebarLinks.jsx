import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ name }) => {
  return (
    <NavLink to={`/${name}`} activeClassName='active' className='sidebar-item'>
      {name}
    </NavLink>
  );
};

export default SidebarLink;
