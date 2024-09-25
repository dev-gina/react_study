import React from 'react';

const User = ({ address, city }) => {
  return (
    <li>
      {address} {city}
    </li>
  );
};

export default User;

