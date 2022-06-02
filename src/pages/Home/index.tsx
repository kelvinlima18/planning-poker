import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import Select from '../../elements/Select';
import { Header } from '../../components/Header';

import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';
import { ref, set } from 'firebase/database';
import { database } from '../../repository/firebase';

export const Home: React.FC = () => {
  const [roomname, setRoomname] = useState('');
  const [username, setUsername] = useState('');
  const [isSpectator, setIsSpectator] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const history = useHistory();

  const handleAddUser = async (event: FormEvent) => {
    event.preventDefault();
    
    try {
      const schema = Yup.object().shape({
        roomname: Yup.string().required('O nome da sala é obrigatório'),
        username: Yup.string().required('O nome do usuário é obrigatório'),
      });
      
      await schema.validate({ roomname, username }, { abortEarly: false });
      
      setLoadingButton(true);
  
      const roomData: RoomData = {
        id: uuid(),
        roomname,
        gameStarted: false,
        showCards: false
      };
  
      
      const userDataOnSpectator: UserData = {
        id: uuid(),
        username,
        usertype: 'HOST',
        isSpectator,
      };
      
      const userData: UserData = {
        ...userDataOnSpectator,
        card: ""
      }

      await set(ref(database, 'rooms/' + roomData.id), { 
        ...roomData,
        users: {
         [userData.id]: { ...userData } 
        }
      });

      sessionStorage.setItem('user-planning-poker', JSON.stringify(userData));
      history.push(`/room/${roomData.id}`);
      
      setTimeout(() => setLoadingButton(false), 1000);
    } catch (error: any) {
      if (error.errors) {
        toast.error(error.errors);
      } else {
        toast.error(error.message);
      }
    }

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
              maxLength={30}
            />

            <input
              type="text"
              placeholder="Nome do usuário"
              value={username}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
              maxLength={16}
            />

          </div>
          <div>
            <Select />

            <div className="spectator-wrapper">
              <input 
                type="checkbox" 
                checked={isSpectator}
                onChange={() => setIsSpectator(old => !old)} 
                name="spectator" 
                id="spectator" 
              />
              <label htmlFor="spectator">Entrar como espectador</label>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loadingButton}
          >
            Criar Sala
          </button>
        </form>
      </section>
    </Container>
  );
}