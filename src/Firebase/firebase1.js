import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDeKej6Md9bXmNopSUEWcyaIs4wM-Eajqo",
  authDomain: "slack-clone-9765b.firebaseapp.com",
  projectId: "slack-clone-9765b",
  storageBucket: "slack-clone-9765b.appspot.com",
  messagingSenderId: "901179372077",
  appId: "1:901179372077:web:90694c5b11b07729a73ea4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
