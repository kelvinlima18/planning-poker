import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC_ScqUKNG_Oxg-8Ev7paFconbJDJ5EVOE",
  authDomain: "planning-poker-v001.firebaseapp.com",
  databaseURL: "https://planning-poker-v001-default-rtdb.firebaseio.com",
  projectId: "planning-poker-v001",
  storageBucket: "planning-poker-v001.appspot.com",
  messagingSenderId: "1068527061199",
  appId: "1:1068527061199:web:10ecf99f579b3a05864fba",
  measurementId: "G-1EZP1YDE7T"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const database = getDatabase(app);