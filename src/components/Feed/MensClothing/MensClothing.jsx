import React, { useEffect, useState } from "react";

import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { NavLink } from 'react-router-dom';







function MensClothing() {
  const [MensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((res) => {
      setMensClothing([...res.data]);
    });
  }, []);
 

  return (
    <div className="all_cards">
      {MensClothing.map((item) => {
       return(
        <>
        <div className='col-md-3 mb-4'>
        <div class="card h-100 text-center p-4" key={item.id} >
  <img src={item.image} class="card-img-top" alt={item.title} height="250px"/>
  <div class="card-body">
    <h5 class="card-title mb-0">{item.title.substring(0,12)}</h5>
    <ReactStars
                count={5}
                size={24}
                value={item.rating.rate}
                color2={"#ffd700"}
            
              />
    <p class="card-text lead fw-bold">${item.price}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
        </div>
        
        </>
       )
      })}
    </div>
  );
    }

export default MensClothing;