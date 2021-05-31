import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_img"
                src="mbb.jpg"alt=""></img>
           
            <div className="home_row">
            
            <Product
                id="123"
                title="Raggi Millets"
                description="it is very healthy and boost your immunity system."  
                price={70}
                rating={5}
                image="Raggi.jpg"  
                />
                  <Product
                id="213"
                title="Jonna Millets"
                description="it is very healthy and boost your immunity system."  
                price={90}
                rating={5}
                image="Jonna.jpg"  
            />
       </div>
      
            <div className="home_row">
            <Product
                id="321"
                title="Jonna Millets"
                description="it is very healthy and boost your immunity system."  
                price={60}
                rating={5}
                image="Jonna.jpg"  
                />
                  <Product
                id="211"
                title="Bajra Millets"
                description="it is very healthy and boost your immunity system."  
                price={12}
                rating={5}
                image="Bajra.jpeg"  
            />
                 <Product
                id="313"
                title="Kutki Millets"
                description="it is very healthy and boost your immunity system."  
                price={10}
                rating={5}
                image="Kutki.jpg"  
            />
       
       
       
       </div>
      
            <div className="home_row">
            <Product
                id="982"
                title="Rich Millets"
                description="it is very healthy and boost your immunity system."  
                price={16}
                rating={5}
                image="Mil.png"  
                />
            
       </div>
       </div>
       
    )
}

export default Home


