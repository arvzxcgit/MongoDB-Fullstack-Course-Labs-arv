import React from 'react';

const UserCard = ({ name, role }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '200px' }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default UserCard;