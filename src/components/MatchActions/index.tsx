import React from 'react';
import toast from 'react-hot-toast';

import { update, ref } from 'firebase/database';

import { database } from '../../repository/firebase';

import { Container } from './styles';
import { usePoker } from '../../hooks/usePoker';

export const MatchActions: React.FC = () => {
  const { room, users, loggedUser } = usePoker();


  const updateShowCards = async (showCards: boolean) => {
    await update(ref(database, `rooms/${room.id}`), { showCards });
  } 

  const resetGame = async () => {
    try {
      await updateShowCards(false);

      let userUpdates: any = {};
      users.forEach(user => {
        userUpdates[`${user.id}`] = {...user, card: ''}
      });

      await update(ref(database, `rooms/${room.id}/users`), userUpdates);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  const matchAction = async () => {
    if (!room.gameStarted && !room.showCards) {
      await update(ref(database, `rooms/${room.id}`), { gameStarted: true });
    } else if (room.gameStarted && !room.showCards) {
      await updateShowCards(true);
    } else if (room.gameStarted && room.showCards) {
      await resetGame();
    }
  }

  const labelButtonAction = () => {
    if (!room.gameStarted && !room.showCards) {
      return 'Iniciar votação';
    } else if (room.gameStarted && !room.showCards) {
      return 'Revelar votos';
    } else if (room.gameStarted && room.showCards) {
      return 'Reiniciar votação';
    } else {
      return '';
    }
  }

  return (
    <Container>
      <div className="match-actions-content">
        {loggedUser?.usertype === 'HOST' && (
          <>
            <button type="button" onClick={() => matchAction()}>
              {labelButtonAction()}
            </button>
          </>
        )}
        <button 
          type="button"
          disabled
        >
          EM BREVE
        </button>
      </div>
    </Container>
  );
}
