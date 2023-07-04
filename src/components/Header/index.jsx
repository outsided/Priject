import styles from "./styles.module.css";

import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className={styles.header}>
      <img className={styles.img} src="images/1.png" alt="1" />

     <Link to='/Basket'>
      <button className={styles.buttonbasket}> <img className={styles.busket} src="images/basket.jpg" alt="busket" /></button>\
    </Link>

     </div>

    </>
    
  );
};
export default Header;
