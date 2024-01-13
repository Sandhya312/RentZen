import PropTypes from "prop-types";

import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, price, image } = product;

  return (
    <div
      className="card product_card"
      style={{
        width: "20rem",
      }}
    >
        <div className="cat-tag-main" style={{
            color:' rgb(11, 198, 160)'
        }}><p>Best Seller</p></div>
      <img src={image} className="product_card_img card-img-top m-auto" alt="..." />
      <div className="card-body">
        <h5 className="card-title product-card__header">{title}</h5>
      </div>

      <div className="d-flex justify-content-between m-2">
        <p>₹{price}</p>
        <p>4-6 days</p>
      </div>

      <div className="Btn__quick-view">
        <Link to={`../products/${product.id}`}>
        <button>
          Quick View
        </button>
        </Link>
        </div>
      
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
