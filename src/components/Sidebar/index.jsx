import { useState } from 'react'
import { PRODUCTSBASKET } from '../Content/constant'
import Basket from './Basket'
import styles from './styles.module.css';
import Sum from './Sum/Sum'

const shiping = 50;

const Sidebar = () => {
  const [products, setProducts] = useState(PRODUCTSBASKET);

   function productCounterHandler(e,action)  {

     let id = Number(e.currentTarget.dataset.productId);
    
      setProducts(prev => {
        return prev.map(product => {
            if(product.id === id) {
                return {
                    ...product,
                    quantity: action === "plus"? product.quantity + 1: product.quantity-1
                }
            } 
            return product
        })
     })
    }
   
   
   function deleteButton(e){
     const id = Number(e.currentTarget.dataset.productId);
     setProducts(products.filter(a => a.id !== id))
   } 

  const sum = products.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  
return (
        <div className={styles.forBasket} >
            <div className={styles.korzina}>
                <h2 className={styles.text}> My Basket </h2>
                <Basket  products={products} productCounterHandler={productCounterHandler}  deleteButton={deleteButton} />
            </div>
            <div> 
              <Sum sum={sum} shiping={shiping}/>
            </div>
        </div>
    )
}
export default Sidebar;
