import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getStorage, ref as storagerf, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
import { getDatabase, get, set, ref as databaserf, child } from "https://www.gstatic.com/firebasejs/10.13/firebase-database.js";
import { getAuth, onAuthStateChanged, sendEmailVerification , sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGLGMEggqRvLPKzC3QI3MK0IFG7xmcbMU",
  authDomain: "fir-605e0.firebaseapp.com",
  projectId: "fir-605e0",
  storageBucket: "fir-605e0.appspot.com",
  messagingSenderId: "99653478345",
  appId: "1:99653478345:web:12bc1674a68b6693f36a18"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getDatabase(app);
const storage=getStorage(app);


export{auth,onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification ,sendPasswordResetEmail, signInWithEmailAndPassword, signOut, db, get, set, databaserf, storage, storagerf,uploadBytes, getDownloadURL, child, };

