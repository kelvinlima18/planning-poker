import React, { useState } from 'react';

import { updateShowCards, updateUserCard, updateGameStatus, resetGame } from '../../repository/firebase';

import { RoomData, UserData } from '../../types/user';

import { Container } from './styles';

interface PokerTableProps {
  users: UserData[];
  room: RoomData;
}

export const PokerTable: React.FC<PokerTableProps> = ({ room, users }) => {
  const {  showCards } = room;

  return (
    <Container className="poker-table">     
      <section>
      {users.map(user => user.usertype !== 'host' && (
        <div className="card-wrapper">
          <div className="card">
            {showCards && user.card && user.card!}
            {!showCards && user.card && 'Já votou'}
            {!showCards && !user.card && 'Não votou'}
          </div>
          <h5>{user.username}</h5>
        </div>
      ))}
      </section>
    </Container>
  );
}