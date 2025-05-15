import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/userAPI';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
