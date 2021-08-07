import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDLgVY9DalGfvWwTZq_F5j8wowrUiIJ96c",
    authDomain: "yappeizhen-7ea44.firebaseapp.com",
    projectId: "yappeizhen-7ea44",
    storageBucket: "yappeizhen-7ea44.appspot.com",
    messagingSenderId: "788893744161",
    appId: "1:788893744161:web:c9645d5b8bdf8e5ef83760",
    measurementId: "G-CRFPNLD2L4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.storage()