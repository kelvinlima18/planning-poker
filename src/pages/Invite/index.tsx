import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import { addPlayerToRoom } from '../../repository/firebase';
import { UserData } from '../../types/user';

import { Container } from './styles';

export const Invite: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [username, setUsername] = useState('');
  const [onSpectator, setOnSpectator] = useState(false);

  const history = useHistory();

  const joinRoom = async (event: FormEvent) => {
    event.preventDefault();

    const userDataOnSpectator: UserData = {
      id: uuid(),
      username,
      usertype: onSpectator ? 'spectator' : 'player',
    };

    const userData: UserData = {
      ...userDataOnSpectator,
      card: ""
    }

    if (!id) return;

    await addPlayerToRoom(id, onSpectator ? userDataOnSpectator : userData);
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
        
        <div>
          <input 
            type="checkbox"
            checked={onSpectator}
            onChange={() => setOnSpectator(old => !old)} 
            id="select-spectator" 
          />
          <label htmlFor="select-spectator">
            Entrar como espectador
          </label>
        </div>

        <button type="submit">Entrar na sala</button>
      </form>
    </Container>
  );
}