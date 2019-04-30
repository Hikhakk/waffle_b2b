firebase.auth().onIdTokenChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){

      var email_id = user.email;		
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
document.getElementById("email").value = userEmail;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function() {toggle_visibility('page_main');toggle_visibility('page_login');})   .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function logout(){
firebase.auth().signOut().then(function() {
	  var userEmail = document.getElementById("email_field").value;
console.log(userEmail);
	toggle_visibility('page_login');toggle_visibility('page_account');
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
  }

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'none')
        e.style.display = 'block';
       else
		   e.style.display = 'none';
     
    }