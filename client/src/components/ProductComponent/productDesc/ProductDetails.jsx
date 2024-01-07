
import PropTypes from 'prop-types';
import './productDetails.css';


const ProductDetails = ({ product }) => {       
    return (
        <div className="productDetails p-3">
            <h4>{product.name}</h4>
            <div className="product_variants d-flex ">
              <div className="product_color product_clr_mat_box">
                <p><span>Color:</span> {product.desc.color} </p>
                <div className="color_box">
                <span
                     style={{backgroundColor:product.desc.color}}
                    ></span>
                    <p> {product.desc.color}</p>
                </div>
              </div>

              <div className="product_material product_clr_mat_box">
              <p><span>Material:</span> {product.desc.material} </p>
                <div className="color_box">
               
                    <p> {product.desc.material}</p>
                </div>
              </div>
            </div>

            <div className="tenure_body">
            
              <div className="tenure_slider">
             <div className="tenure_heading d-flex align-items-center">
             <p htmlFor="customRange2" className="form-label">Choose Tenure</p>
              <i className='bx bxs-info-circle'></i>
             </div>
<input type="range" className="form-range form-slider" min="0" max="5" step="0.5" id="customRange2" />
    
              </div>

              <div className="tenure_rate_deposite">

                <div className="tenure_rate">
                <p>₹ {product.ratePerHour} <span>/ hour</span> </p>
                <small>hourly rent</small>
                </div>

                <div className="tenure_deposite">
                <p>₹ {product.ratePerHour} </p>
                <small>Refundable Deposite</small>
                </div>

              </div>

              <div className="rent_features">
             <div className="feature_free_relocation">
             <i className='bx bxs-check-circle'></i> <p>Free Relocation</p>
             
             </div>
             <div className="feature_refundable">
              <i className='bx bxs-check-circle'></i> <p>Free Delievery</p>

             </div>
              </div>

            </div>

            <div className="product_rent_btn">
                <button className="rent_btn">
                <i className='bx bxs-cart' ></i>   Click here
                </button>

                <small><i className='bx bxs-truck' ></i>Deleivery in 3-4 days</small>
            </div>

            <div className="product_coupon">
              <p className='coupon_heading mb-2'>Special Offers</p>
              <div className="coupon_body">
                <select className="form-select" aria-label="Default select example">
  <option selected>Unlock the offers</option>
  <option value="1"><p>Use Code RENTZEN10 Get 10% off</p></option>
  <option value="2"><p>Use Code RENTZEN20 Get 20% off</p></option>
  <option value="3"><p>Use Code RENTZEN30 Get 30% off</p></option>
</select>
               </div>
            </div>

            <div className="product_features">
                 <div className="features_heading">
                  <h3>Product Details</h3>
                  <p>Know more about the product below</p>
                 </div>
                 <div className="product-varient__details">
                  
                   <div>
                    <div className="product-varient__details__heading">
                      <i className='bx bxs-right-arrow'></i>
                       <h4>Features & Specs</h4>
                    </div>
                    
                    <div className="features1">
                     
                      <ul>
                        <li>Capacity/Size : 5.8 to 6.5</li>
                        <li>Brand: Haier/Whirlpool or Equivalent</li>
                        <li>Sleek, compact design</li>
                        <li>Multiple wash modes</li>
                      </ul>
                    </div>
                   </div>

                   <div>
                      <div className="product-varient__details__heading">
                      <i className='bx bxs-right-arrow'></i>
                        <h4>Size and Dimension</h4>
                      </div>
                      
                       <div className="features2">
                      
                         <p>24&quot;L x 23&quot;B x 39&quot;H</p>
                       </div>
                   </div>

                   
                   <div>
                        <div className="product-varient__details__heading">
                      <i className='bx bxs-right-arrow'></i>
                         <h4>Safety and Usage</h4>
                      </div>
                        <div className="features3">
                       
                        <ul>
                          <li>Do not overload the washing machine</li>
                          <li>Ensure to clean inside the drum to avoid damage</li>
                        </ul>
                       </div>
                   </div>
                 </div>
            </div>

        </div>
    );
}

ProductDetails.propTypes = {    
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.object.isRequired,
        ratePerHour: PropTypes.number.isRequired
    }).isRequired
};

export default ProductDetails;