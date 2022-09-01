import React, { useState } from 'react';
import { ImClubs } from 'react-icons/im';
import { RoomData, UserData } from '../../types/user';

import { Container, Card } from './styles';

interface CardsReportsProps {
  users: UserData[];
  room: RoomData;
  loggedUser: UserData | undefined;
}

export const CardsReports: React.FC<CardsReportsProps> = ({ 
  users,
  room,
  loggedUser,
 }) => {
  const [cards, setCards] = useState([
    { card: '?', selected: false },
    { card: '0', selected: false },
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
  ]);

  return (
    <Container>
      <div className="cards-wrapper">
        <div className="status-box">
          Escolha a sua carta
        </div>

        {!room.showCards ? (
          <div className="cards-list">
            {cards.map(item => (
              <Card
                type="button"
                disabled={!room.gameStarted || loggedUser?.isSpectator}
                className={item.selected ? 'card-selected' : ''}
              >
                {(room.gameStarted && !loggedUser?.isSpectator) 
                  ? (
                    <>
                      <div className="up-corner">{item.card}</div>
                      <div className="middle">{item.card}</div>
                      <div className="down-corner">{item.card}</div>
                    </>
                  )
                  : <ImClubs size={16} color="#222831" />
                }
              </Card>
            ))}
          </div>
        ) : null}
      </div>
    </Container>
  );
}
