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
            window.location.href = "/newUser"  
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
            window.location.href = "/test"  
        })
        .catch(function(err){
            console.log(err)
            alert("That email, password, or both don't exist. Try again.")
        })
});

$("#logout").on("click", function(event){
    event.preventDefault();
    firebase.auth().signOut()
    .then(function(user) {
        (console.log("user signed out"));
        window.location.href = "/"
    })
})

$("#confirm").on("click", function(event){
    event.preventDefault()
        window.location.href = "/confirm"
});

$("#dashboard").on("click", function(event){
    event.preventDefault()
        window.location.href = "/test"
});

var uid = [];
var currentUid = {};
var userObject = {};

firebase.auth().onAuthStateChanged(function(user){
    if (user){
        uid.push(user.uid)
        console.log(user);
        console.log(user.uid)
        currentUid = user.uid;
        userObject = user;

    } else {
        console.log("No user!")
    }
})

// Returns as string in array
var testuid = function(){
    console.log(uid);
}
setTimeout(testuid, 4000)

$('.test-btn').click(function() {
    var user = firebase.auth().currentUser;
    console.log(user.id);
})

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


// //Delete user
// // admin.auth().deleteUser(uid)
// //   .then(function() {
// //     console.log('Successfully deleted user');
// //   })
// //   .catch(function(error) {
// //     console.log('Error deleting user:', error);
// //   });

