export type UserType = 'HOST' | 'PLAYER';

export interface UserData {
  id: string;
  username: string;
  usertype: UserType;
  card?: string;
  isSpectator: boolean;
}

export interface RoomData {
  id: string;
  roomname: string;
  gameStarted: boolean;
  showCards: boolean;
}

export interface MatchDataInterface {
  media: number;
  chosenCards: {
    card: string;
    amount: number;
  }[]
}