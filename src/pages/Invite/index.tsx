import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import { addPlayerToRoom } from '../../repository/firebase';

import { Container } from './styles';

export const Invite: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [username, setUsername] = useState('');
  const [usertype, setUsertype] = useState('player');

  const history = useHistory();

  const joinRoom = async (event: FormEvent) => {
    event.preventDefault();

    const player = {
      id: uuid(),
      username,
      usertype,
    };

    if (!id) return;

    await addPlayerToRoom(id, player);
    history.push(`/room/${id}`);
  }

  return (
    <Container>
      <form onSubmit={joinRoom}>
        <label htmlFor="room-id">Room ID</label>
        <input id="room-id" type="text" disabled value={id} />
        <input
          type="text"
          placeholder="Username"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
          value={username}
        />
        <select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => setUsertype(event.target.value)}
          value={usertype}
        >
          <option value="guest">Convidado</option>
          <option value="player">Participante</option>
        </select>

        <button type="submit">Entrar na sala</button>
      </form>
    </Container>
  );
}