const firebaseConfig = {
    apiKey: "AIzaSyCECSGMeuwSTBlGpn-btG5TH1HhHtfSvpg",
    authDomain: "count-down-6bc83.firebaseapp.com",
    databaseURL: "https://count-down-6bc83-default-rtdb.firebaseio.com",
    projectId: "count-down-6bc83",
    storageBucket: "count-down-6bc83.appspot.com",
    messagingSenderId: "157471008580",
    appId: "1:157471008580:web:33544c100345b642091911"
  };

  firebase.initializeApp(firebaseConfig)

  let myDataBase = firebase.database();


  let count = 0;

  let counterBranch = myDataBase.ref("/count")


  document.getElementById('clickBtn').addEventListener("click", function() {
      count++;

      counterBranch.set({counter: count})

      console.log(count)
  })


