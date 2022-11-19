import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [hexArr, setHexArr] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [message, setMessage] = useState(null);

  const randomHex = () => {
    const randomHex = Math.ceil(Math.random() * 0xffffff).toString(16);

    if (randomHex.length < 6) {
      let temporaryHex = randomHex;

      //this is lazy but quick
      while (temporaryHex.length < 6) {
        temporaryHex += "0";
      }

      return temporaryHex;
    }
    return randomHex;
  };

  const createHexArr = () => {
    let arr = [];

    for (let i = 0; i < 3; i++) {
      arr.push(randomHex());
    }

    setHexArr(arr);
  };

  const checkAnswer = val => {
    if (val === hexArr[randomIndex]) {
      setMessage("yay");
    } else {
      setMessage("nay");
    }
  };

  const boxStyles = {
    backgroundColor: "#" + hexArr[randomIndex],
    height: "300px",
    width: "300px",
  };

  useEffect(() => {
    createHexArr();
    setRandomIndex(Math.floor(Math.random() * 3));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div style={boxStyles}></div>
        <p>{message}</p>

        <div className="btnWrapper">
          <button className="btn" onClick={() => checkAnswer(hexArr[0])}>
            #{hexArr[0]}
          </button>

          <button className="btn" onClick={() => checkAnswer(hexArr[1])}>
            #{hexArr[1]}
          </button>

          <button className="btn" onClick={() => checkAnswer(hexArr[2])}>
            #{hexArr[2]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
