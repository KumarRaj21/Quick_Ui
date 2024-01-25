import React from 'react'
import {courselist} from '../Configurations/arrays'
import Applyform from './Applyform';
function Coursessection (props){
  return (
    <div className='home-course'>
      <div className='home-course-head'>
        <div className='home-course-head-p'>Main Courses</div><span> &nbsp;we are Providing</span></div>
        <div className='home-course-card'>
          { 
            courselist.map((item,index)=>{
              return (<div className='course-card' key={index}> 
              <div className='course-img'> <img src={item.url} alt=''/></div>
              <div className='cname'>{item.course_name}</div>
                </div>
              )
            })
          }
        </div>
        <div className='apply-part'>
          <button className='apply-btn' onClick={()=>{
            props.setapplybtn(!props.applybtn);
          }}>Apply now</button>
        </div>
        <Applyform settrigger={props.setapplybtn} trigger={props.applybtn}/>
    </div>
  
  )
}

export default Coursessection