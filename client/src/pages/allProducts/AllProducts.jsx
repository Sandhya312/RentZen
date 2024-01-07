
// import  {useEffect} from 'react';
import { useSelector } from 'react-redux';
// import { fetchProducts } from '../../components/features/products/productSlice';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import './AllProducts.css';

const AllProducts = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // },[dispatch]);

    // dispatch(fetchProducts());
    
    const products = useSelector(state => state.productsdb).products;

    console.log( products);

   

    return (
        <div className='' 
         style={{
            padding:'3rem 5rem'
         }}
        >
            
            <Filter />
           
           <div className='card_conatainer  bg-light d-grid '>
           {
             products.map((product,i) => {
                return (
                <ProductCard key={i} product={product} />
                )

            })
        }
           </div>
        </div>
    )   
}

export default AllProducts;