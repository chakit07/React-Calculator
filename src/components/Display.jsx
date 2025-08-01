import styles from "./Display.module.css";

const Display = ({ expression, isError, isResult }) => {
  let displayClass = styles.display;

  if (isError) displayClass += ` ${styles.error}`;
  else if (isResult) displayClass += ` ${styles.success}`;

  return (
    <div className={styles.displayWrapper}>
      <input className={displayClass} type="text" value={expression} readOnly />
    </div>
  );
};

export default Display;
