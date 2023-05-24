import styles from "./styles.module.css";

const Forbasked = (props) => {
  return (
    <>
      {props.products.length === 0 ? (
        <div>Basket is empty</div>
      ) : (
        props.products.map((product) => (
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
                <button className={styles.button} type="button" data-product-id={product.id} onClick={props.minus}>
                  <img
                    className={styles.iconPlus}
                    src="images/minus.jpg"
                    alt="Добавить товар"
                  ></img>
                </button>
                <span>{product.quantity}</span>
                <button className={styles.button} type="button" data-product-id={product.id} onClick={props.plus}>
                  <img
                    className={styles.iconMinus}
                    src="images/plus.jpg"
                    alt="Удалить товар"
                  ></img> 
                </button>
                <span className={styles.price}>$ {product.price}</span>
              </div>
                <button className={`${styles.button} ${styles.deleteButton}`} data-product-id={product.id} onClick={props.deleteButton}>
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
