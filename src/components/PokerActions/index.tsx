import React, { useState } from 'react';
import { resetGame, updateGameStatus, updateShowCards, updateUserCard } from '../../repository/firebase';

import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';

interface PokerActionsProps {
  users: UserData[];
  loggedUser: UserData | undefined;
  room: RoomData;  
}

const PokerActions: React.FC<PokerActionsProps> = ({ room, users, loggedUser }) => {
  const { id: roomId, gameStarted, showCards } = room;
  
  const [cards, setCards] = useState([
    { card: '?', selected: false },
    { card: '½', selected: false },
    { card: '1', selected: false },
    { card: '2', selected: false },
    { card: '3', selected: false },
    { card: '5', selected: false },
    { card: '8', selected: false },
    { card: '13', selected: false },
    { card: '20', selected: false },
    { card: '40', selected: false },
    { card: '100', selected: false },
  ])

  const selectCard = (card: string) => {
    setCards(prev => prev.map(c => {
        if (c.card === card) {
          c.selected = true;
        } else {
          c.selected = false;
        };

        return c;
      })
    );

    const selectedCard = cards.find(card => card.selected);

    updateUserCard(room.id, loggedUser!.id, selectedCard?.card!);
  }

  return (
    <Container className="poker-actions">
      <main>
        {loggedUser?.usertype === 'host' && (
          <section className="host-actions">
            {!gameStarted && (
              <button 
                type="button"
                className="start-voting"
                onClick={() => updateGameStatus(roomId, true)}
              >
                Iniciar Votação
              </button>
            )}
            {(users.some(item => item.card !== '') && !showCards && gameStarted) && (
              <button 
                type="button"
                className="show-cards" 
                onClick={() => updateShowCards(roomId, true)}
              >
                Revelar votos
              </button>
            )}
            {(showCards) && (
              <button 
                type="button"
                className="new-vote" 
                onClick={() => {
                  resetGame(roomId);
                  updateShowCards(roomId, false);
              }}>
                Nova Votação
              </button>
            )}
          </section>
        )}

        {loggedUser?.usertype === 'player' && (
          <section className="cards-game">
            {gameStarted && cards.map(item => (
              <button 
                key={item.card} 
                type="button" 
                className={`card ${item.selected ? 'card-selected' : ''}`} 
                onClick={() => selectCard(item.card)}
              >
                {item.card}
              </button>
            ))}
          </section>
        )}
      </main>
    </Container>
  );
}

export default PokerActions;