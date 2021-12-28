import { firebase } from "@firebase/app";
import { auth, signInWithEmailAndPassword } from "@firebase/auth";

const loginRequest = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
