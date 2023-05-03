import { PRODUCTS }  from './constant';

const Content = () => {
    return(
    <>
        <div className='cardList'>
        {
            PRODUCTS.map(product => (
                <div className='card' key={product.id}>
                    <img src={product.img} alt={product.img} />
                    <div>{product.name}</div>
                    <button type="button">Иконка добавить в корзину</button>
                    <span>{product.price}</span>
                </div>
            ))
        }
        </div>
    </>
    )
}
export default Content;

