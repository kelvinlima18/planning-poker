import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC_ScqUKNG_Oxg-8Ev7paFconbJDJ5EVOE",
  authDomain: "planning-poker-v001.firebaseapp.com",
  projectId: "planning-poker-v001",
  storageBucket: "planning-poker-v001.appspot.com",
  messagingSenderId: "1068527061199",
  appId: "1:1068527061199:web:10ecf99f579b3a05864fba",
  measurementId: "G-1EZP1YDE7T"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFirestore(app);

export const roomsCollectionRef = () => {
  return collection(db, 'rooms');
}

export const usersCollectionRef = (roomId: string) => {
  return collection(db, `rooms/${roomId}/users`);
}
