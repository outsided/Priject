import { useState } from "react";
import { PRODUCTSBASKET } from "../../Content/constant";
import styles from "./styles.module.css";

const Forbasked = () => {

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
  
  function deliteButton(e){
    const id = Number(e.currentTarget.dataset.productId);
    console.log(id)
    setProducts(prev => {
      if(prev[0].id === id){
        return prev.splice(1,1)
        
      }else if(prev[1].id === id){
        return prev.splice(0,1)
      }
    }
    )
  }

  return (
    <>
      {products.length === 0 ? (
        <div>Basket is empty</div>
      ) : (
        products.map((product) => (
          <div key={`product-id-${product.id}`} className={styles.basketItem}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={product.img}
                alt="Картинка товара"
              ></img>
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.title}>{product.name}</p>
              <div className={styles.buttonsContainer}>
                <button className={styles.button} type="button" data-product-id={product.id} onClick={minus}>
                  <img
                    className={styles.iconPlus}
                    src="images/minus.jpg"
                    alt="Добавить товар"
                  ></img>
                </button>
                <span>{product.quantity}</span>
                <button className={styles.button} type="button" data-product-id={product.id} onClick={plus}>
                  <img
                    className={styles.iconMinus}
                    src="images/plus.jpg"
                    alt="Удалить товар"
                  ></img>
                </button>
                <span className={styles.price}>$ {product.price}</span>
              </div>
                <button className={`${styles.button} ${styles.deleteButton}`} data-product-id={product.id} onClick={deliteButton}>
                  <img src="icons/delete-icon.svg" alt="Удалить товар" />
                  </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default Forbasked;
