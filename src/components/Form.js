import React from 'react';
import './form.css';
function Form(props){
  return (props.loginbtn)?
  (<div className='form1'> 
    <form action=''>
    <input type='email' placeholder='Enter your Email'/>
    <input type='password' placeholder='Enter your Password' />
    <button>Login</button>
  </form></div>)
    :(<div className='form2'>
    <form action=''>
    <input type='text' placeholder='Enter your Full name' />
    <input type='email' placeholder='Enter your Email'/>
    <input type='password' placeholder='Create Password' />
    <input type='password' placeholder='Re-enter the Password'/>
    <button>Create Account</button>
  </form></div> 
  );
}

export default Form