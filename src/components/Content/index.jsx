import { PRODUCTS } from "./constant";
import { useDispatch } from 'react-redux'
import { addToBasket } from "../../store/reducers/basketSlice";
import Button from "../../UI/Button";
import styles from "./styles.module.css";

const Content = () => {
  const dispatch = useDispatch();

  const addToBasketHandler = (product) => {
    dispatch(addToBasket(product))
  }
  
  return (
    <>
      <div className={styles.cardList}>
        {PRODUCTS.map((product) => (
          <div className={styles.card} key={product.id}>
            <img className={styles.img} src={product.img} alt={product.img} />
            <div className={styles.name}><strong>{product.name}</strong></div>
            <div className={styles.price}>
              <Button icon="icons/basket-icon.svg" onClick={() => addToBasketHandler(product)} />
              <span className={styles.price}>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Content;
