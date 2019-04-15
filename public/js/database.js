//Reference to creating, updating, & deleting users:
// https://firebase.google.com/docs/auth/admin/manage-users
//Creating users with email and password
// https://firebase.google.com/docs/auth/web/password-auth

//Initialize firebase

//Use in HTML:
//  <script src="https://www.gstatic.com/firebasejs/5.9.4/firebase.js"></script> 

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDNsKp8oHMJXUkJeRaiEiqAg0vD8nhJSfk",
    authDomain: "project2-e4863.firebaseapp.com",
    databaseURL: "https://project2-e4863.firebaseio.com",
    projectId: "project2-e4863",
    storageBucket: "project2-e4863.appspot.com",
    messagingSenderId: "889489498764"
};

firebase.initializeApp(config);

//Variable to reference database
var database = firebase.database();

//Store connections in database
var connectionsRef = database.ref("/connections");

//Location in firebase that updates with client's connection, true or false
var connectedRef = database.ref(".info/connected");

// //When client connection changes
// connectedRef.on("value", function(snap){
//     //If connected
//     if(snap.val()){
//         //Adds user to connections list
//         var con = connectionsRef.push(true);
//         //Remove user from connection when the disconnect
//         con.onDisconnect().remove();
//     }
// });

//To create new account
//Will only work with "click", not submit
$("#sign-up-btn").on("click", function(event){
    event.preventDefault();
    console.log("signupbuttonclick")

    var newEmail = $("#new-login").val();
    var newPassword = $("#new-password").val();

    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
        .then(function(user){
            console.log(user)
        })
        .catch(function(err){
            console.log(err);
        })

    // createNewUser(newEmail, newPassword)
})

$("#submit").on("click", function(event){
    console.log(event);
    event.preventDefault();

    console.log("loggingin")
    var email = $("#login").val();
    var password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){
            console.log(user)
        })
        .catch(function(err){
            console.log(err)
        })
});

firebase.auth().onAuthStateChanged(function(user){
    if (user){
        console.log(user);
    } else {
        console.log("No user!")
    }
});

// //Utilizing front end
// //Password must be at least 6 characters long
// $(".log-in").on("click", function(event){
//     event.preventDefault();

//     var email = $(".email-input").val(); 
//     var password = $(".password").val();
//     userFetchData(email);
//     userUpdate(email, password);
//     userLogin(email, password);
// })



// var userFetchData = function(){
//     //Retrieve user data using email
//     admin.auth().getUserByEmail(email).then(function(userRecord){
//         console.log("Successfully fetched user data:", userRecord.toJSON());    
//     })
//     .catch(function(error){
//         console.log("Error fetching user data: ", error);
//         //Here display a popup "No user with that email, try again"
//     });
// }

// var userLogin = function(){
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(err) {
//         // var errorCode = err.code;
//         // var errorMessage = err.message;
//         if (err) throw err;
//         console.log(`User ${email} signed in successfully.`)
//     });
// }

// //Create new user
// var createNewUser = function(){
//     admin.auth().createUser({
//         email: newEmail,
//         emailVerified: false,
//         phoneNumber: "",
//         password: newPassword,
//         displayName: "",
//         photoURL: "",
//         disabled: false
//     }).then(function(userRecord) {
//         console.log("Successfully created new user: ", userRecord.uid);
//     }).catch(function(err){
//         console.log("Error creating new user: ", err)
//     });
// }

// //Update user
// var userUpdate = function(){
//     admin.auth().updateUser({
//         email: emailInput,
//         emailVerified: false,
//         phoneNumber: "",
//         password: passwordInput,
//         displayName: "John Doe",
//         photoURL: "",
//         disabled: false
//     }).then(function(userRecord) {
//         console.log("Successfully updated new user: ", userRecord.uid);
//     }).catch(function(err){
//         console.log("Error updating new user: ", err)
//     });
// }

// //Delete user
// // admin.auth().deleteUser(uid)
// //   .then(function() {
// //     console.log('Successfully deleted user');
// //   })
// //   .catch(function(error) {
// //     console.log('Error deleting user:', error);
// //   });

