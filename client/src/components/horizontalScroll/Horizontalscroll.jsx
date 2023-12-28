import PropTypes from 'prop-types';

// ...


import './HorizontalScroll.css';

const HorizontalScroll = (props) => {  

     
    console.log(props.content);
    return (
        <div className="container horizontal-scrollable">
    
        <div className="row text-center"> 
           {
            props.content.map((item,index)=>{
                return (
                    <div className='col-xs-4' key={index}>
                        <p>{item}</p>
                    </div>
                )
            })
           }
        
        </div> 
    </div> 

    
    )
}


HorizontalScroll.propTypes = {
    content: PropTypes.array.isRequired,
};


export default HorizontalScroll;