import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import { Header } from '../../components/Header';
import { addPlayerToRoom, getRoom } from '../../repository/firebase';
import { UserData } from '../../types/user';

import { Container } from './styles';

export const Invite: React.FC = () => {
  const { id: idParams } = useParams<{ id: string }>();
  const [username, setUsername] = useState('');
  const [isSpectator, setIsSpectator] = useState(false);
  const [id, setId] = useState(idParams);
  const [loadingButton, setLoadingButton] = useState(false);

  const history = useHistory();

  const joinRoom = async (event: FormEvent) => {
    event.preventDefault();
    setLoadingButton(true);

    const userDataOnSpectator: UserData = {
      id: uuid(),
      username,
      usertype: 'PLAYER',
      isSpectator
    };

    const userData: UserData = {
      ...userDataOnSpectator,
      card: ""
    }

    if (!id) return;

    (await getRoom(id)).onSnapshot(async (snapshot) => {
      if (snapshot.exists) {
        await addPlayerToRoom(id, isSpectator ? userDataOnSpectator : userData).then(() => {
          history.push(`/room/${id}`);
        }).catch(() => console.log('Oops, algo deu errado'));
      } else {
        console.error('Não existe essa sala');
      }
    })

    setTimeout(() => setLoadingButton(false), 1000);
  }

  return (
    <Container>
      <Header />

      <section>
        <h1>Entre em uma sala</h1>

        <form onSubmit={joinRoom}>
          <input
            id="room-id" 
            type="text" 
            disabled={!!idParams}
            placeholder={id ? '' : 'ID da sala'} 
            value={id}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setId(event.target.value);
            }} 
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            value={username}
          />
          
          <div className="spectator-wrapper">
            <input 
              type="checkbox"
              checked={isSpectator}
              onChange={() => setIsSpectator(old => !old)} 
              id="select-spectator" 
            />
            <label htmlFor="select-spectator">
              Entrar como espectador
            </label>
          </div>

          <button 
            type="submit"
            disabled={loadingButton}
          >
            Entrar na sala
          </button>
        </form>
      </section>
    </Container>
  );
}