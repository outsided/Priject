import style from './forbasked.module.css'
import img from './pic.jpg'
import imgg from './yyy.jpg'
const Forbasked = () => {
    return (
        <div>
            <img className={style.img} src={img}></img>
            <div className={style.text}>
                
               <h3> Price 2000$</h3>
            </div>
            <img className={style.img} src={imgg}></img>
            <div className={style.text}>
       
               <h3> Price 800$</h3>
            </div>
        </div>
    )
}
export default Forbasked;