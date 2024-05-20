import { initializeApp } from "firebase/app";

import { getMessaging } from "firebase/messaging";

//Firebase Config values imported from .env file
/* const firebaseConfig = {
  apiKey: "AIzaSyD__gAD9BNfr1Nc2-z37Izr_7ckHe6mrec",
  authDomain: "hackathon2021-4eef5.firebaseapp.com",
  databaseURL: "https://hackathon2021-4eef5-default-rtdb.firebaseio.com",
  projectId: "hackathon2021-4eef5",
  storageBucket: "hackathon2021-4eef5.appspot.com",
  messagingSenderId: "918863596011",
  appId: "1:918863596011:web:17a9331a7122e204d7f1ae",
  measurementId: "G-38EVVJS5DN"
}; */

///Rutuja

const firebaseConfig = {

  apiKey: "AIzaSyDZLoFJMm1uaM-tGCPzUem_qkrscqfsjcs",

  authDomain: "web-react-b81e5.firebaseapp.com",

  projectId: "web-react-b81e5",

  storageBucket: "web-react-b81e5.appspot.com",

  messagingSenderId: "927656681341",

  appId: "1:927656681341:web:f03fbeba632add0691b614",

  measurementId: "G-2LGZSZSVXT"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);
