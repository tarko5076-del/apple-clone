
import React from 'react';
import logo from './images/logo/logo.png';
import './Trade.css';

function Trade() {
  return (
    <section>
        
        <div className="two-wrapper">
            <div className=" both fourth-wrapper-left">
                <div className="same">
                    <div className="collab">
           <img src={logo} alt="logo"/>
                <h1>trade in </h1>
            </div>
                 
                <p className="">Get up to $180-$680 <br/>in criedit when in you trade in <br/> iphone 13 or higher.</p>
                <div className="hero-buttons-2">
                <a href="" className="btn"><button className="bt-1">Get your estimate </button></a>
            
            </div>
            </div>
            </div>
            <div className=" both fourth-wrapper-right">
                <div className="same">
                       <div className="collab">
           <img src={logo} alt="logo"/>
                <h1>Card </h1>
            </div>
            <p>Get up to 3% daily cash back  <br/>with every purchase.</p>
                 
                <div className="hero-buttons-2">
                <a href="" className="btn"><button className="bt-1">Learn more </button></a>
            <a href="" className="btn"><button className="bt-2">apply now</button></a>
            </div>
            </div>

            
            </div>
        </div> 
    </section>
  );
}

export default Trade;
