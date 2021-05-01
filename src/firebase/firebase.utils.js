import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAUHlCi1hNmOKYYYaD3HJGi_U4NeyDoWXQ",
    authDomain: "crown-db-f2f4a.firebaseapp.com",
    projectId: "crown-db-f2f4a",
    storageBucket: "crown-db-f2f4a.appspot.com",
    messagingSenderId: "1017522328354",
    appId: "1:1017522328354:web:78d6a58bb702ae88600b7b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;