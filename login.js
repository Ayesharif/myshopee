//login........................................................................................ area
import { auth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "./firebase.js";
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault()


  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let login = async() => {
console.log("processing");

    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;


        // ...
      })
      .catch((error) => {
        console.log(error.message);

        alert("error", error.message);

        // ..
      });
  }

login();


 onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user available")
      location.replace("index.html");
      // ...
    }
    else {
      console.log("not exist");

    }
  });
}
);


//signup........................................................................................ area


