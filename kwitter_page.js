var firebaseConfig = {
      apiKey: "AIzaSyBPZaLTliatKAD4bK3xqr0k3t_4Ljob7AU",
      authDomain: "kwitter-d2e8d.firebaseapp.com",
      databaseURL: "https://kwitter-d2e8d-default-rtdb.firebaseio.com",
      projectId: "kwitter-d2e8d",
      storageBucket: "kwitter-d2e8d.appspot.com",
      messagingSenderId: "171116088421",
      appId: "1:171116088421:web:4de1728bf5f7c0033d4a8c"
    };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function Send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code

//End code
      } });  }); }
getData();





function LogOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}