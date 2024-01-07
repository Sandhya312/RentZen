

import PropTypes from 'prop-types';
import './productImage.css';

const ProductImage = ({ product }) => { //product is the prop passed from the parent component
    return (
        <div className="productImage w-100">
            <img className='w-100' src={product.imageUrl} alt={product.name} />
        </div>
    );
}
ProductImage.propTypes = {
    product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired
    }).isRequired
};

export default ProductImage;