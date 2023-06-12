import styles from "./styles.module.css";

const Button = ({onClick, icon}) => {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      <img className={styles.button} src={icon} alt={icon} ></img>
    </button>
  );
};
export default Button;
