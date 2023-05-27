import { PRODUCTS } from "./constant";
import { useDispatch } from 'react-redux'
import { addToBasket } from "../../store/reducers/basketSlice";
import Button from "../../UI/Button";
import styles from "./styles.module.css";

const Content = () => {
  const dispatch = useDispatch();

  // 1 вариант - Если товар уже добавлен то дизейблить кнопку / т.е нельзя добавлять один товар много раз, надо сделать проверку.
  //  2 вариант - Если товар уже есть в корзине, то увеличивать его количество (quantity)
  const addToBasketHandler = (product) => {
    dispatch(addToBasket(product))
  }
  return (
    <>
      <div className={styles.cardList}>
        {PRODUCTS.map((product) => (
          <div className={styles.card} key={product.id}>
            <img className={styles.img} src={product.img} alt={product.img} />
            {/* Вместо тэга b используй strong */}
            <div className={styles.name}><b>{product.name}</b></div>
            {/*  3 раза подряд styles.price */}
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
