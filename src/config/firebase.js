import 'firebase/storage';

import firebase from "firebase/app";

const firebaseConfig = {
};
firebase.initializeApp(firebaseConfig);

export default firebase.storage()