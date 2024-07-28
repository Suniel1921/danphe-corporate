// import React from 'react'
// import '../topBanner/banner.css'
// import { NavLink } from 'react-router-dom'
// import { FaShoppingCart } from "react-icons/fa";
// import { FaUserLarge } from "react-icons/fa6";
// import { IoCallSharp } from "react-icons/io5";
// import { AiFillMessage } from "react-icons/ai";
// const Banner = () => {
//   return (
//     <>
//     <div className="bannerContainer">
//         <div className="container">
//             <div className="banner">
//                 <img className='NepalTechlogo' src="/img/nti.png" alt="Nepal Tech Logo" />
//                 <div className="bannerLink list">
//                     {/* <NavLink to={'/cart'}><IoCallSharp className='icons'/>+977 98000000</NavLink> */}
//                     <NavLink><FaUserLarge className='icons'/></NavLink>
//                     <NavLink ><AiFillMessage className='icons'/></NavLink>
//                     <NavLink to={'/cart'}><FaShoppingCart className='icons'/></NavLink>
//                 </div>
//             </div>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default Banner







import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { Dropdown, Menu } from 'antd';
import { FaUserAlt } from "react-icons/fa";
import '../topBanner/banner.css';

const userMenu = (
  <Menu>
    <Menu.Item key="1">
      <NavLink to="/login">Client Login</NavLink>
    </Menu.Item>
    <Menu.Item key="2">
      <NavLink to="/update-document">Update Document</NavLink>
    </Menu.Item>
  </Menu>
);

const messageMenu = (
  <Menu>
    <Menu.Item key="1">
      <NavLink to="/new-order">New Order</NavLink>
    </Menu.Item>
    <Menu.Item key="2">
      <NavLink to="/existing-order">Existing Order</NavLink>
    </Menu.Item>
  </Menu>
);

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="container">
        <div className="banner">
          <img className='NepalTechlogo' src="/img/nti.png" alt="Nepal Tech Logo" />
          <div className="bannerLink list">
            <Dropdown overlay={userMenu} placement="bottomRight">
              <NavLink><FaUserAlt className='icons' /></NavLink>
            </Dropdown>
            <Dropdown overlay={messageMenu} placement="bottomRight">
              <NavLink><AiFillMessage className='icons' /></NavLink>
            </Dropdown>
            <NavLink to={'/cart'}><FaShoppingCart className='icons' /></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
