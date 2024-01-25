import React from 'react';
import img1 from '../images/facebook-logo.svg';
import img2 from '../images/google-plus-g.svg';
import img3 from '../images/linkedin-in.svg';
import './Signup.css'
import Form from './Form';
function Login(props) {
  return (props.logintrigger)? (< div className='signup-container'>
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
      <p className={(props.loginbtn)?'part1-3-login':'part1-3-signup'}>
        {(props.loginbtn)?'Already have an Acoount ?':'Dont have an Acoount?'}</p>
      <button className='part1-3-button' onClick={()=>{
        props.setloginbtn(!props.loginbtn);
      }}>{(props.loginbtn)?'Login':'Signup'}</button>
    </div>
    </div>
    </div>
  <div className='part2'>
    <div className='part2-btn'>
      <button onClick={()=>{
      props.setlogintrigger(!props.logintrigger);
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
         <Form  loginbtn={!props.loginbtn} setloginbtn={!props.setloginbtn}  />
      </div>
      </div>
    </div>
</div>
</div>
  ):"";
}

export default Login