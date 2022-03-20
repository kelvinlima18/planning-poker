export interface UserData {
  id: string;
  username: string;
  usertype: 'host-player' | 'host-spectator' | 'player' | 'spectator';
  card?: string;
}

export interface RoomData {
  id: string;
  roomname: string;
  gameStarted: boolean;
  showCards: boolean;
}