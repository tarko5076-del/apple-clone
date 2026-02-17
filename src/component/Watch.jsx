import React from 'react';
import logo from '..//component/images/logo/logo.png';
import './Iphone.css'
import './Watch.css'
function Watch(){
    return(
        <section>
        <div className=" hero hero-section-3">
            <div className="hero-text-3">
            <div className="collab">
           <img src={logo} alt="logo"/>
                <h1><span>Watch </span>series 11 </h1>
            </div>
            <p className="w-p">Turn resolutions into routine. <br/>Quit quitting your fitness goals. </p>
            <div className="hero-buttons-2">
                <a href="" className="btn"><button className="bt-1">Learn more </button></a>
            <a href="" className="btn"><button className="bt-2">buy</button></a>
            </div>
            </div>
            </div>
    </section>

    );
}
export default Watch;