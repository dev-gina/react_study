import React, { useState, useEffect } from 'react';

const SideEffectMount = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    };
    getUsers();
  }, []); 

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideEffectMount;















