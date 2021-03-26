//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCsHd-D6qsKdiohUCDdjDcXehKIu0-FxBg",
      authDomain: "class-test-27275.firebaseapp.com",
      databaseURL: "https://class-test-27275-default-rtdb.firebaseio.com",
      projectId: "class-test-27275",
      storageBucket: "class-test-27275.appspot.com",
      messagingSenderId: "1018047318826",
      appId: "1:1018047318826:web:f2bccd17ca0705342eac53"
    };
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
