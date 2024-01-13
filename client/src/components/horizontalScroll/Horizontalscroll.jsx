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
                    <div className='col-xs-4' key={index} style={{
                      
                        marginTop: "40px",
                        padding: "16px",
                        background:'transparent',
                        width: "30rem"
                    }}>
                        <div className="card d-flex align-items-center w-auto border-0 outline-0 bg-transparent">
                            <img className="card-img-top" src={item.image} alt="Card image cap" style={{
                                    height: "160px",
                                    width: "160px"
                            }} />
                            <div className="card-body" style={{
                                textWrap:"balance",
                            }}>
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                        </div>
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