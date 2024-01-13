


import './GuidSteps.css';
import HorizontalScroll from '../horizontalScroll/Horizontalscroll';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';
import step4 from '../../assets/step4.png';
import { useState } from 'react';

const postRentSteps = [{
    id:1,
    title:'Post what you want to rent',
    image:step1
},
{
    id:2,
    title:'Pack and keep your items ready for pick up',
    image:step2
},
{
    id:3,
    title:'We pick up, quality check, list, ship your items. You earn!',
    image:step3
},
{
    id:4,
    title:'You receive earnings directly in FreeUp wallet, UPI or Bank Account!',
    image:step4
} 

];
// const buyRentSteps = ['buyStep1','buyStep2','buyStep3'];



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
            {/* <button className='btn buy_rent_btn'
             onClick={()=>{stepsFuncton(buyRentSteps)}}
            >Buy on Rent</button> */}
             
        </div>

         <HorizontalScroll content={content} />
        

       </div>
    )
}


export default GuidSteps;