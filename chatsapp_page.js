//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB7KSNmbdYNEkPyn-4ViIdpBXBi7WWXvMM",
      authDomain: "chatsapp-5dfcd.firebaseapp.com",
      databaseURL: "https://chatsapp-5dfcd-default-rtdb.firebaseio.com",
      projectId: "chatsapp-5dfcd",
      storageBucket: "chatsapp-5dfcd.appspot.com",
      messagingSenderId: "709345115249",
      appId: "1:709345115249:web:d50617641d12cb0a8b2fd0"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");
     function send(){
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
           });
           document.getElementById("msg").value = "";
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}