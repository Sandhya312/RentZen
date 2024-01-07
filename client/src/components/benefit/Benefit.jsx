

import './Benefit.css';

const Benefit = () => {  
    // padding: 2%;
    // width: 80%;
    // height: 10rem;
    // align-items: center;
    return (
       <div className="d-flex flex-column align-items-center p-1 m-1">
           <h1>Buy Trendy, Like-New Items</h1>
           <small>Rent from our community of 3L trusted women</small>

            <div className="d-flex justify-content-evenly w-100 align-items-center p-2" style={{
                height: '10rem'
            }}>
                <div className="lowestPrice_div d-flex aligns-align-items-center justify-content-between">
                    <i className='bx bx-money'></i>
                    <p>Lowest Price</p>
                </div>

                <div className="doorstep_delivery_div ">
                <i className='bx bxs-home-heart'></i>
                    <p>Doorstep Delivery</p>
                </div>

                <div className="payment_protected_div">
                <i className='bx bxs-check-shield'></i>
                    <p>Payment Protected</p>
                </div>
            </div>

       </div>


    )
}


export default Benefit;