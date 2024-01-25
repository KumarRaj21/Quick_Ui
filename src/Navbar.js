import React from 'react';
import{NavLink} from 'react-router-dom';
import Login from './components/Login';
import './App.css'
import Signup from './components/Signup';
import Applyform from './components/Applyform';
function Navbar(props) {
  return (
    <div className='navbar'>
    <div className='logo'>Quick Ui</div>
    <div className='navbar1'> 
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/courses'>Courses</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Services'>Services</NavLink>
    </div>
    <div className='navbar-2'>
        <button className='navbar-apply-btn' onClick={()=>{
          props.setapplybtn(!props.applybtn)
        }}>Apply</button>
        <Applyform trigger={props.applybtn} settrigger={props.setapplybtn} />
        <div className='navbar-2-p' onClick={()=>{
          props.setloginbtnpopup(!props.loginbtnpopup);
        }}>login </div>
        <Login logintrigger={props.loginbtnpopup} setlogintrigger={props.setloginbtnpopup} loginbtn={props.loginbtn} setloginbtn={props.setloginbtn}></Login>
        <button id='sign-btn' onClick={()=>{
          props.setsignupbtn(!props.signupbtn);
        }}>Signup for free</button>
          <Signup trigger={props.signupbtn} settrigger={props.setsignupbtn} loginbtn={props.loginbtn} setloginbtn={props.setloginbtn}></Signup>
        </div>
</div>
  )
}

export default Navbar