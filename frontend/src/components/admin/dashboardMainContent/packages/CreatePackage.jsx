// import React, { useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../sideMenu/SideMenu';
// import '../packages/createPackage.css';
// import toast from 'react-hot-toast';

// const CreatePackage = () => {
//   const [formData, setFormData] = useState({
//     heading: '',
//     para: '',
//     contentList: '',
//     cartHeading: '',
//     cartPrice: '',
//     cartList0: '',
//     cartList1: '',
//     cartList2: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       heading: formData.heading,
//       para: formData.para,
//       contentList: formData.contentList.split(',').map(item => item.trim()),
//       cartHeading: formData.cartHeading.split(',').map(item => item.trim()),
//       cartPrice: formData.cartPrice.split(',').map(item => parseFloat(item.trim())),
//       cartList0: formData.cartList0.split(',').map(item => item.trim()),
//       cartList1: formData.cartList1.split(',').map(item => item.trim()),
//       cartList2: formData.cartList2.split(',').map(item => item.trim()),
//     };

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/createPrice`,
//         payload
//       );
//       if (response.data.success) {
//         toast.success('Package created successfully');
//       } else {
//         toast.error('Failed to create package');
//       }
//     } catch (error) {
//       console.error(error);      
//       toast.error('Error creating package');
//     }
//   };

//   return (
//     <div className="createPackageContainer">
//       <div className="adminDashboard">
//         <div className="sideMenuContainer"><SideMenu /></div>
//         <div className="containern">
//           <div className="formContainer">
//             <form className='form' onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="heading"
//                 placeholder="Enter heading"
//                 value={formData.heading}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="para"
//                 placeholder="Enter para"
//                 value={formData.para}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="contentList"
//                 placeholder="Enter content list (comma separated)"
//                 value={formData.contentList}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="cartHeading"
//                 placeholder="Enter cart headings (comma separated)"
//                 value={formData.cartHeading}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="cartPrice"
//                 placeholder="Enter cart prices (comma separated)"
//                 value={formData.cartPrice}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="cartList0"
//                 placeholder="Enter cart list 0 (comma separated)"
//                 value={formData.cartList0}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="cartList1"
//                 placeholder="Enter cart list 1 (comma separated)"
//                 value={formData.cartList1}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="cartList2"
//                 placeholder="Enter cart list 2 (comma separated)"
//                 value={formData.cartList2}
//                 onChange={handleChange}
//               />
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePackage;





import React, { useState } from 'react';
import axios from 'axios';
import SideMenu from '../../sideMenu/SideMenu';
import '../packages/createPackage.css';
import toast from 'react-hot-toast';

const CreatePackage = () => {
  const [formData, setFormData] = useState({
    heading: '',
    para: '',
  });

  const [contentList, setContentList] = useState([]);
  const [cartHeading, setCartHeading] = useState([]);
  const [cartPrice, setCartPrice] = useState([]);
  const [cartList0, setCartList0] = useState([]);
  const [cartList1, setCartList1] = useState([]);
  const [cartList2, setCartList2] = useState([]);

  // Separate state for input values
  const [newContent, setNewContent] = useState('');
  const [newCartHeading, setNewCartHeading] = useState('');
  const [newCartPrice, setNewCartPrice] = useState('');
  const [newCartList0, setNewCartList0] = useState('');
  const [newCartList1, setNewCartList1] = useState('');
  const [newCartList2, setNewCartList2] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      heading: formData.heading,
      para: formData.para,
      contentList,
      cartHeading,
      cartPrice: cartPrice.map(item => parseFloat(item)),
      cartList0,
      cartList1,
      cartList2,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/createPrice`, payload);
      if (response.data.success) {
        toast.success('Package created successfully');
        // Reset all lists after successful submission
        setContentList([]);
        setCartHeading([]);
        setCartPrice([]);
        setCartList0([]);
        setCartList1([]);
        setCartList2([]);
      } else {
        toast.error('Failed to create package');
      }
    } catch (error) {
      console.error(error);      
      toast.error('Error creating package');
    }
  };

  const renderListInput = (list, setList, newValue, setNewValue, placeholder) => (
    <div className="inputWithButton">
      <input
        type="text"
        placeholder={placeholder}
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button type="button" onClick={() => {
        if (newValue.trim() !== '') {
          setList([...list, newValue]);
          setNewValue(''); // Clear input after adding
        }
      }}>Add</button>
    </div>
  );

  return (
    <div className="createPackageContainer">
      <div className="adminDashboard">
        <div className="sideMenuContainer"><SideMenu /></div>
        <div className="containern">
          <div className="formContainer">
            <form className='form' onSubmit={handleSubmit}>
              <input
                type="text"
                name="heading"
                placeholder="Enter heading"
                value={formData.heading}
                onChange={handleChange}
              />
              <input
                type="text"
                name="para"
                placeholder="Enter para"
                value={formData.para}
                onChange={handleChange}
              />
              
              <div className="fieldContainer">
                <label>Content List</label>
                {renderListInput(contentList, setContentList, newContent, setNewContent, "Enter content")}
              </div>

              <div className="fieldContainer">
                <label>Cart Headings</label>
                {renderListInput(cartHeading, setCartHeading, newCartHeading, setNewCartHeading, "Enter cart heading")}
              </div>

              <div className="fieldContainer">
                <label>Cart Prices</label>
                {renderListInput(cartPrice, setCartPrice, newCartPrice, setNewCartPrice, "Enter cart price")}
              </div>

              <div className="fieldContainer">
                <label>Cart List 0</label>
                {renderListInput(cartList0, setCartList0, newCartList0, setNewCartList0, "Enter cart list 0 item")}
              </div>

              <div className="fieldContainer">
                <label>Cart List 1</label>
                {renderListInput(cartList1, setCartList1, newCartList1, setNewCartList1, "Enter cart list 1 item")}
              </div>

              <div className="fieldContainer">
                <label>Cart List 2</label>
                {renderListInput(cartList2, setCartList2, newCartList2, setNewCartList2, "Enter cart list 2 item")}
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePackage;
