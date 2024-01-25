import { useState } from 'react';
import './App.css';
import{Routes,Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/Services';
import Footer from './components/footer';
import Navbar from './Navbar';
import Signup from './components/Signup';
import Coursessection from './components/Courses';
import menu from './images/bars-solid.svg'
import Humburger from './components/Humburger';
import Error from './components/Error';
function App() {
  const [loginbtnpopup,setloginbtnpopup] = useState(false);
  const [signupbtn,setsignupbtn]= useState(false);
  const [loginbtn,setloginbtn] =useState(false);
  const [homesignupbtn,sethomesignupbtn]=useState(false);
  const [applybtn,setapplybtn]=useState(false);
  const [menubtn,setmenubtn]=useState(false)
  return (
    <div className='container'>
      <div className='App-header'>
        <button className='menu' onClick={()=>{
        setmenubtn(!menubtn);
      }}>
        <img src={menu} alt=''/> 
      </button>
      <Humburger trigger={menubtn} settrigger={setmenubtn} loginbtnpopup={loginbtnpopup} setloginbtnpopup={setloginbtnpopup} signupbtn={signupbtn} setsignupbtn={setsignupbtn} loginbtn={loginbtn} setloginbtn={setloginbtn} applybtn={applybtn} setapplybtn={setapplybtn} />
      <Navbar loginbtnpopup={loginbtnpopup} setloginbtnpopup={setloginbtnpopup} signupbtn={signupbtn} setsignupbtn={setsignupbtn} loginbtn={loginbtn} setloginbtn={setloginbtn} applybtn={applybtn} setapplybtn={setapplybtn}/>
      </div>
      
<div className='body'>
  <Routes>
  <Route path='/webpage_' element={<Home homesignupbtn={homesignupbtn} sethomesignupbtn={sethomesignupbtn} loginbtn={loginbtn} setloginbtn={setloginbtn} applybtn={applybtn} setapplybtn={setapplybtn}/>}  />
    <Route path='/' element={<Home homesignupbtn={homesignupbtn} sethomesignupbtn={sethomesignupbtn} loginbtn={loginbtn} setloginbtn={setloginbtn} applybtn={applybtn} setapplybtn={setapplybtn}/>}  />
    <Route  path='/About' element={<About/>}/>
    <Route  path='/Services' element={<Services/>}/>
    <Route path='/courses' element={<Coursessection applybtn={applybtn} setapplybtn={setapplybtn}/>}/>
    <Route path='/Footer' element ={<Footer/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='*' element={<Error/>}/> 
  </Routes>
</div>
<Footer/>
<div className='page-bottom'>
© 2024 All Rights Reserved, Quick Ui®<br></br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Privacy policy | Terms
</div>
   </div>
  );
}

export default App;
