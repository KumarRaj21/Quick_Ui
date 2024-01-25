import React from 'react'
import './home.css';
import Signup from './Signup';
import './Signup.css';
import homeimg1 from '../images/laptop-home1.png';
import profile from '../images/user-regular.svg';
import ruppee from '../images/ruppee.svg';
import check from '../images/check-solid.svg';
import time from '../images/calendar-regular.svg';
import Coursessection from './Courses';
import Services from './Services';
import About from './about';
function Home(props) {
  return (
    <div className='home-container'>
      <div className='home-part1'>
        <div className='home-part1-1'> 
          <div className='home-part1-1-head'>
          Quick <span>&nbsp;Ui</span>&nbsp;company
          </div>
          <div className='home-part1-1-content'>
          The only AI-powered creative companion you’ll ever need to grow your brand. Get it all done with Picsart’s ultimate creative suite.The only AI-powered creative companion you’ll ever need to grow your brand.
          </div>
          <div className='home-part1-1-signup-btn'>
            <button className='home-part1-1-signup-btn-button' onClick={()=>{
              props.sethomesignupbtn(!props.homesignupbtn)
            }}>Signup for free</button>
            <Signup trigger={props.homesignupbtn} settrigger={props.sethomesignupbtn} loginbtn={props.loginbtn} setloginbtn={props.setloginbtn}/>
          </div>
        </div>
        <div className='home-part1-2'>
         <img src={homeimg1} alt='error'/>
        </div>
      </div>
      <div className='home-part2'>
          <div className='home-part2-box'>
            <div className='home-part2-box-img'>
              <img src={profile} alt='error'/>
            </div>
            <div className='home-part2-box-content'>
              <div className='home-part2-box-head'> 5000 +</div>
              <div className='home-part2-box-p'>Learners</div>
            </div>
          </div>
          <div className='home-part2-box'>
            <div className='home-part2-box-img'>
              <img src={ruppee} alt='error'/>
            </div>
            <div className='home-part2-box-content'>
              <div className='home-part2-box-head'> 10 LPA</div>
              <div className='home-part2-box-p'>Avg Package</div>
            </div>
          </div>
          <div className='home-part2-box'>
            <div className='home-part2-box-img'>
              <img src={check} alt='error'/>
            </div>
            <div className='home-part2-box-content'>
              <div className='home-part2-box-head'>97%</div>
              <div className='home-part2-box-p'>Placement Rate</div>
            </div>
          </div>
          <div className='home-part2-box'>
            <div className='home-part2-box-img'>
              <img src={time} alt='error'/>
            </div>
            <div className='home-part2-box-content'>
              <div className='home-part2-box-head'>6 Months</div>
              <div className='home-part2-box-p'>Duration</div>
            </div>
          </div>
      </div>
        <Services applybtn={props.applybtn} setapplybtn={props.setapplybtn} />
       <Coursessection applybtn={props.applybtn} setapplybtn={props.setapplybtn}/>
      <div className='home-part4'>
      <div className='home-part4-head'><p className='home-part4-head-p'>Team Members Associated With this Company</p></div>
      <div className='home-part4-content'>
        <About/>
      </div>
      </div>
      <div className='home-part5'>
        <div className='home-part5-card'>
          <div className='home-part5-card-1'>
            <div className='home-part5-card-1-head'>
              Apply For the Best Courses
            </div>
            <div className='home-part5-card-1-des'>
            Our experts who have years of industry and teaching experience will teach you 1 on 1 in real time so you can gain the best out of this course.
            </div>
            <div className='home-part5-card-1-button'>
              <button onClick={()=>{
                props.setapplybtn(!props.applybtn)
              }}>Apply here</button>
            </div>
          </div>
          <div className='home-part5-card-2'>
            <img src='https://miro.medium.com/v2/resize:fit:605/1*vTLOUrJWoo4Kzj7ly8o0jA.png' alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home