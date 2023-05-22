import { useState } from "react";
import { PRODUCTSBASKET } from "../Content/constant";
import Basket from "./Basket";
import styles from "./styles.module.css";

const shiping = 50;

const Sidebar = () => {
  const [products, setProducts] = useState(PRODUCTSBASKET);

  //    У тебя в этих функциях (plus, minus) код повторяется, подумай как его улучшить. Почитай про DRY что такое.
  // Можно использовать еще датаатрибут один чтобы улучшить
  function plus(e) {
    const id = Number(e.currentTarget.dataset.productId);
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    });
  }

  function minus(e) {
    const id = Number(e.currentTarget.dataset.productId);
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          if (product.quantity === 1) {
            return {
              ...product,
            };
          }
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    });
  }

  function deleteButton(e) {
    const id = Number(e.currentTarget.dataset.productId);
    /*  Привыкай имена переменным давать адекватные, обрати внимание на аргумент в колбэке - setProducts(products.filter((product) => product.id !== id)) */
    setProducts(products.filter((a) => a.id !== id));
  }

  const sum = products.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    // имена классов надо писать кеймлкейсом, и что такое sid ?
    <div className={styles.Sid}>
      {/* styles.basket Переименуй */}
      <div className={styles.korzina}>
        <h2 className={styles.text}> My Basket </h2>
        <Basket
          products={products}
          plus={plus}
          deleteButton={deleteButton}
          minus={minus}
        />
      </div>
      <div>
        {/* Подумай как этот блок лучше сверстать, зачем тебе 3 заголовка подряд */}
        <h2> Sum {`${sum}$`}</h2>
        <h2> Shiping {shiping}$</h2>
        <h3> Total {`${sum + shiping}$`}</h3>
      </div>
    </div>
  );
};
export default Sidebar;
