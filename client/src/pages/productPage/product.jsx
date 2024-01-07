

import './product.css';
import ProductImage from '../../components/ProductComponent/imageSection/ProductImage';
import ProductDetails from '../../components/ProductComponent/productDesc/ProductDetails';
import RecommendedProducts from '../../components/ProductComponent/recommendedproducts/RecommendedProducts';
import Faq from '../../components/ProductComponent/FAQ/Faq';
import bed from '../../assets/bed.jpg';
// import sofa from '../../assets/sofa.jpeg';

function Product() {

    let product = [{
        "name": "New Miller Engineered Wood Non Storage Queen Bed",
        "imageUrl": bed,
        "category": "furniture",
        "desc": {
            "featureAndSpec": ["nice product ", "flexible", "strong"],
            "sizeAndDimensions": "5x5x9",
            "color": "black",
            "material": "gold"
        },
        "tenureDuration": {
            "minDuration": "24 hours",
            "maxDuration": "3 months"
        },
        "ratePerHour": 487
    }
    ];

    return (
        <div className="product">

            <div className="container-lg w-100 product-container d-grid">
                <div className="left w-100">
                    <ProductImage product={product[0]} />
                    <RecommendedProducts />
                </div>
                <div className="right w-100">
                    <ProductDetails product={product[0]} />
                </div>
            </div>



            <Faq />

        </div>
    );
}

export default Product;
