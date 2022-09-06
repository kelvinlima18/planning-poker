import { onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTimes, FaEye } from 'react-icons/fa';
import { ImClubs } from 'react-icons/im';
import { useParams } from 'react-router';
import { database } from '../../repository/firebase';

import { MatchDataInterface, RoomData, UserData } from '../../types/user';

import { PokerRoom, PokerWrapper, PokerActions, PokerTable, PokerBar  } from './styles';

interface RoomReal extends RoomData {
  users: {
    [key: string]: UserData;
  };
}

export const Room: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `${window.location.origin}/invite/${id}`;
  
  const userStorage = sessionStorage.getItem('user-planning-poker');
  const loggedUser: UserData | undefined = userStorage ? JSON.parse(userStorage) : undefined;

  const [users, setUsers] = useState<UserData[]>([]);
  const [room, setRoom] = useState<RoomData>({} as RoomData);

  const [matchData, setMatchData] = useState<MatchDataInterface>({} as MatchDataInterface);

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
  ]);
  
  // OK
  useEffect(() => {
      onValue(ref(database, 'rooms/' + id), (snapShot) => {
        const { users: usersObject, ...rest }: RoomReal = snapShot.val();

        const usersList = Object.values(usersObject);

        setRoom(rest);
        setUsers(usersList);
      })
  }, [database, id]);
  
  // OK
  useEffect(() => {
    const selectCardOnDatabase = async () => {
      const selectedCard = cards.find(card => card.selected);

      if (selectedCard && loggedUser) {
        await update(ref(database, `rooms/${id}/users/${loggedUser.id}`), { card: selectedCard.card });
      }
    }


    selectCardOnDatabase();
    // eslint-disable-next-line
}, [users, cards]);

  useEffect(() => {
    if (!room.showCards) {
      setCards(prev => prev.map(item => {
        return {
          ...item,
          selected: false
        }
      }))
    } else if (loggedUser) {
      const userSelected = users.find(user => user.id === loggedUser.id);

      if (userSelected?.card) {
        setCards(prev => prev.map(item => {
          if (item.card === userSelected.card) {
            return {
              ...item,
              selected: true
            }
          }

          return { ...item };
        }))
      }
    }
  }, [room.showCards]);

  // TODO
  useEffect(() => {
    const loadPokerData = () => {
      const data: any[] = [];
      let count: number = 0;

      if (!users) return;

      users.forEach((user: UserData) => {
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

  const updateGameStatus = async (gameStarted: boolean) => {
    await update(ref(database, `rooms/${id}`), { gameStarted });
  }

  const updateShowCards = async (showCards: boolean) => {
    await update(ref(database, `rooms/${id}`), { showCards });
  }

  const resetGame = async () => {
    try {
      await updateShowCards(false);

      let userUpdates: any = {};
      users.forEach(user => {
        userUpdates[`${user.id}`] = {...user, card: ''}
      });

      await update(ref(database, `rooms/${id}/users`), userUpdates);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  const selectCard = async (card: string) => {
    sessionStorage.setItem('user-planning-poker', JSON.stringify({...loggedUser, card}))

    setCards(prev => prev.map(c => {
        if (c.card === card) {
          c.selected = true;
        } else {
          c.selected = false;
        };

        return c;
      })
    );
  }

  const inviteGuest = async () => {
    navigator.clipboard.writeText(url)
      .then(() => toast.success('Link de invite copiado!'))
      .catch(() => toast.error('Tente novamente!'));    
  }

  return (
    <PokerRoom>
      <PokerBar>
        <section>
          <h1>planning.poker</h1>

          <section>
            <div className="avatar" />
            <div className="userdata-wrapper">
              <p>{loggedUser?.username}</p>
              {(loggedUser?.isSpectator) && (
                <span>
                  Espectador
                </span>
              )}
            </div>
          </section>
          <nav>

            <a href="/">Home</a>
            <a href="/invite">Entrar em uma sala</a>
          </nav>

        </section>
      </PokerBar>

      <PokerWrapper>
        {loggedUser === undefined ? (
          <h2>Você não tem acesso a essa sala</h2>
        ) : (
          <>
            <PokerActions>
              {(loggedUser?.usertype === 'HOST') && (
                <section className="host-actions">
                  <button 
                  type="button"
                  className="start-voting"
                  onClick={async () => {
                    if (!room.gameStarted && !room.showCards) {
                      await updateGameStatus(true);
                    } else if (room.gameStarted && room.showCards) {
                      await resetGame();
                    } else {
                      await updateShowCards(true);
                    }
                  }}
                  >
                    {room.gameStarted 
                      ? (room.showCards 
                        ? 'Reiniciar votação' 
                        : 'Revelar votos') 
                      : 'Iniciar Votação'}
                  </button>
                </section>
              )}

              <h1>{room.roomname}</h1>

              <section id="invite-wrapper">
                <button type="button" onClick={inviteGuest}>Convidar</button>
              </section>
            </PokerActions>

            <PokerTable>
              <aside>
                {!room.showCards ? (
                  <div className="cards-list">
                    {loggedUser.usertype !== 'HOST' ? cards.map(item => (
                      <button
                        disabled={!room.gameStarted || loggedUser.isSpectator}
                        type="button" 
                        onClick={async () => await selectCard(item.card)}
                        className={item.selected ? 'card-selected' : ''}
                      >
                        {(room.gameStarted && !loggedUser.isSpectator) ? item.card : <ImClubs size={18} color="#222831" />}
                      </button>

                  )) : (
                    <p>
                      {users.filter(user => !user.isSpectator).every(item => item.card !== '') 
                        ? 'Votação finalizada' 
                        : !room.gameStarted 
                          ? 'Agurdando o inicio da votação'
                          : 'Aguarde os participantes finalizarem a votação'
                      }
                    </p>
                  )}
                </div>
                ) : (
                  <section>
                    <div className="average">
                      <h3>{matchData.media}</h3>
                      <span>Média final</span>
                    </div>

                    <h3>Resultados</h3>

                    <div>
                      {matchData.chosenCards.map(item => (
                        <div className="chosen-card">
                          <div className="card">
                            {item.card}
                          </div>
                          <div className="amount">
                            {item.amount > 1 
                              ? `${item.amount} votos`
                              : '1 voto' 
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                <p>
                  {!loggedUser.isSpectator && loggedUser.usertype === 'PLAYER' ? (
                    <>
                      {(room.gameStarted && !room.showCards && loggedUser.card === '') && 'Escolha a sua carta'}
                      {!room.gameStarted && 'Aguardando organizador iniciar a votação'}
                    </>
                  ) : (
                    !loggedUser.isSpectator && (users.filter(user => !user.isSpectator).every(item => item.card !== '') 
                      ? 'Pronto! Votação finalizada' 
                      : 'Aguarde os participantes finalizarem a votação')
                      
                  )}
                </p>
              </aside>
                  
              <section>
                {users && users
                  .filter(() => {
                    const userExist = users.find((user: UserData) => user.id === loggedUser.id);

                    const data: UserData[] = [];

                    if (userExist) {
                      data[0] = userExist;
                      data.push(...users);
                      
                      return data;
                    }

                    return data;
                  })
                  .map((user: UserData) => (
                  <div className="card-wrapper">
                    <div 
                      className={
                        `card ${room.showCards ? 'up-card' : 'down-card'} ${user.card ? 'card-selected' : ''} ${user.isSpectator ? 'spectator-card' : ''}`}
                    >
                      {user.isSpectator ? <FaEye size={28} /> : (
                        <>
                        {(room.showCards && user.card) && <div><h3>{user.card}</h3></div>}
                        {(room.showCards && !user.card) && <FaTimes size={28} />}                        
                        </>
                      )}
                    </div>
                    <h5>{user.username}</h5>
                  </div>
                ))}
              </section>
            </PokerTable>
          </>
        )}
      </PokerWrapper>
    </PokerRoom>
  );
}
