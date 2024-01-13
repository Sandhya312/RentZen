
import './Footer.css';

const Footer = () => {  

    return (
  

<footer className="text-center footer text-center  w-100">
  <div className="container p-4">
    
      <div className="row  text-md-start mt-5">
        
        <div className="col-md-4 ">
          <h4 className="pb-3">Rent<span className="Analyst">Zen </span></h4>
          
          <p className="copy-right"> Copyright © 2008-2019 RentZen Corporation. All Rights Reserved.</p>
        </div>
      
        <div className="col-md-3">
         <h5 className="pb-3">Rent</h5>
          <ul className="list-style ps-0 ">
            <li className="pb-3">Men tshirt</li>
            <li className="pb-3">Women Tshirt  </li>
            <li className="pb-3">Women occational dress</li>
            <li className="pb-3">Team tshirt</li>
            <li className="pb-3">Accessories</li>
           
          </ul>
        </div>
        
          
        <div className="col-md-3 ">
         <h5 className="pb-3">Buy on Rent </h5>
          <ul className="list-style ps-0">
          <li className="pb-3">Men tshirt</li>
            <li className="pb-3">Women Tshirt  </li>
            <li className="pb-3">Women occational dress</li>
            <li className="pb-3">Team tshirt</li>
            <li className="pb-3">Accessories</li>
          </ul>
        </div>
       
        <div className="col-md-2 ">
         <h5 className="pb-3"> Other </h5>
          <ul className="list-style ps-0">
            <li className="pb-3">Privacy Policy</li>
            <li className="pb-3">Terms of Use</li>
            <li className="pb-3">Features</li>
            <li className="pb-3">Success Stories</li>
            <li className="pb-3">Contact Us</li>
          </ul>
        </div>
      </div>
    
  </div>
</footer>
    )
}


export default Footer;