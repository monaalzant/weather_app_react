import React from 'react';
const Weather =(props) => {
    
        return(
        <div className='info'>
          {
          props.tempreature && <p className='info_key'>Temp: <span className='info-value'>{props.tempreature}</span></p> 
          }
          {
          props.city && <p className='info_key'> City: <span className='info-value'>{props.city}</span> </p>
          }  
          {
          props.country && <p className='info_key'>Country: <span className='info-value'>{props.country}</span>
                           </p> 
          }  
          {
          props.humidity && <p className='info_key'>Humidity: <span className='info-value'>{props.humidity}</span>
                            </p>
          }  
          {
          props.description && <p className='info_key'>Desc: <span className='info-value'>{props.description}</span>
                               </p>
          }
          {
          props.error && <p className='info_key'>error: <span className='info-value'> {props.error}</span>
                         </p>  
          }  
        </div>
        )
    
}
export default Weather