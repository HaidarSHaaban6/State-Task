import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  const [popUpStatus, setPopUpStatus] = useState(true);
  const [popUpContent, setPopUpContent] = useState("");
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    setPopUpContent("YOUR WILCOME");
    setTimeout(() => {
      setPopUpStatus(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (count == 10 || count == 100 || count == 1000) {
      setPopUpStatus(true);
      setPopUpContent(count);
      setBgColor("#0277bd");
      setTimeout(() => {
        setPopUpStatus(false);
      }, 3000);
    } else {
      setBgColor("white");
    }
  }, [count]);

  function handleDECButton() {
    if (count <= 10) {
      setCount(count - 1);
    } else if (count <= 100) {
      setCount(count - 10);
    } else if (count <= 1000) {
      setCount(count - 100);
    }

    if (count === 1) {
      setStatus(false);
    }
  }

  function handleINCButton() {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100) {
      setCount(count + 10);
    } else if (count < 1000) {
      setCount(count + 100);
    }

    if (count === 900) {
      setStatus(true);
    }
  }

  return (
    <div className="main" style={{ background: bgColor }}>
      <p className="content">{count}</p>

      <button className="INC_btn" onClick={handleINCButton}>
        INCREASE
      </button>
      <button
        className={status ? "DEC_btn" : "d_none"}
        onClick={handleDECButton}
      >
        DECREASE
      </button>

      <div className={popUpStatus ? "POP_UP" : "POP_UP translate"}>
        <p>{popUpContent}</p>
      </div>
    </div>
  );
}

export default App;
