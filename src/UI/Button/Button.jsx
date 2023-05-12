import styles from './styles.module.css'


const Button = (props) => {
    return (
        <button className={styles.button} type="button" ><img className={props.styles.button} src={props.icon} alt={props.icon}></img></button>
    )
}
export default Button;

