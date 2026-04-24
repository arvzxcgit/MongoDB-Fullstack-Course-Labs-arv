import React from 'react';
import UserCard from './UserCard';

const MainContainer = () => {
  const users = [
    { id: 1, name: 'Arvin', role: 'Full Stack Developer' },
    { id: 2, name: 'Zaby AI', role: 'Reviewer' }
  ];

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Team List</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {users.map(u => (
          <UserCard key={u.id} name={u.name} role={u.role} />
        ))}
      </div>
    </main>
  );
};

export default MainContainer;