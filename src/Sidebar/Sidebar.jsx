import style from './sidebar.module.css'
import Forbasked from './Forbusked/Forbusked'
const Sidebar = (props) => {
    return (
        <div className={style.Sid}>
            <div className={style.korzina}>
                <h2 className={style.text}> My Busket </h2>
                <Forbasked />
            </div>
            <div>
               <h2> Subtotal 2000$</h2>
               <h2> Shiping 800$</h2>
               <h3> Total 2800$</h3>
            </div>
        </div>
    )
}
export default Sidebar;