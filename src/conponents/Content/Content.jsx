import { PRODUCTS }  from './constant';
import Button from './Button/Button'
import style from './content.module.css';

const Content = () => {
    return(
    <>
        <div className={style.cardList}>
        {
            PRODUCTS.map(product => (
                <div className={style.card} key={product.id}>
                    <img className={style.img} src={product.img} alt={product.img} />
                    <div>{product.name}</div>
                    <Button style={style} Basket={product.Basket}/>
                    <span>{product.price}</span>
                </div>
            ))
        }
        </div>
    </>
    )
}
export default Content;

