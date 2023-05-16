import style from './sidebar.module.css'
import { PRODUCTSBASKET } from '../Content/constant'
import Forbasked from './Forbusked/Forbusked'
const Sidebar = (props) => {
    return (
        <div className={style.Sid}>
            <div className={style.korzina}>
                <h2 className={style.text}> My Basket </h2>
                <Forbasked />
            </div>
            <div>
               <h2> Subtotal </h2>
               <h2> Shiping 50$</h2>
               <h3> Total 2800$</h3>
            </div>
        </div>
    )
}
export default Sidebar;