import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDx-b3ly-__vjBNvMqTSKd-NNrUzMejnVA",
    authDomain: "fb-clone-1b14c.firebaseapp.com",
    databaseURL: "https://fb-clone-1b14c.firebaseio.com",
    projectId: "fb-clone-1b14c",
    storageBucket: "fb-clone-1b14c.appspot.com",
    messagingSenderId: "624517242300",
    appId: "1:624517242300:web:64fd814c38473914505fb9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;