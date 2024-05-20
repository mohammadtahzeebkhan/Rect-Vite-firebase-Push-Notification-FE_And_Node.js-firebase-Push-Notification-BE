import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Message from "./components/Message";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);
  const { VITE_APP_VAPID_KEY } = import.meta.env;

  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();
console.log("permission",permission)
    if (permission === "granted") {
      const token = await getToken(messaging, {
        //vapidKey: "BHxca4DEpYwLirvWm13eRSqbjYmU2pcOU1FeekhtIh4yQLc1QAfJ3p9V6tlMhE5eWB0b7iskjnqrLp_lRPDvGSc",
        vapidKey:"BHwCd9yyUHTLCdq-umuPkYAuy1yaTeyvN1TxmPvRC_0jC9kIDxiRZ6Aw9gJ28Eg1YD97QUIVpR3yiaSsDU8WnSs"
      
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(messaging, (payload) => {
    console.log("incoming msg");
    toast(<Message notification={payload.notification} />);
  });

  return (
    <>
      <div>
   
      </div>
      <h1>Hey  I M TAHZEEB</h1>

      <ToastContainer />
    </>
  );
}

export default App;
