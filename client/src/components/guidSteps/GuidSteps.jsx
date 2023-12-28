


import './GuidSteps.css';
import HorizontalScroll from '../horizontalScroll/Horizontalscroll';
import { useState } from 'react';

const postRentSteps = ['postStep1','postStep2','postStep3'];
const buyRentSteps = ['buyStep1','buyStep2','buyStep3'];



const GuidSteps = () => {  

  const [content,setContent] = useState(postRentSteps);


  // function to change content of horizontalscoll component accroding to button change
  const stepsFuncton = (steps)=>{
    console.log('clicked');
    setContent(steps);
  }

    return (
       <div className='d-flex align-items-center flex-column p-2'>

        <div className="rental_steps_btns d-flex justify-content-center  m-2 p-2">
            <button className='btn post_rent_btn'
             onClick={()=>{stepsFuncton(postRentSteps)}}
            >Post to Rent</button>
            <button className='btn buy_rent_btn'
             onClick={()=>{stepsFuncton(buyRentSteps)}}
            >Buy on Rent</button>
             
        </div>

         <HorizontalScroll content={content} />
        

       </div>
    )
}


export default GuidSteps;