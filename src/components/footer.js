import React from 'react'
import './footer.css';
function Footer (){
  return (
    <div className='footer'>
    <div className='footer-body'>
        <div className='box-1'>
            <div className='box1-head'>Quick Ui</div>
            <p>2024 ©Quick Ui All rights reserved.</p>
        </div>
        <div className='box-footer'>
            <div className='box-2'>
        <div className='box2-head'> Quick Ui</div>
            <div className='ul-footer'>
                <a href='/courses'>Courses</a> 
                <a href='/'>How to Apply?</a>
                <a href='/Services'>Services</a>
                <a href='/Services'>2024 Chnages</a>
                <a href='/About'>About</a>
                <a href='/About'>UX Designs</a>
                <a href='/courses'>UI Designs</a>
                <a href='/'>Wire Framing</a>
            </div>
        </div>
        <div className='box-2'>
        <div className='box2-head'>Resourses</div>
            <div className='ul-footer'>
                <a href='/'>Product</a>
                <a href='/Services'> AI images</a>
                <a href='/Services'>Templates</a>
                <a href='/About'>AI Usage</a>
                <a href='/Abou'>2024 Chnages</a>
                <a href='/coursest'>Resoultions</a>
                <a href='/'>Quick Tips</a>
            </div>
        </div>
        <div className='box-2'>
        <div className='box2-head'>Social Media</div>
            <div className='ul-footer'>
                <a href='/courses'>Whatsapp</a>
                <a href='/About'>Twitter</a>
                <a href='/'>Instagram</a>
                <a href='/Services'>Youtube</a>
                <a href='/'>Facebook</a>
            </div>
        </div></div>
        
    </div>
    </div>

  )
}

export default Footer