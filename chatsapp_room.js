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
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
              purpose : "Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "chatsapp_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       available_room_names = "<div class='room_name' id='"+Room_names+"' onclick='redirect_to_room(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += available_room_names;
      //End code
      });});}
getData();
function redirect_to_room(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chatsapp_page.html"
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}