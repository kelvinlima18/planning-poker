import React from 'react';
import { UserData } from '../../types/user';

import { Container } from './styles';

interface TableAreaProps {
  users: UserData[];
}

export const TableArea: React.FC<TableAreaProps> = ({ users }) => {
  return (
    <Container>
      <div>
        {users.map(user => (
          user.username
        ))}
      </div>
    </Container>
  );
}
