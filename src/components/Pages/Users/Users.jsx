import React from 'react';

import { Badge } from '../../UI';

const Users = () => {
  return (
    <>
      <Badge text='Users' count='10' />
      <div
        style={{
          gridRow: '3 / span 2',
          gridColumn: '4 / span 2',
          alignSelf: 'center',
          fontSize: '3rem',
        }}
        className='coming-soon'
      >
        Coming Soon...
      </div>
    </>
  );
};

export default Users;
