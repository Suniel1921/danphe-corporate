import React from 'react'
import '../topBanner/banner.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
const Banner = () => {
  return (
    <>
    <div className="bannerContainer">
        <div className="container">
            <div className="banner">
                <img className='NepalTechlogo' src="/img/nti.png" alt="Nepal Tech Logo" />
                <div className="bannerLink list">
                    {/* <NavLink to={'/cart'}><IoCallSharp className='icons'/>+977 98000000</NavLink> */}
                    <NavLink to={'/cart'}><FaShoppingCart className='icons'/></NavLink>
                    <NavLink to={'/cart'}><FaUserLarge className='icons'/></NavLink>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Banner
