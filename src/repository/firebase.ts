import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { UserData } from '../types/user';

const firebaseConfig = {
  apiKey: "AIzaSyC_ScqUKNG_Oxg-8Ev7paFconbJDJ5EVOE",
  authDomain: "planning-poker-v001.firebaseapp.com",
  projectId: "planning-poker-v001",
  storageBucket: "planning-poker-v001.appspot.com",
  messagingSenderId: "1068527061199",
  appId: "1:1068527061199:web:10ecf99f579b3a05864fba",
  measurementId: "G-1EZP1YDE7T"
};

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics(app);
const db = firebase.firestore(app);

export const createRoom = async (roomData: { id: string, roomname: string, gameStarted: boolean }) => {
  await db.collection('rooms').doc(roomData.id).set(roomData);
}

export const addPlayerToRoom = async (roomId: string, userData: UserData) => {
  sessionStorage.setItem('user-planning-poker', JSON.stringify(userData));
  await db.collection('rooms').doc(roomId).collection('users').doc(userData.id).set(userData);
}

export const getRoom = async (roomId: string) => {
  return db.collection('rooms').doc(roomId);
}
 
export const getPlayers = async (roomId: string) => {
  return db.collection('rooms').doc(roomId).collection('users');
}

export const updateGameStatus = async (roomId: string, gameStarted: boolean) => {
  await db.collection('rooms').doc(roomId).update({ gameStarted });
}

export const updateShowCards = async (roomId: string, showCards: boolean) => {
  await db.collection('rooms').doc(roomId).update({ showCards });
}

export const updateUserCard = async (roomId: string, userId: string, card: string) => {
  await db.collection('rooms').doc(roomId).collection('users').doc(userId).update({ card });
}

export const resetGame = async (roomId: string) => {
  const usersDoc =  db.collection('rooms').doc(roomId).collection('users').get();
  console.log({usersDoc});

  return await usersDoc.then(querySnapshot => {
    querySnapshot.forEach(async userDoc => {
      return await db.runTransaction(async transaction => {
        return await transaction.get(userDoc.ref).then(doc => {
          if (!doc.exists) { throw new Error('Document does not exists!') }
    
          const resetGame = doc.data()!.card = '';
          transaction.update(userDoc.ref, { card: resetGame });
        });
      })
      .catch(() => new Error('Its not possible reset cards value'));
    })
  })
}
