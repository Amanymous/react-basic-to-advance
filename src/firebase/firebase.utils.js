import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCknzWcLUwO2gR5qNjSJQ0YB520OBkoAZA",
  authDomain: "crwn-db-c70b0.firebaseapp.com",
  databaseURL: "https://crwn-db-c70b0.firebaseio.com",
  projectId: "crwn-db-c70b0",
  storageBucket: "crwn-db-c70b0.appspot.com",
  messagingSenderId: "571400250028",
  appId: "1:571400250028:web:1c15a9a63469a263427509",
  measurementId: "G-P6Y78TCFHN",
};
// ye signin condition ky liye ha
export const createUserPorfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;
//   const userRef =firestore.doc('users/sdfd24344')
    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapShot=await userRef.get()
//   console.log(snapShot)
//   console.log(firestore.doc("users/sdfd24344"));
  // ye random user id ha jo exist nai karti ha
  if(!snapShot.exists){
      const { displayName,email } =userAuth; 
      const createdAt = new Date();
      try {
        await userRef.set({
           displayName,
           email,
           createdAt,
           ...addtionalData
        })
      } catch(error){
        console.log('error creating user.',error.message);
        
      }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
