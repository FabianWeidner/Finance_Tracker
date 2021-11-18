import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAMN1apNyZTtj36xOkgiQumH62OBUQdcys',
  authDomain: 'mymoney-a5df7.firebaseapp.com',
  projectId: 'mymoney-a5df7',
  storageBucket: 'mymoney-a5df7.appspot.com',
  messagingSenderId: '71994297448',
  appId: '1:71994297448:web:f34e76a2f813491a9bbfdd',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
