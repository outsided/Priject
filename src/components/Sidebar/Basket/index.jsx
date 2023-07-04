import styles from "./styles.module.css";
import {useSelector, useDispatch} from 'react-redux';
import {removeFromBasket,changeQuantity} from '../../../store/reducers/basketSlice'


const Basket = (props) => {
  const { products } = useSelector((state) => state.basket);

  const dispatch = useDispatch()

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
                <button className={styles.button} type="button" data-product-id={product.id} data-action='minus' onClick={() => dispatch(changeQuantity({...product,quantity:product.quantity -1}))}>
                  <img
                    className={styles.iconPlus}
                    src="images/minus.jpg"
                    alt="Добавить товар"
                  ></img>
                </button>
                <span>{product.quantity}</span>
                <button className={styles.button} type="button" data-product-id={product.id} data-action='plus' onClick={() => dispatch(changeQuantity({...product,quantity:product.quantity +1}))}>
                  <img
                    className={styles.iconMinus}
                    src="images/plus.jpg"
                    alt="Удалить товар"
                  ></img>
                </button>
                <span className={styles.price}>
                  $ {product.price * product.quantity}
                </span>
              </div>
                <button className={`${styles.button} ${styles.deleteButton}`} data-product-id={product.id} onClick={() => dispatch(removeFromBasket(product.id))}>
                  <img src="icons/delete-icon.svg" alt="Удалить товар" />
                  </button>
            </div>
          </div>
        ))
      )}
 
    </>
  );
};
export default Basket;
