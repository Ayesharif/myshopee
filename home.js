import { auth, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, get, databaserf, db, child  } from "./firebase.js";

let logout= ()=>{

  signOut(auth ).then(() => {
    // Sign-out successful.
    console.log("user gone");
    location.replace("login.html");
  }).catch((error) => {
    // An error happened.
    console.log("user not gone",error );
  });
};



let signoutbtn= document.getElementById("logout-btn");
signoutbtn.addEventListener("click",logout);

onAuthStateChanged(auth, (user) => {
    if (user) {
      if(!user.emailVerified ){
        console.log("bad");
        document.getElementById("emailverification").style.display="none";
        
      }else{
        document.getElementById("notverified").style.display="none";
        console.log("good");
        console.log("exist" + user.emailVerified);  
       
        
      }
        
 // location.replace("index.html")
  }else{
    console.log("not exist");
    document.getElementById("logout").style.display="none";
    document.getElementById("profile").innerHTML="Sign up";
    document.getElementById("profile").href="Signup.html";
    document.getElementById("notverified").style.display="none";
    // location.replace("index.html") 
  }
});