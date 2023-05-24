import { useState } from 'react'
import { PRODUCTSBASKET } from '../Content/constant'
import Basket from './Basket'
import styles from './styles.module.css';

const shiping = 50;

const Sidebar = () => {
   const [products, setProducts] = useState(PRODUCTSBASKET);


   function plus(e) {
      const id = Number(e.currentTarget.dataset.productId);
      setProducts(prev => {
         return prev.map(product => {
             if(product.id === id) {
                 return {
                     ...product,
                     quantity: product.quantity + 1
                 }
             }
             return product
         })
      })
   }

   function minus(e) {
     const id = Number(e.currentTarget.dataset.productId);
     setProducts(prev => {
        return prev.map(product => {
            if(product.id === id) {
             if(product.quantity === 1){
               return {
                 ...product
               }
             }
                return {
                    ...product,
                    quantity: product.quantity - 1
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

    const sum = products.reduce((acc, item ) => acc+=item.price*item.quantity, 0)

   
return (
        <div className={styles.Sid}>
            <div className={styles.korzina}>
                <h2 className={styles.text}> My Basket </h2>
                <Basket  products={products} plus={plus}  deleteButton={deleteButton} minus={minus}/>
            </div>
            <div> 
               <h2> Sum {`${sum}$`}</h2>
               <h2> Shiping  {shiping}$</h2>
               <h3> Total {`${sum+shiping}$`}</h3>
            </div>
        </div>
    )
}
export default Sidebar;