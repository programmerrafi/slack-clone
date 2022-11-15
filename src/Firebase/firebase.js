// firebase version: "firebase": "^8.8.0"
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeKej6Md9bXmNopSUEWcyaIs4wM-Eajqo",
  authDomain: "slack-clone-9765b.firebaseapp.com",
  projectId: "slack-clone-9765b",
  storageBucket: "slack-clone-9765b.appspot.com",
  messagingSenderId: "901179372077",
  appId: "1:901179372077:web:90694c5b11b07729a73ea4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// ____________________________________________________________

// Alternative firebase version: "firebase": "7.24.0"

// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDeKej6Md9bXmNopSUEWcyaIs4wM-Eajqo",
//   authDomain: "slack-clone-9765b.firebaseapp.com",
//   projectId: "slack-clone-9765b",
//   storageBucket: "slack-clone-9765b.appspot.com",
//   messagingSenderId: "901179372077",
//   appId: "1:901179372077:web:90694c5b11b07729a73ea4",
// };

// firebase.initializeApp(firebaseConfig);
// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export default firebase;

// export { projectStorage, projectFirestore, timestamp };
