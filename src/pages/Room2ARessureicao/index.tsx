import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import { CardsReports } from '../../components/CardsReports';
import { TableArea } from '../../components/TableArea';
import { usePoker } from '../../hooks/usePoker';

import { RoomContainer, RoomActions, RoomContent } from './styles';

export const Room2ARessureicao: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loggedUser, room, setRoomId } = usePoker();

  useEffect(() => {
    if (id) setRoomId(id);
  }, [id])

  const url = `${window.location.origin}/invite/${room.id}`;

  const inviteGuest = async () => {
    navigator.clipboard.writeText(url)
      .then(() => toast.success('Link de invite copiado!'))
      .catch(() => toast.error('Tente novamente!'));    
  }

  return (
    <RoomContainer>
      <RoomContent>
        <RoomActions> 
          <div>

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
            </div>
        </RoomActions>
        <TableArea />
        <CardsReports />
      </RoomContent>
    </RoomContainer>
  );
}
