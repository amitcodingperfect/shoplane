

import Feed from '../../Feed/Feed';
import HomeOption from '../../HomeOption/HomeOption';

import './Home.css';



function Home() {

  return(
   
      

   <div className='homeContainer'>

        <div className="leftContainer">
     <HomeOption/>
        </div>
        <div className="BottomContainer">
     <Feed/>
        </div>
        
      
   </div>
   
   

       
  )
}

export default Home;