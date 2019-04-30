(function(){
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBic2sFqPFrv7UbUiTN-tjHvgQ89XVrKF4",
    authDomain: "vigilant-shell-207601.firebaseapp.com",
    databaseURL: "https://vigilant-shell-207601.firebaseio.com",
    projectId: "vigilant-shell-207601",
    storageBucket: "vigilant-shell-207601.appspot.com",
    messagingSenderId: "558155589131"
  };
  firebase.initializeApp(config);


	
	//Get Elements
	const txtEmail =document.getElementById('txtEmail');
	const txtPassword =document.getElementById('txtPassword');
	const btnLogin =document.getElementById('btnLogin');
	const btnSignUp =document.getElementById('btnSignUp');
	const btnLogout =document.getElementById('btnLogout');
	
	// Add login Event
	btnLogin.addEventListener('click', e=>{
	// Get email and password
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e=> console.log(e.message));
		});
}());