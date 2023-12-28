

import { useState } from 'react';

import './HomeProduct.css';

import bed from '../../assets/bed.jpg';
// import chair from '../../assets/images/chair.jpg';
// import cooler from '../../assets/images/cooler.jpg';
// import laptop from '../../assets/images/laptop.jpg';
// import table from '../../assets/images/table.jpg';

const productsItems= [
    {
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "bed",
    
},
{
    id:2,
    name:'chair',
    Rent: 10000,
    image: "chair",
    
},
{
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "table",
    
},
{
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "cooler",
    
},
{
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "laptop",
    
},
{
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "laptop",
    
},
{
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "laptop",
    
},
{
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "laptop",
    
},

{
    id:1,
    name:'Bed',
    Rent: 10000,
    image: "laptop",
    
}
]

const HomeProducts = () => {  

    // eslint-disable-next-line no-unused-vars
    const [Products,setProducts] = useState(productsItems);

    return (
       <div >
           <h3>You&apos;ll love to take these home</h3>

           <div className='home_product_div d-flex row horizontal-scrollable'>

       
           {
            Products.map((item,index)=>{
                return (
                    <div className="card m-2 " key={index} style={{"width": "18rem"}}>
                          <img src={bed} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{item.name}</h6>
                      <p className="card-text">{item.Rent}</p>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                )
            })
           }
               </div>
       </div>
    )
}


export default HomeProducts;