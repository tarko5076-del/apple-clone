import React from 'react';
import './Iphone.css';
 function Iphone() {

  return (
    <section>
      <div className="hero hero-section-1">
        <div className="hero-text">
          <h1>iPhone</h1>
          <p>
            Say hello to the latest <br className="mobile-1" /> generation Of iPhone
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn">
              <button className="bt-1">Learn more</button>
            </a>
            <a href="#" className="btn">
              <button className="bt-2">Shop iPhone</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Iphone;
