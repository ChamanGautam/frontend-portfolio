import React from 'react';
import './Home.css'; 
import img from '../img/my img.png'
const Home = () => {
  return (
      <div className="details-container">
        <div className="maindiv">
        <h1>Hey, I'm Chaman Gautam !</h1>
        <div>Passionate web developer who <span>enjoys</span> building <span>fast </span> </div>
        <div>and <span>accessible</span> digital products.</div>
        <button>
        <a href="#about">About Me.</a>
      </button>
      </div>
     
      </div>
  );
};

export default Home;
