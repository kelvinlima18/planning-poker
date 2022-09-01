import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';

import { MatchActions } from '../../components/MatchActions';
import { MatchReports } from '../../components/MatchReports';
import { RoomActions } from '../../components/RoomActions';
import { TableArea } from '../../components/TableArea';
import { database } from '../../repository/firebase';
import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';

interface RoomReal extends RoomData {
  users: {
    [key: string]: UserData;
  };
}

export const Room2ARessureicao: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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


  return (
    <Container>
      <RoomActions>
        <header>Nome da Sala</header>
      </RoomActions>
      <MatchActions>
        <aside>B</aside>
      </MatchActions>
      <TableArea users={users} />
      <MatchReports>
        <div>
          Dados
        </div>
      </MatchReports>
    </Container>
  );
}
