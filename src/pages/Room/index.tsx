import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRoom, getPlayers } from '../../repository/firebase';
import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';

export const Room: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [url, _] = useState(`${window.location.origin}/invite/${id}`);

  const [room, setRoom] = useState<RoomData>({} as RoomData);
  const [user, setUser] = useState<UserData[]>([]);

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

        setUser(players);
      })
    };

    loadRoomData();
  }, []);

  const inviteGuest = () => {
    const urlInvite = document.createElement('input');
    const container = document.getElementById('room-container');

    const inputAlreadyExists = container!.getElementsByClassName('input-url');

    if (inputAlreadyExists.length > 0) return;

    container!.appendChild(urlInvite);
    urlInvite.className = 'input-url';
    urlInvite.value = url;
    urlInvite.select();
    document.execCommand('copy');
    urlInvite.focus();
    urlInvite.disabled = true;
  }


  return (
    <Container id="room-container">
      <button type="button" onClick={inviteGuest}>Convidar participante</button>

      <section>
        <h1>Room name: {room.roomname}</h1>
        {user.map(p => (
          <ul>
            <li>{p.username} - {p.usertype}</li>
          </ul>
        ))}
      </section>
    </Container>
  );
}
