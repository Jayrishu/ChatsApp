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
   function addRoom(){
       roomName = document.getElementById("roomName").value;
       firebase.database().ref("/").child(roomName).update({
           purpose:"addRoom"
       });
   }