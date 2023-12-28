
// import React from 'react';
import './SwaperSlider.css';
import img from "../../assets/img.png";  
import img2 from "../../assets/img2.png";    
import img3 from "../../assets/img3.png";    


const SwaperSlider = () => {
    return (
       <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"
        >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </div>
    );
};

export default SwaperSlider;
