importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// "Default" Firebase configuration (prevents errors)
const defaultConfig = {
  apiKey: true,
  projectId: true,
  messagingSenderId: true,
  appId: true,
};

/* const firebaseConfig = {
    apiKey: "AIzaSyD__gAD9BNfr1Nc2-z37Izr_7ckHe6mrec",
    authDomain: "hackathon2021-4eef5.firebaseapp.com",
    databaseURL: "https://hackathon2021-4eef5-default-rtdb.firebaseio.com",
    projectId: "hackathon2021-4eef5",
    storageBucket: "hackathon2021-4eef5.appspot.com",
    messagingSenderId: "918863596011",
    appId: "1:918863596011:web:17a9331a7122e204d7f1ae",
    measurementId: "G-38EVVJS5DN"
  }; 
  firebase.initializeApp(firebaseConfig); */

// Initialize Firebase app
firebase.initializeApp(defaultConfig);
const messaging = firebase.messaging();

//Listens for background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  //customise notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icon.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
