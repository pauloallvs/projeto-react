import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD1nEZ1fuTMZLu3zc4MFCAWjMecrUZSxw4",
  authDomain: "projeto-react-67f98.firebaseapp.com",
  projectId: "projeto-react-67f98",
  storageBucket: "projeto-react-67f98.appspot.com",
  messagingSenderId: "778243097125",
  appId: "1:778243097125:web:8a44cfc7ab179c01f975cc",
  measurementId: "G-4M31J73XJQ"
};

// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }

// export default firebase;


const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);