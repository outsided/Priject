import {useSelector} from "react-redux"
import Basket from "./Basket";
import styles from "./styles.module.css";
import Total from "./Total";

const shiping = 50;

const Sidebar = () => {
  const {products} = useSelector((state) => state.basket); 
  const sum = products.reduce(
    (acc, item) => (acc += item.price * item.quantity),0
  );

  return (
    <div className={styles.basketContainer}>
      <div className={styles.basket}>
        <h2 className={styles.title}> My Basket </h2>
        <Basket
          products={products}
        />
      </div>
      <div>
        <Total sum={sum} shiping={shiping} />
      </div>
    </div>
  );
};
export default Sidebar;
