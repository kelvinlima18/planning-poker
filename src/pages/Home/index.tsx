import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { v4 as uuid } from 'uuid';

import { createRoom, addPlayerToRoom } from '../../repository/firebase';

import { Container } from './styles';

export const Home: React.FC = () => {
  const [roomname, setRoomname] = useState('');
  const [username, setUsername] = useState('');

  const history = useHistory();

  const handleAddUser = async (event: FormEvent) => {
    event.preventDefault();

    const roomData = {
      id: uuid(),
      roomname,
      gameStarted: false
    };

    const userData = {
      id: uuid(),
      username,
      usertype: 'host',
    };

    await createRoom(roomData);
    await addPlayerToRoom(roomData.id, userData);
    history.push(`/room/${roomData.id}`);
  }

  return (
    <Container>
      <section>
        <h2>Criar uma sala</h2>

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

          <button type="submit">Criar Sala</button>
        </form>
      </section>
    </Container>
  );
}