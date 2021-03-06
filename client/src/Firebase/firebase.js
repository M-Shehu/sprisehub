import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebase.config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();
    this.provider = new app.auth.GoogleAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => 
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password)

  doSignInWithGoogle = () => 
  this.auth.signInWithPopup(this.provider);

  // doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Database API ***

  sprise = uid => this.db.ref(`sprises/${uid}`);

  users = () => this.db.ref('users');
};

export default Firebase;
