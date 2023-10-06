import React from 'react';
import { AiOutlineStar,AiOutlineShoppingCart } from 'react-icons/ai';

import featuresData from './ferturesData';
const Feture = () => {
  return (
   <>
    <div className='feature-container'>
    {featuresData.map((feature) => (
      <div className="feature-box" key={feature.id}>
        <img src={feature.imageSrc} alt="" />
        <h6>{feature.title}</h6>
      </div>
    ))}
  </div>
  <div className="fetured-product-container">
    <h2>Featured Products</h2>
    <p>New Collections</p>
    <div className="product-container">
        <div className="product-box">
        <img src="https://thumblr.uniid.it/product/267100/cd616566d427.jpg" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        <div className="product-box">
        <img src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        <div className="product-box">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        <div className="product-box">
        <img src="https://thumblr.uniid.it/product/267100/cd616566d427.jpg" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        <div className="product-box">
        <img src="https://thumblr.uniid.it/product/267100/cd616566d427.jpg" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        <div className="product-box">
        <img src="https://thumblr.uniid.it/product/267100/cd616566d427.jpg" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        <div className="product-box">
        <img src="https://thumblr.uniid.it/product/267100/cd616566d427.jpg" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        <div className="product-box">
        <img src="https://thumblr.uniid.it/product/267100/cd616566d427.jpg" alt="" />
            <div className="product-description">
            <span>addidas</span>
            <h5>cotton T-shirt</h5>
            <div className="rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </div>
            <h4>78$</h4>
            </div>
            <a href=""><AiOutlineShoppingCart className='icon' /></a>

        </div>
        
        
    </div>

  </div>
   </>
  )
}

export default Feture;
