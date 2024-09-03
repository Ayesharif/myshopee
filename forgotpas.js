import { auth,onAuthStateChanged,sendPasswordResetEmail } from "./firebase.js";
let email=document.getElementById("email");
// console.log(email.value);
let resetpas =()=>{
    
    sendPasswordResetEmail(auth, email.value)
  .then(() => {
console.log("sent");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });
}

let resetpasbtn= document.getElementById("reset-btn");
resetpasbtn.addEventListener("click",resetpas);