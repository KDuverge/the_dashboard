import React from 'react';

import SidebarLink from './SidebarLinks';

import './Sidebar.css';

const Sidebar = () => {
  const links = ['projects', 'upload', 'logout'];

  return (
    <aside className='sidebar-container'>
      <ul className='sidebar-grid'>
        {links.map(link => (
          <SidebarLink key={link} name={link} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
