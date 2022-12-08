import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./HomeOption.css"
import {NavLink} from 'react-router-dom';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

export default function HomeOption() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container">
        <NavLink href="/">
          <h3><font color="aqua">SHOP</font>
           <font color="black">LANE</font></h3>
        </NavLink>
    <Dropdown>
      <DropdownToggle>
        <button className="btn btn-outline-dark"
         type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg> Login <br /> Or Sign Up</button>
            </DropdownToggle>
           
            <Dropdown.Menu>
            <Dropdown.Item href="Login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>Login</Dropdown.Item>
            <Dropdown.Item href="Signup">signup</Dropdown.Item>
            <Dropdown.Item href="Cart"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>Cart</Dropdown.Item>
            <Dropdown.Item href="Favourite"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>Favorite</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        &nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
        

            

    
    </div>
  
</nav>


    <div>
             
      <div className="list">
      <nav>
        <ul>
          <li>
            <NavLink to ={'./all'}>
            All
            </NavLink>
          </li>
          <li>
          <NavLink to ={'./electronics'}>
          Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to={'./Jwellery'}>
            Jewelery
            </NavLink>
          </li>
          <li>
          <NavLink to={'./MensClothing'}>
            Men's Clothing
          </NavLink>
          </li>
          <li>
          <NavLink to={'./WomensClothing'}>
            Women's Clothing
            </NavLink>
          </li>
          

        </ul>
      </nav>
          </div>
          
  

            </div>

    </div>
  )
}


