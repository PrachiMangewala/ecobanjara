import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();