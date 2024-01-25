import React from 'react'
import './Humburger.css'
import xmark from '../images/xmark-solid.svg';
import Login from './Login';
import Applyform from './Applyform';
function Humburger(props){
  return (props.trigger)?
    (<div className='humburger-container'>
        <div className='humburger-in'>
        <div className='humburger-head'>
          <div className='humburger-logo'>Quick Ui</div>
          <div className='humburger-btn'>
        <button  className='humburger-btn-button' onClick={()=>{
        props.settrigger(!props.trigger)
       }}>
        <img src={xmark} alt=''/>
        </button></div>
          </div> 
        <div className='humburger-ul'>
       <a href='/'>Home</a>
        <a href='/courses'>Courses</a>
        <a href='/About'>About</a>
        <a href='/Services'>Services</a>
       </div>
       <div className='humburger-bottom'>
        <buton className='humburger-bottom-button' onClick={()=>{
           props.setloginbtnpopup(!props.loginbtnpopup);
        }}>
          login
        </buton>
        <buton className='humburger-bottom-button-apply' onClick={()=>{
           props.setapplybtn(!props.applybtn)
        }}>
          Apply
        </buton>
        <Login logintrigger={props.loginbtnpopup} setlogintrigger={props.setloginbtnpopup} loginbtn={props.loginbtn} setloginbtn={props.setloginbtn}/>
        <Applyform trigger={props.applybtn} settrigger={props.setapplybtn}/>
       </div>
    </div>
    </div>
       ):"";
}

export default Humburger