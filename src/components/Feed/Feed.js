

import React from 'react'
import All from './All/All'
import {Routes, Route} from 'react-router-dom';

import Jwellery from './Jwellery/Jwellery';
import MensClothing from './MensClothing/MensClothing';
import WomensClothing from './WomensClothing/WomensClothing';
import Electronics from './Electronics/Electronics';




function Feed() {
  return (
    <div>
      <Routes>
      <Route path="/all" element={<All/>}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="/Jwellery" element={<Jwellery/>}/>
      <Route path="/MensClothing" element={<MensClothing/>}/>
      <Route path="/WomensClothing" element={<WomensClothing/>}/>
    
    

      
      </Routes>
    </div>
  )
}

export default Feed;
