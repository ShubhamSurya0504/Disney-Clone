import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// import storage from '@google-cloud/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAcgmBToK7W29lvx9p9kxAtvP2HgUpZcRo",
    authDomain: "disneyplus-clone-972cb.firebaseapp.com",
    projectId: "disneyplus-clone-972cb",
    storageBucket: "disneyplus-clone-972cb.appspot.com",
    messagingSenderId: "318717132458",
    appId: "1:318717132458:web:b0147b36102d16aaf09ad3"
  };

  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
// var storage1 = storage(firebaseConfig);
console.log(storage);


export { auth, provider, storage };
export default db;