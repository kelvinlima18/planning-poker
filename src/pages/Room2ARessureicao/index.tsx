import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { onValue, ref } from 'firebase/database';

import { CardsReports } from '../../components/CardsReports';
import { MatchActions } from '../../components/MatchActions';
import { TableArea } from '../../components/TableArea';
import { database } from '../../repository/firebase';

import { RoomData, UserData } from '../../types/user';

import { RoomContainer, RoomActions, RoomContent } from './styles';

interface RoomReal extends RoomData {
  users: {
    [key: string]: UserData;
  };
}

export const Room2ARessureicao: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `${window.location.origin}/invite/${id}`;

  const userStorage = sessionStorage.getItem('user-planning-poker');
  const loggedUser: UserData | undefined = userStorage 
    ? JSON.parse(userStorage) 
    : undefined;

  const [users, setUsers] = useState<UserData[]>([]);
  const [room, setRoom] = useState<RoomData>({} as RoomData);

  useEffect(() => {
    onValue(ref(database, 'rooms/' + id), (snapShot) => {
      const { users: usersObject, ...rest }: RoomReal = snapShot.val();

      const usersList = Object.values(usersObject);

      setRoom(rest);
      setUsers(usersList);
    })
  }, [database, id]);

  const inviteGuest = async () => {
    navigator.clipboard.writeText(url)
      .then(() => toast.success('Link de invite copiado!'))
      .catch(() => toast.error('Tente novamente!'));    
  }

  return (
    <RoomContainer>
      <RoomContent>
        <RoomActions>
          <h4>{room.roomname}</h4>
          <button 
            type="button" 
            onClick={inviteGuest}
          >
            Convidar
          </button>
          <section>
            <div className="avatar" />
            <div className="userdata-wrapper">
              <p>{loggedUser?.username}</p>
            </div>
          </section>
        </RoomActions>
        <MatchActions users={users} room={room} />
        <TableArea users={users} />
        <CardsReports 
          users={users} 
          room={room}
          loggedUser={loggedUser} 
        />
      </RoomContent>
    </RoomContainer>
  );
}
