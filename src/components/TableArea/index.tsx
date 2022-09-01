import React from 'react';
import { UserData } from '../../types/user';

import { Container } from './styles';

interface TableAreaProps {
  users: UserData[];
}

export const TableArea: React.FC<TableAreaProps> = ({ users }) => {
  return (
    <Container>
      <div className='cards-content'>
        {users.map(user => (
          <div className="user-card">
            <div className="card" />
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
