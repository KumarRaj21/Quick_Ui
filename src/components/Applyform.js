import React from 'react'
import './applyform.css';
import closebtn from '../images/xmark-solid.svg';
function Applyform(props){
  return ((props.trigger)?(<div className='apply-container'>
      <div className='apply-in'>
        <div className='apply-part1'>
        <div className='apply-part2-btn'>
            <button onClick={()=>{
                props.settrigger(!props.trigger);
            }} 
            >
              <img src={closebtn} alt='' /></button></div>
            <div className='apply-part1-head'>Apply here for the courses</div>
         <form action=''>
            <input type='text' placeholder='Enter Your Name' />
            <input type='email' placeholder='Enter Your Email' />
            <input type='number' placeholder='Enter Mobile Number' />
            <button id='apply-form-btn'>Apply</button>
         </form>
          </div>
        <div className='apply-part2'><div className='apply-part2-btn'>
            <button onClick={()=>{
                props.settrigger(!props.trigger);
            }}
            >
              <img src={closebtn} alt='' /></button></div>
            <div className='apply-part2-img'>
            <img src='https://static.vecteezy.com/system/resources/previews/008/826/724/non_2x/programmer-developer-engineer-with-laptop-sitting-at-the-office-desk-holding-a-pen-while-coding-and-developing-concept-illustration-free-vector.jpg' alt='' />
          </div>
        </div>
        </div>
    </div>):"" 
  )
}

export default Applyform