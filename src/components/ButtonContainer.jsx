import { useEffect } from "react";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ expression, setExpression }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (/\d/.test(key)) handleButtonClick(key);
      else if (["+", "-", "*", "/"].includes(key)) handleButtonClick(key);
      else if (key === "Enter" || key === "=") handleButtonClick("=");
      else if (key === "Backspace") handleButtonClick("DEL");
      else if (key === "Escape") handleButtonClick("AC");
      else if (key === ".") handleButtonClick(".");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expression]);

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

  const buttonNames = [
    "AC",
    "(",
    ")",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "00",
    "DEL",
    "=",
  ];

  return (
    <div className={styles.buttonscontainer}>
      {buttonNames.map((btn) => (
        <button
          key={btn}
          className={`${styles.button} 
    ${btn === "=" ? styles.equal : ""} 
    ${btn === "DEL" ? styles.delete : ""} 
    ${btn === "AC" ? styles.clear : ""} 
    ${["+", "-", "*", "/", "%"].includes(btn) ? styles.operator : ""}
  `}
          onClick={() => handleButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
