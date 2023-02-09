import React from "react";
import "./styles.css";

export default function App() {
  React.useEffect(() => {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);

  // const showNotification =()=>{
  //   new Notification('Hello World')
  // }
  const showNotification = () => {
    var options = {
      body: "The leader",
      icon:
        "https://avatars.githubusercontent.com/u/97792702?v=4    auto=compress&cs=tinysrgb&dpr=1&w=500",
      dir: "ltr"
    };

    notification = new Notification("Thameem ansari", options);
  };
  return (
    <div>
      <button onClick={showNotification}>Show notification</button>
    </div>
  );
}
