import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { v4 as uuid } from 'uuid';
import Select from '../../elements/Select';
import { Header } from '../../components/Header';

import { createRoom, addPlayerToRoom } from '../../repository/firebase';
import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';

export const Home: React.FC = () => {
  const [roomname, setRoomname] = useState('');
  const [username, setUsername] = useState('');
  const [onSpectator, setOnSpectator] = useState(false);

  const history = useHistory();

  const handleAddUser = async (event: FormEvent) => {
    event.preventDefault();

    const roomData: RoomData = {
      id: uuid(),
      roomname,
      gameStarted: false,
      showCards: false
    };

    
    const userDataOnSpectator: UserData = {
      id: uuid(),
      username,
      usertype: onSpectator ? 'host-spectator' :  'host-player',
    };
    
    const userData: UserData = {
      ...userDataOnSpectator,
      card: ""
    }
    
    await createRoom(roomData);
    await addPlayerToRoom(roomData.id, onSpectator ? userDataOnSpectator : userData);
    history.push(`/room/${roomData.id}`);
  }

  return (
    <Container>
      <Header />

      <section>
        <h2>Crie aqui a sua sala</h2>

        <form onSubmit={handleAddUser}>
          <div>
            <input
              type="text"
              onChange={(event: ChangeEvent<HTMLInputElement>) => setRoomname(event.target.value)}
              value={roomname}
              placeholder="Nome da sala"
            />

            <input
              type="text"
              placeholder="Nome do usuário"
              value={username}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            />

          </div>
          <div>
            <Select />

            <div className="spectator-wrapper">
              <input 
                type="checkbox" 
                checked={onSpectator}
                onChange={() => setOnSpectator(old => !old)} 
                name="spectator" 
                id="spectator" 
              />
              <label htmlFor="spectator">Entrar como espectador</label>
            </div>
          </div>

          <button type="submit">Criar Sala</button>
        </form>
      </section>
    </Container>
  );
}