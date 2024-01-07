
import { useSelector } from 'react-redux';
import ProductCard from '../../productCard/ProductCard';

const RecommendedProducts = () => {

    const products = useSelector(state => state.productsdb).products;
 
    

    return (
        <div className="recommended-products  p-2 " >
            <div className="recommended-products__title m-2 ">
                <h2>You may also like these</h2>
            </div>
            <div className="recommended-products__container d-flex align-content-between justify-content-around flex-wrap" style={{
            height: '954px',
        }}>
                {
                    products.map((product, i) => (
                        i < 4 && (<ProductCard product={product} key={product.id} />)
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendedProducts;