import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [expression, setExpression] = useState("");
  const handleButtonClick = (value) => {
    if (value === "AC") setExpression("");
    else if (value === "DEL") setExpression((prev) => prev.slice(0, -1));
    else if (value === "=") {
      try {
        const result = Function('"use strict";return (' + expression + ")")();
        setExpression(result.toString());
      } catch {
        setExpression("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <h2> React Calculator</h2>
        <Display expression={expression} />
        <ButtonContainer
          expression={expression}
          setExpression={setExpression}
        />
      </div>
    </>
  );
}

export default App;
