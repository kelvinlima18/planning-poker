import { onValue, ref } from 'firebase/database';
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../repository/firebase';
import { RoomData, UserData } from '../types/user';

interface PokerContextData {
  loggedUser: UserData | undefined;
  users: UserData[];
  room: RoomData;
  setRoomId: Dispatch<SetStateAction<string>>;
}

interface RoomReal extends RoomData {
  users: {
    [key: string]: UserData;
  };
}

const PokerContext = createContext<PokerContextData>({} as PokerContextData);

export const PokerProvider: React.FC = ({ children }) => {
  const userStorage = sessionStorage.getItem('user-planning-poker');
  const loggedUser: UserData | undefined = userStorage 
    ? JSON.parse(userStorage) 
    : undefined;

  const [roomId, setRoomId] = useState<string>('');
  const [users, setUsers] = useState<UserData[]>([]);
  const [room, setRoom] = useState<RoomData>({} as RoomData);

  useEffect(() => {
    if (roomId) {
      onValue(ref(database, 'rooms/' + roomId), (snapShot) => {
        const { users: usersObject, ...rest }: RoomReal = snapShot.val();
        const usersList = Object.values(usersObject);
  
        setRoom(rest);
        setUsers(usersList);
      })
    }
  }, [database, roomId]);

  return (
    <PokerContext.Provider value={{
      loggedUser,
      room,
      users,
      setRoomId,
    }}>
      {children}
    </PokerContext.Provider>
  );
}

export const usePoker = () => {
  return useContext(PokerContext);
}
