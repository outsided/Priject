import imgq from './qqq.jpg'
import imgw from './eee.jpg'
import imge from './wwww.jpg'
import imgr from './rrrr.jpg'
import imgt from './ttt.jpg'
import imgu from './uuu.jpg'
import imgi from './iii.jpg'
import style from './content.module.css'
const images = [
    {id:1, img: imgq},
    {id:1, img: imgw},
    {id:1, img: imgr},
    {id:1, img: imgt},
    {id:1, img: imge},
    {id:1, img: imgu},
    {id:1, img: imgi},
]
const Content = (props) => {
    return(
    images.map(im => <div key={im.id} className={style.card}>
        <img className={style.img} src={im.img}></img>
       800$
    </div>)
    )
}
export default Content;