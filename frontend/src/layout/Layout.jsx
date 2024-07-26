// import React from 'react'
// import Navbar from '../pages/navbar/Navbar'
// import Footer from '../pages/footer/Footer'
// import { Outlet } from 'react-router-dom'
// import '../layout/layout.css'

// const Layout = () => {
//   return (
//     <>
//     <div className="container">
//    <div className="layoutContainer">
//     <Navbar/>
//     <Outlet/>
//     <Footer/>
//     </div>
//    </div>
      
//     </>
//   )
// }

// export default Layout




import React from 'react';
import Navbar from '../pages/navbar/Navbar';
import Footer from '../pages/footer/Footer';
import { Outlet } from 'react-router-dom';
import '../layout/layout.css';
import Banner from '../components/topBanner/Banner';

const Layout = () => {
  return (
    <>
      <div className="layoutContainer">
        <Banner/>
        <Navbar />
        <div className="mainContent">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
