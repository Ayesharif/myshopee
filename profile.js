import { auth, onAuthStateChanged, get, databaserf, db, child, signOut  } from "./firebase.js";
window.addEventListener("load", (event) => {
    console.log("Page fully loaded");
event.preventDefault();

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
 const dbRef =databaserf(db);      
        get(child(dbRef, `users/${auth.currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            document.getElementById("image").src = `${data.imageUrl}`;
            document.getElementById("firstN").innerHTML = `${data.firstName}`;
            document.getElementById("lastN").innerHTML = `${data.lastName}`;
            document.getElementById("email").innerHTML = `${data.email}`;
            
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error("Error retrieving user data:", error);
  });
        
 // location.replace("index.html")
  }else{
    console.log("not exist");
    // document.getElementById("logout").style.display="none";
    // document.getElementById("profile").innerHTML="Sign up";
    // document.getElementById("profile").href="Signup.html";
    // document.getElementById("notverified").style.display="none";
    location.replace("index.html") 
  }
});

});