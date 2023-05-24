import style from './sidebar.module.css'
import { useState } from 'react'
import { PRODUCTSBASKET } from '../Content/constant'
import Forbasked from './Forbusked/Forbusked'
const shiping = 50;
const Sidebar = (props) => {
   const [products, setProducts] = useState(PRODUCTSBASKET);


   function plus(e) {
      const id = Number(e.currentTarget.dataset.productId);
      setProducts(prev => {
         return prev.map(product => {
             if(product.id === id) {
                 return {
                     ...product,
                     price: product.price + product.nominal,
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
             if(product.quantity === 0){
               return {
                 ...product
               }
             }
                return {
                    ...product,
                    price: product.price - product.nominal,
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

   function sum() {
        let a = 0
        for(let summa of products){
            if(summa.price === 50){
                return summa.price = 0
            }else if(summa.price >= 50){
                a += summa.price
            }
        }
        return a
    }

   
return (
        <div className={style.Sid}>
            <div className={style.korzina}>
                <h2 className={style.text}> My Basket </h2>
                <Forbasked  products={products} plus={plus}  deleteButton={deleteButton} minus={minus}/>
            </div>
            <div> 
               <h2> Sum {`${sum()}$`}</h2>
               <h2> Shiping  {shiping}$</h2>
               <h3> Total {`${sum()+shiping}$`}</h3>
            </div>
        </div>
    )
}
export default Sidebar;