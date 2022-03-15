export interface UserData {
  id: string;
  username: string;
  usertype: string;
  card?: string;
}

export interface RoomData {
  id: string;
  roomname: string;
  gameStarted: boolean;
  showCards: boolean;
}