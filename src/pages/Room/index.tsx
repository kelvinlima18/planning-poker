import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes, FaEye } from 'react-icons/fa';
import { GiCardPlay } from 'react-icons/gi';
import { ImClubs } from 'react-icons/im';
import { useParams } from 'react-router';
import { getRoom, getPlayers, updateUserCard, updateGameStatus, resetGame, updateShowCards } from '../../repository/firebase';
import { MatchDataInterface, RoomData, UserData } from '../../types/user';

import { PokerRoom, PokerWrapper, PokerActions, PokerTable, PokerBar  } from './styles';

export const Room: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `${window.location.origin}/invite/${id}`;

  const userStorage = sessionStorage.getItem('user-planning-poker');
  const loggedUser: UserData | undefined = userStorage ? JSON.parse(userStorage) : undefined;

  const [users, setUsers] = useState<UserData[]>([]);
  const [room, setRoom] = useState<RoomData>({} as RoomData);

  const [matchData, setMatchData] = useState<MatchDataInterface>({} as MatchDataInterface);

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
  ]);
   
  useEffect(() => {
    const loadRoomData = async () => {
      (await getRoom(id)).onSnapshot(snapshot => {
        if (snapshot.exists) {
          const data = snapshot.data();

          setRoom(data as RoomData);
        }
      });

      (await getPlayers(id)).onSnapshot(snapshot => {
        let players: UserData[] = [];
        snapshot.forEach(user => {
          players.push(user.data() as UserData);
        });

        setUsers(players);
      });
    };

    loadRoomData();
  }, [id]);

  useEffect(() => {
    const selectCardOnDatabase = async () => {
      const selectedCard = cards.find(card => card.selected);

      if (selectedCard) {
        await updateUserCard(roomId, loggedUser!.id, selectedCard.card);
      }
    }


    selectCardOnDatabase();
}, [users, cards]);

  useEffect(() => {
    if (!showCards) {
      setCards(prev => prev.map(item => {
        return {
          ...item,
          selected: false
        }
      }))
    }
  }, [showCards]);

  useEffect(() => {
    const loadPokerData = () => {
      const data: any[] = [];
      let count: number = 0;

      users.forEach(user => {
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
        media: average || 0,
        chosenCards: Object.values(chosenData) as unknown as any
      })
    }

    loadPokerData();
  }, [users]);

  const selectCard = async (card: string) => {
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

  const resetVotes = async () => {
    await resetGame(roomId);
    await updateShowCards(roomId, false);
  }

  const inviteGuest = () => {
    const urlInvite = document.createElement('input');
    const container = document.getElementById('invite-wrapper');

    const inputAlreadyExists = container!.getElementsByClassName('input-url');

    if (inputAlreadyExists.length > 0) return;

    container!.appendChild(urlInvite);
    urlInvite.className = 'invite-link';
    urlInvite.value = url;
    urlInvite.select();
    document.execCommand('copy');
    urlInvite.focus();
    urlInvite.disabled = true;
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
                    if (!gameStarted && !showCards) {
                      await updateGameStatus(roomId, true);
                    } else {
                      resetVotes();
                    }
                  }}
                  >
                    {gameStarted ? 'Reiniciar Votação' : 'Iniciar Votação'}
                  </button>
                  {(users.some(item => item.card !== '') && !showCards && gameStarted) && (
                    <button 
                      type="button"
                      className="show-cards" 
                      onClick={async () => await updateShowCards(roomId, true)}
                    >
                      Revelar votos
                    </button>
                  )}
                </section>
              )}

              <h1>{room.roomname}</h1>

              <section id="invite-wrapper">
                <button type="button" onClick={inviteGuest}>Convidar</button>
              </section>
            </PokerActions>

            <PokerTable>
              <aside>
                {!showCards ? (
                  <div className="cards-list">
                    {cards.map(item => (
                      <button
                        disabled={!gameStarted || loggedUser.isSpectator}
                        type="button" 
                        onClick={async () => await selectCard(item.card)}
                        className={item.selected ? 'card-selected' : ''}
                      >
                        {(gameStarted && !loggedUser.isSpectator) ? item.card : <ImClubs size={18} color="#222831" />}
                      </button>

                  ))}
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
                  {(gameStarted && !showCards) && 'Escolha a sua carta'}
                  {!gameStarted && 'Aguardando organizador iniciar a votação'}
                </p>
              </aside>

                  
              <section>
                {users
                  .filter(() => {
                    const userExist = users.find(user => user.id === loggedUser.id);

                    const data: UserData[] = [];

                    if (userExist) {
                      data[0] = userExist;
                      data.push(...users);
                      
                      return data;
                    }

                    return data;
                  })
                  .map(user => (
                  <div className="card-wrapper">
                    <div className={`card ${showCards && 'up-card'} ${user.isSpectator ? 'spectator-card' : ''}`}>
                      {user.isSpectator ? <FaEye size={28} /> : (
                        <>
                        {(showCards && user.card) && <div><h3>{user.card}</h3></div>}
                        {(!showCards && user.card) && <FaCheck size={28} />}
                        {(!showCards && !user.card) && <GiCardPlay size={28} />}
                        {(showCards && !user.card) && <FaTimes size={28} />}                        
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
