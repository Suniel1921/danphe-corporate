import React, { useState } from 'react';
import '../sideMenu/sideMenu.css'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [dropdowns, setDropdowns] = useState({
    ecommerce: false,
    category: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prevState) => {
      const newState = { ecommerce: false, category: false };
      newState[name] = !prevState[name];
      return newState;
    });
  };

  return (
    <>
      <div className="sideMenu">
        <Link className='link' to={'/dashboard/admin'}><h3>Dashboard</h3></Link>

        {/* <div className="adminDetails">
            <img className='adminUserImg' src="/img/slide1.png" alt="admin logo" />
            <p>your@gmail.com</p>
        </div> */}


        <div className="dropdownContainer">
          <h3 onClick={() => toggleDropdown('ecommerce')}>
            <IoMdArrowDropright className={`icon ${dropdowns.ecommerce ? 'rotate' : ''}`} />
            <span className="dropdownTitle">testing heading</span>
          </h3>
          <div className={`dropdownContent ${dropdowns.ecommerce ? 'open' : ''}`}>
            <Link className='link' to={'/dashboard/admin/createProduct'}> 
            <p><IoMdArrowDropright className="subItemIcon" /> Add Product</p>
            </Link>
           
            <p><IoMdArrowDropright className="subItemIcon" /> Products</p>
            <p><IoMdArrowDropright className="subItemIcon" /> Customers</p>
            <p><IoMdArrowDropright className="subItemIcon" /> Orders</p>
            <p><IoMdArrowDropright className="subItemIcon" /> Order Details</p>
          </div>
        </div>

        <div className="dropdownContainer">
          <h3 onClick={() => toggleDropdown('category')}>
            <IoMdArrowDropright className={`icon ${dropdowns.category ? 'rotate' : ''}`} />
            <span className="dropdownTitle">testing 2</span>
          </h3>
          <div className={`dropdownContent ${dropdowns.category ? 'open' : ''}`}>
            <Link className='link' to='/dashboard/admin/createCategory'>
              <p className="subItemLink">
                <IoMdArrowDropright className="subItemIcon" /> Add Category
              </p>
            </Link>
            <Link className='link' to='/dashboard/admin/createBrand'>
              <p className="subItemLink">
                <IoMdArrowDropright className="subItemIcon" /> Add Brand
              </p>
            </Link>

            <p><IoMdArrowDropright className="subItemIcon" />Category List</p>


          </div>
        </div>
        
      </div>
    </>
  );
};

export default SideMenu;
