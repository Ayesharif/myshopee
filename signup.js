import { 
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword, 
  sendEmailVerification,
  db, 
  databaserf, 
  set, 
  storage, 
  storagerf,
  uploadBytes,
  getDownloadURL
} from "./firebase.js";

document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let firstName = document.getElementById("F-name").value;
  let lastName = document.getElementById("L-name").value;
  let image = document.getElementById("image").files[0];

  const signup =  () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user);

        const storageReference = storagerf(storage, 'images/' + image.name);
        console.log('processing!');
        // Upload the image to Firebase Storage
       await uploadBytes(storageReference, image).then(async(snapshot) => {
          console.log('Image uploaded successfully!', snapshot);
          console.log('processing!');
        await  getDownloadURL(snapshot.ref).then(async(downloadURL) => {
            console.log('Image available at', downloadURL);

            
            // const userId = databaserf(db, 'users/' + user.name);
            console.log('processing!');
          await  set( databaserf (db, 'users/' + user.uid), {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password, // Note: Storing passwords in plain text is not secure; use Firebase Auth instead
              imageUrl: downloadURL
            });
            alert('User signed up successfully!');

               sendEmailVerification(auth.currentUser)
            .then(() => {
              


              alert("We have sent you an email verification link.");
              // if(c){

              // }
              // ...
            });
          }).catch((error) => {
            console.error('Error getting image URL:', error);
          });

        }).catch((error) => {
          console.error('Error uploading image:', error);
        });
    
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error: " + error.message);
      });
  }

  signup(); // Call the signup function to register the user

  // Monitor auth state change
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // location.replace("login.html");
      console.log("User is available" );
    } else {
      console.log("User does not exist");
    }
  });
});
