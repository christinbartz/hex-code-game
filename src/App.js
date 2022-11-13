import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [hex, setHex] = useState("");

  const randomHex = () => {
    const randomHex = Math.ceil(Math.random() * 0xffffff).toString(16);

    if (randomHex.length < 6) {
      //this is lazy but quick
      return randomHex + "0";
    }
    return randomHex;
  };

  const boxStyles = {
    backgroundColor: "#" + hex,
    height: "300px",
    width: "300px",
  };

  useEffect(() => {
    setHex(randomHex());
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div style={boxStyles}></div>
        <p>{hex}</p>
        <button className="button" onClick={() => setHex(randomHex())}>
          generate new number
        </button>
      </div>
    </div>
  );
}

export default App;
