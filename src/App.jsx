import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalval(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <h2> React Calculator</h2>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
