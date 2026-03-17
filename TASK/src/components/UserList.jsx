import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h3>User List</h3>

      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email} - {user.address.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;