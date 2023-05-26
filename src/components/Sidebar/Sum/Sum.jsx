import styles from './styles.module.css'
const Sum = (props) => {
    return (
        <>
            <div className={styles.allSum}>
                <p > Sum {`${props.sum}$`}</p>
                <p> Shiping  {props.shiping}$</p>
                <p> Total {`${props.sum+props.shiping}$`}</p>
            </div>
        </>
    )
}
export default Sum;