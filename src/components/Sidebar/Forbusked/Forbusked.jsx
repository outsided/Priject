import { useState } from 'react';
import { PRODUCTSBASKET } from '../../Content/constant';
import styles from './styles.module.css'

const Forbasked = () => {
    const [counter, setCounter] = useState(0)
    function plus(){
        setCounter(counter +1)
    }
    function minus(){
        setCounter(counter -1)
    }
    return (
        <>
        {
        PRODUCTSBASKET.map(products => ( 
             <div className={styles.under}>
                
                <img className={styles.img} src={products.img}></img>
                <p className={styles.name}>{products.name}</p>
                
               <button className={styles.button} type="button" onClick={plus}><img className={styles.buttons} src='images/minus.jpg'></img></button>
               <p>{counter}</p>
               <button className={styles.button} type="button" onClick={minus}><img className={styles.buttons} src='images/plus.jpg'></img></button>
                  <text  className={styles.text}>{products.price}</text>
            </div>
        ))
        }
        </>
    )
}
export default Forbasked;