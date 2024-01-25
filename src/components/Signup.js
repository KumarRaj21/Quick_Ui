import React from 'react'
import img1 from '../images/facebook-logo.svg';
import img2 from '../images/google-plus-g.svg';
import img3 from '../images/linkedin-in.svg';
import Form from './Form';
import './Signup.css';
function Signup(props){
  return (props.trigger)?(< div className='signup-container'>
    <div className='signupin-container'>
      <div className='part1'>
        <div className='part1-in'>
          <div className='part1-1'>Quick Ui</div>
        <div className='part1-2'>
          <div className='part1-2-body'>
            Welcome Back!
          </div>
          <div className='part1-2-botttom'>
            signup for free
          </div>
        </div> 
      <div className='part1-3'>
        <p className={(props.loginbtn)?'part1-3-signup':'part1-3-login'}>
          {(props.loginbtn)?'Dont have an Acoount?':'Already have an Acoount ?'}</p>
        <button className='part1-3-button' onClick={()=>{
          props.setloginbtn(!props.loginbtn);
        }}>{(props.loginbtn)?'Signup':'Login'}</button>
      </div>
      </div>
      </div>
    <div className='part2'>
      <div className='part2-btn'>
        <button onClick={()=>{
        props.settrigger(!props.trigger);
      }}>close</button>
      </div>
      <div className='part2-in'>
        <div className='part2-1'>
          <h4>Continue</h4>
          <div className='image-div'>
            <div className='image-bg'> <img src={img1} alt='error'/></div>
            <div className='image-bg'><img src={img2} alt='error'/></div>
            <div className='image-bg'><img src={img3} alt='error'/></div>
          </div>
        </div>
        <div className='part2-2'>
           <Form  loginbtn={props.loginbtn} setloginbtn={props.setloginbtn}  />
        </div>
        </div>
      </div>
  </div>
  </div>):"";
}

export default Signup;