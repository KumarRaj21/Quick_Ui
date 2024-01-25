import React from 'react'
import { cards } from '../Configurations/arrays';
function  Services(){
  return (<><div className='home-part3'>
        {
            cards.map((item,index)=>{
              return (<>
                <div className='home-part3-in'>
              <div className='home-part3-1'>
              <div className='home-part3-1-head'>{item.card_head}</div>
              <div className='home-part3-1-content'>{item.card_content}</div>
              </div>
              <div className='home-part3-2'>
          <div className='home-part3-2-img'>
            <img src={item.card_img} alt='error'/>
          </div>
             </div>
             </div>
           </> 
                )
            })
          }</div>
          </>
      
  )
}

export default Services