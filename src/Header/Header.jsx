import img from '../dasdas.png'
import style from './header.module.css'
const Header =(props) =>{
    return (
        <div>
            <img className={style.img} src={img}></img>
        </div>
    )
}
export default Header;