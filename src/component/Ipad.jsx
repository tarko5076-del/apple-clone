import React from 'react';
import './Ipad.css';

function Ipad() {
  return (
    <section>
      <div className="two-wrapper">
        <div className="both two-wrapper-left">
          <div className="same">
            <h1><em>iPad Air</em></h1>
            <p className="p-1">Now supercharged with the M3 chip.</p>
            <div className="hero-buttons-2">
              <a href="#" className="btn"><button className="bt-1">Learn more</button></a>
              <a href="#" className="btn"><button className="bt-2">Buy</button></a>
            </div>
          </div>
        </div>

        <div className="both two-wrapper-right">
          <div className="same">
            <h1>MacBook Air</h1>
            <p>Sky blue color.</p>
            <p className="p-2">Sky-high performance with M4.</p>
            <div className="hero-buttons-2">
              <a href="#" className="btn"><button className="bt-1">Learn more</button></a>
              <a href="#" className="btn"><button className="bt-2">Buy</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ipad;
