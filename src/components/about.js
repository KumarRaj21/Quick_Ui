import React from 'react'
import { about_cards } from '../Configurations/arrays';
import './about.css';
function About(){
  return ( 
    <div className='about-container'>
      <div className='about-card-Title'>
        Mentors for the course
      </div>
      <div className='about-cards-display'>
        {
          about_cards.map((item,index)=>{
            return ( <div className='about-card'>
          <div className='about-card-img'>
            <img src={item.about_img} alt=''/>
        </div>
        <div className='about-card-name'>
         {item.about_name}
        </div>
        <div className='about-card-work'>
          {item.about_work}
        </div>
        <div className='about-card-des'>
          {item.about_card_des}
        </div>
      </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default About