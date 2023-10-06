import React from 'react';
import HeroPhoto from '../../../assets/images/Apple-Watch-Transparent-Background.png';
const Hero = () => {
  return (
    <div className='hero-section-container'>
       <div className='hero-section-content'>
       <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
       </div>
       <div className="hero-section-photo">
        <img src={HeroPhoto} alt="Headset" />
       </div>


    </div>
  )
}

export default Hero;
