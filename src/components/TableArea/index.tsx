import React from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import { usePoker } from '../../hooks/usePoker';
import { UserData } from '../../types/user';

import { Container } from './styles';

export const TableArea: React.FC = () => {
  const { users, room } = usePoker();

  const orderCards = (a: UserData, b: UserData) => {
    if (b.usertype === 'HOST') return 1;

    if (a.username > b.username) return 1;
    if (a.username < b.username) return -1;

    return 0;
  }

  return (
    <Container>
      <div className='cards-content'>
        {users.sort(orderCards).map(user => (
          <div className="user-card">
            <div className={`${room.showCards ? 'up-card' : ''} card ${user.card ? 'selected' : ''}`}>
              {user.isSpectator ? <FaEye size={22} color="#6b6b6b" /> : (
                <>
                  {(room.showCards && user.card) && <p>{user.card}</p>}
                  {(room.showCards && !user.card) && <FaTimes />}
                </>
              )}
            </div>
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
