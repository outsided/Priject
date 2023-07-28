import styles from "./styles.module.css";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { countBasked } from "../../store/reducers/basketSlice";


const Header = () => {
  const {products} = useSelector(state => state.basket)

  return (
    <>
    <div className={styles.header}>
      <Link to='/'>
      <button className={styles.buttonShop}><img className={styles.img} src="images/1.png" alt="1" /></button>
      </Link>
     <Link to='/Basket'>
      <button className={styles.buttonbasket}><div className={styles.circleBasket}>{products.length}</div><img className={styles.busketImg} src="images/basket.jpg" alt="basket" /></button>
     </Link>
    </div>
    </>
    
  );
};
export default Header;
