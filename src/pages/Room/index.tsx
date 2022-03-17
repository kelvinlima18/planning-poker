import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PokerActions from '../../components/PokerActions';
import { PokerTable } from '../../components/PokerTable';
import { getRoom, getPlayers } from '../../repository/firebase';
import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';

export const Room: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `${window.location.origin}/invite/${id}`;

  const userStorage = sessionStorage.getItem('user-planning-poker');
  const loggedUser: UserData | undefined = userStorage ? JSON.parse(userStorage) : undefined;

  const [room, setRoom] = useState<RoomData>({} as RoomData);
  const [users, setUsers] = useState<UserData[]>([]);

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
      })
    };

    loadRoomData();
  }, [id]);

  const inviteGuest = () => {
    const urlInvite = document.createElement('input');
    const container = document.getElementById('header-wrapper');

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
    <Container>
      <header id="header-wrapper">
        <button type="button" onClick={inviteGuest}>Convidar</button>
        <h1>Sala: {room.roomname}</h1>
      </header>

      <section>
        {loggedUser === undefined ? (
          <h2>Você não tem acesso a essa sala</h2>
        ) : (
          <>
            <PokerActions loggedUser={loggedUser} users={users} room={room} />
            <PokerTable users={users} room={room} />
          </>
        )}
      </section>
    </Container>
  );
}
