// Your web app's Firebase configuration (ENTER YOUR FIREBASE CONFIGURATION DETAILS)
var firebaseConfig = {
    apiKey: "AIzaSyCG_92OLetfydA6KDg2kwweJF4bf4hG7Jw",
    authDomain: "joxiplayer-site.firebaseapp.com",
    databaseURL: "https://joxiplayer-site-default-rtdb.firebaseio.com",
    projectId: "joxiplayer-site",
    storageBucket: "joxiplayer-site.appspot.com",
    messagingSenderId: "288570493379",
    appId: "1:288570493379:web:8c1168c876624cc6a95576",
    measurementId: "G-4J03BRQ7Y1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var form = document.querySelector('#loginForm');
    var r_form = document.querySelector('#registerForm');
    var reset_form = document.querySelector('#resetForm');
    var message = document.querySelector('#messageDiv');
    var message_value = document.querySelector('.message');
    var sign_out = document.querySelector("#signOut");
    
    // check if user is logged in or not
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if(window.location.pathname != '/https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html'){
                window.location = 'https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html';
            }
        } else {
            if(window.location.pathname === '/https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html'){
                window.location = 'https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html';
            }
        }
    });
    
    // user login
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = form.email.value;
            let password = form.password.value;
        
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.location = 'https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html';
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function(){
                    message.style.display = 'none';
                }, 3000);
            });
        })
    }
    
    // user register
    if(r_form){
        r_form.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = r_form.email.value;
            let password = r_form.password.value;
        
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.location = 'https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html';
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function(){
                    message.style.display = 'none';
                }, 3000);
            });
        })
    }
    
    // password reset 
    if(reset_form){
        reset_form.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = reset_form.email.value;
        
            firebase.auth().sendPasswordResetEmail(email)
            .then((userCredential) => {
                message.style.display = 'block';
                message_value.innerText = 'Email has been send!';
                
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function(){
                    message.style.display = 'none';
                }, 3000);
            });
        })
    }
    
    var provider = new firebase.auth.GoogleAuthProvider();
    var login = document.querySelector('.login');
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // console.log(user);
        window.location = 'https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html';
      }
    });
    
    login.addEventListener('click', (e) => {
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          window.location = 'https://joxiplayer.github.io/music-aplikasi-player/setting/profile/index.html'
        }).catch((error) => {
          console.log(error);
        });
    })
    
    // sign out  
    if(sign_out){
        sign_out.addEventListener('click', function(e) {
            firebase.auth().signOut().then(() => {
                window.location = 'index.html';
            }).catch((error) => {
            // An error happened.
            });
        })
    }