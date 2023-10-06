import React from 'react'
import BrandLogo from '../../../assets/images/primary.ico';
import { BsHandbag } from 'react-icons/bs';
const Topnav = () => {
  return (
    <div className='topnav-container'>
        <a className='logo' href=""><img src={BrandLogo} alt="Infinite Shop" /></a>
        <div>
            <ul className='navbar'>
                <li><a href="" className='active'>Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href=""><BsHandbag /></a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Topnav
