
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsHd-D6qsKdiohUCDdjDcXehKIu0-FxBg",
    authDomain: "class-test-27275.firebaseapp.com",
    databaseURL: "https://class-test-27275-default-rtdb.firebaseio.com",
    projectId: "class-test-27275",
    storageBucket: "class-test-27275.appspot.com",
    messagingSenderId: "1018047318826",
    appId: "1:1018047318826:web:f2bccd17ca0705342eac53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
//part1//
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//updates the html element//
//end part1//

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"   
  });
  localStorage.setItem("room_name" , room_name);
  window.location ="kwitter_page.html"
}


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div> <hr>";
      function redirectToRoom_name(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";

      }
      function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "kwitter.html";
        
      }
      function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
          name : user_name , 
            message : msg , 
           like  : 0 
           //adds message to selected room  
         });
         document.getElementById("msg").value =  "";
      
      }   
      //End code
       });});}
getData(); 


