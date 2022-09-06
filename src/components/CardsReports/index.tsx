import { ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { ImClubs } from 'react-icons/im';
import { usePoker } from '../../hooks/usePoker';
import { database } from '../../repository/firebase';
import { MatchDataInterface } from '../../types/user';
import { MatchActions } from '../MatchActions';

import { Container, Card } from './styles';

export const CardsReports: React.FC = () => {
  const { users, loggedUser, room } = usePoker();

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
  const [matchData, setMatchData] = useState<MatchDataInterface>({} as MatchDataInterface);

  const selectCardOnDatabase = async (cardSelected: string) => {
    const selectedCard = cards.find(item => item.card === cardSelected);

    if (selectedCard && loggedUser) {
      sessionStorage.setItem('user-planning-poker', JSON.stringify({...loggedUser, card: cardSelected}))

      setCards(prev => prev.map(item => {
        if (item.card === cardSelected) {
          return {
            ...item,
            selected: true
          }
        }

        return { ...item, selected: false }
      }));

      await update(ref(database, `rooms/${room.id}/users/${loggedUser.id}`), { card: cardSelected });
    }
  }

  useEffect(() => {
    const loadPokerData = () => {
      const data: any[] = [];
      let count: number = 0;

      if (!users) return;

      users.forEach((user: any) => {
        if (user.card) {
          if (user.card === '') data.push({ card: 'no-vote', user: user.username, valueCard: 0 });
          if (user.card === '?') data.push({ card: '?', user: user.username, valueCard: 0 });
          if (user.card !== '' && user.card !== '?') {
            if (user.card === '½') {
              data.push({ card: '½', user: user.username, valueCard: 0.5 });
              count = count += 0.5;
            } else {
              data.push({ card: user.card, user: user.username, valueCard: Number(user.card) });
              count = count += Number(user.card);
            }
          }
        }
      });

      const chosenData: any[] = [];
      data.forEach(user => {
        chosenData[user.card] = {
          card: user.card,
          amount: !chosenData[user.card] ? 1 : chosenData[user.card].amount += 1
        };
      })

      const average = count/data.filter(user => user.card !== '?' && user.card !== '').length;

      setMatchData({
        media: Number(average.toFixed(2)) || 0,
        chosenCards: Object.values(chosenData) as unknown as any
      })
    }

    loadPokerData();
  }, [users]);

  const renderQuantityChosenCards = (card: string) => {
    const cardChosed = matchData.chosenCards.find(item => item.card === card);

    if (cardChosed) {
      return (
        <div className="amount-card-chosed">
          {cardChosed.amount}
        </div>
      );
    }

    return null;
  }

  return (
    <Container>
      <div className="status-box">
        Escolha a sua carta
      </div>

      {(matchData.media >= 0 && room.showCards) && (
        <h3>Média: {matchData.media}</h3>
      )}

      <div className="cards-wrapper">
        <div className="cards-list" id="cards-poker-list">
          {cards.map(item => (
            <Card
              id={`card-${item.card}`}
              type="button"
              className={item.selected && !room.showCards ? 'card-selected' : ''}
              disabled={!room.gameStarted || room.showCards || loggedUser?.isSpectator}
              onClick={() => selectCardOnDatabase(item.card)}
            >
              {(room.gameStarted && !loggedUser?.isSpectator || room.showCards) 
                ? (
                  <>
                    {renderQuantityChosenCards(item.card)}

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
      </div>
      <MatchActions />
    </Container>
  );
}
