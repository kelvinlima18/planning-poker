import React, { useState } from 'react';

import { updateRoom, updateUserCard } from '../../repository/firebase';

import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';

interface PokerTableProps {
  users: UserData[];
  room: RoomData;
}

export const PokerTable: React.FC<PokerTableProps> = ({ room }) => {
  const userStorage = sessionStorage.getItem('user-planning-poker');
  const loggedUser: UserData | undefined = userStorage ? JSON.parse(userStorage) : undefined;

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

  const { gameStarted } = room;

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
    <Container>
      {loggedUser !== undefined ? (
        <>
          {loggedUser.usertype === 'host' && (
            <main>
              <section>
                {!gameStarted && (
                  <button type="button" onClick={() => updateRoom(room.id, true)}>Start Game</button>
                )}
              </section>
            </main>
          )}
          {loggedUser.usertype === 'player' && (
            <main className="player-game">
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
            </main>
          )}
        </>
      ) : (
        <span>
          Tu não tem acesso
        </span>
      )}
    </Container>
  );
}