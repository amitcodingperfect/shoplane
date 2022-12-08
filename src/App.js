import React from 'react';
import Login from './components/LoginPage/Login';

import Feed from './components/Feed/Feed';
import Home from './components/Pages/Home/Home';

import {Routes, Route} from 'react-router-dom';
import Signup from './components/SignupPage/Signup';
// import LoginForm from './components/Pages/LoginForm';
import HomeOption from './components/HomeOption/HomeOption';







function App() {
  return (
    <div>
       <Routes>
  {/* <Route path="/" element={<Home/>}></Route>  */}
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
  </Routes>
 <HomeOption/>
  <Feed/>
  
 
    </div>
  )
}

export default App
