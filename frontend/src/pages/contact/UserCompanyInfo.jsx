// import React from 'react'
// import '../contact/userCompanyInfo.css';
// import Cart from '../cart/Cart'

// const UserCompanyInfo = () => {
//   return (
//     <>
//     <div className="userCompanyInfoContainer">
//       <div className="container userCompanyInfo">
//        <div className="leftFormData">
//        <h3>Tell us About your Company</h3>
//        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dicta autem dignissimos quam, nihil tempora aut aperiam repellat impedit culpa?</p>

//        <div className="userCompanyInfoForm">
//         <form>
//           <div className='companyName'>
//             <label>Prefered Name</label>
//             <input type="text"/>
//             <p style={{fontStyle: 'italic', fontSize: '12px'}}>Please enter the name you would like to give your business. Unless you specify otherwise, we will add ", LLC" to an LLC name or ", Inc." to the name of a corporation or non-profit organization.</p>
//           </div>
//           <div className='alternateCompanyName'>
//             <label>Alternate Name</label>
//             <input type="text"/>
//             <p style={{fontStyle: 'italic', fontSize: '12px'}}>If you do not have an Alternate Name, enter the word "call" in the field above. If your first name choice is unavailable, an Incorporation Specialist will contact you.</p>
//           </div>

//           <div className='industry'>
//             <label>Please Select Your industry</label>
//             <select> 
//               <option>please select your industry</option>
//               <option value="childCare">Child Care</option>
//               <option value="childCare">Child Care</option>
//               <option value="childCare">Child Care</option>
//               <option value="childCare">Child Care</option>
//             </select>
//           </div>

//           <div>
//             <label>Please tell us what your business does. Include any products and services offered.</label>
//             <input type="text" name="" id="" />
//           </div>


//           <div className='userContact'>
//         <h3>  Please enter your primary business address.</h3>
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        <p style={{fontStyle:'italic'}}>This must be a physical address.  P.O. Boxes are not acceptable.</p>
//        </div>

//        <div>
//         <p style={{fontStyle: 'italic'}}>Who are the business owners (also known as members)?  If listing a company in this section, please include all beneficial owners in the next section below.</p>

//         <p>Is this contact an individual or a company? 
//           <label>individual</label>
//           <input type="radio" name="company" id="" />
//           <label>company</label>
//           <input type="radio" name="company" id="" />
//         </p>
//         <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        </div>

//        <div className='bussinessRun'> 
//         <p>member/owner
//         <input type="radio" name="member" id="" />
//         </p>       
//      <p>Manager
//      <input type="radio" name="member" id="" />
//      </p>

//        </div>


//        <div className='contactInfo'>
//         <p>Who are the beneficial owners?  If a company was listed as a member in the above section, please include all additional beneficial owners in this section.</p>

//         <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />

//        </div>



//        <div className='importantNote'>
//         <h3>Important Notice</h3>
//         <p>To properly fulfill your Annual Report Prep and File service, incorporate.com will be the registered agent for this company.  The fee for the first year of this service will be added to your cart when you check the box below, agreeing to these terms.  In future years, you will receive an annual invoice for Registered Agent Service.  Need more information?  Call us at 00000000000.</p>
//         <p>
//           <input type="checkbox" name="" id="" />
//           <label>I have read the above statement and understand my requirement.</label>
//         </p>
//        </div>

//        <div className='contactInfo'>
//        <h3>Where should we ship your order?</h3>
       
//        <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        </div>

//        <div>
//         <p>Do you want your LLC to exist indefinitely, or do you want your LLC to terminate on a certain date?</p>
     
//         <p>I (we) plan to keep our LLC indefinitely.
//         <input type="radio" name="" id="" />
//         </p>       
//         <p>I (we) plan to shut down ("dissolve") our business on a certain date.
//           <input type="radio" name="" id="" />
//         </p>
//        </div>

//        <div>
//         <p>What is the name and address of the incorporator?</p>
//         <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        </div>
       
//        <div className="businessemail">
//         <p>What is your business email and your business phone number?</p>
//         <label>Email</label>
//         <input type="email" name="email" id="" />
//         <label>Phone</label>
//         <input type="number" name="phone" id="" />
//        </div>

//        <button>submit</button>

//         </form>
 
//        </div>
//        </div>
//       {/* cart data  */}
//         <div className="rightCartData">
//          <div className="cartData">
//          <Cart/>
//          </div>
//           </div>
//       </div>
//     </div>
      
//     </>
//   )
// }

// export default UserCompanyInfo





import React, { useState } from 'react';
import '../contact/userCompanyInfo.css';
import Cart from '../cart/Cart';

// Reusable FormInput Component
const FormInput = ({ label, type = "text", name, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} name={name} id={id} {...rest} />
  </div>
);

const UserCompanyInfo = () => {
  const [formData, setFormData] = useState({
    preferredName: '',
    alternateName: '',
    industry: '',
    businessDescription: '',
    address: { country: '', street: '', city: '', state: '', postalcode: '' },
    contact: { firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' },
    businessRun: '',
    beneficialOwners: [{ firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' }],
    importantNotice: false,
    shippingAddress: { firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' },
    llcDuration: '',
    incorporator: { firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' },
    businessEmail: '',
    businessPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="formAndCartWrapper">
      <div className="userCompanyInfo">
        <h3>Tell us About your Company</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dicta autem dignissimos quam, nihil tempora aut aperiam repellat impedit culpa?</p>

        <div className="userCompanyInfoForm">
          <form>
            <FormInput label="Preferred Name" name="preferredName" onChange={handleChange} />
            <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
              Please enter the name you would like to give your business. Unless you specify otherwise, we will add ", LLC" to an LLC name or ", Inc." to the name of a corporation or non-profit organization.
            </p>

            <FormInput label="Alternate Name" name="alternateName" onChange={handleChange} />
            <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
              If you do not have an Alternate Name, enter the word "call" in the field above. If your first name choice is unavailable, an Incorporation Specialist will contact you.
            </p>

            <div className='industry'>
              <label htmlFor="industry">Please Select Your industry</label>
              <select id="industry" name="industry" onChange={handleChange}>
                <option value="">please select your industry</option>
                <option value="childCare">Child Care</option>
                {/* Add other options as needed */}
              </select>
            </div>

            <FormInput label="Please tell us what your business does. Include any products and services offered." name="businessDescription" onChange={handleChange} />

            <h3>Please enter your primary business address.</h3>
            <FormInput label="Country" name="address[country]" onChange={handleChange} />
            <FormInput label="Street" name="address[street]" onChange={handleChange} />
            <FormInput label="City" name="address[city]" onChange={handleChange} />
            <FormInput label="State/Province" name="address[state]" onChange={handleChange} />
            <FormInput label="Postal Code" type="number" name="address[postalcode]" onChange={handleChange} />
            <p style={{ fontStyle: 'italic' }}>This must be a physical address. P.O. Boxes are not acceptable.</p>

            <p style={{ fontStyle: 'italic' }}>Who are the business owners (also known as members)? If listing a company in this section, please include all beneficial owners in the next section below.</p>

            <p>Is this contact an individual or a company? 
              <label>Individual</label>
              <input type="radio" name="contactType" value="individual" onChange={handleChange} />
              <label>Company</label>
              <input type="radio" name="contactType" value="company" onChange={handleChange} />
            </p>

            <FormInput label="First Name" name="contact[firstName]" onChange={handleChange} />
            <FormInput label="Middle Name" name="contact[middleName]" onChange={handleChange} />
            <FormInput label="Last Name" name="contact[lastName]" onChange={handleChange} />
            <FormInput label="Country" name="contact[country]" onChange={handleChange} />
            <FormInput label="Street" name="contact[street]" onChange={handleChange} />
            <FormInput label="City" name="contact[city]" onChange={handleChange} />
            <FormInput label="State/Province" name="contact[state]" onChange={handleChange} />
            <FormInput label="Postal Code" type="number" name="contact[postalcode]" onChange={handleChange} />

            <div className='bussinessRun'>
              <p>Member/Owner
                <input type="radio" name="businessRun" value="member" onChange={handleChange} />
              </p>       
              <p>Manager
                <input type="radio" name="businessRun" value="manager" onChange={handleChange} />
              </p>
            </div>

            <div className='contactInfo'>
              <p>Who are the beneficial owners? If a company was listed as a member in the above section, please include all additional beneficial owners in this section.</p>
              {/* Iterate over beneficial owners */}
              {formData.beneficialOwners.map((owner, index) => (
                <React.Fragment key={index}>
                  <FormInput label="First Name" name={`beneficialOwners[${index}][firstName]`} onChange={handleChange} />
                  <FormInput label="Middle Name" name={`beneficialOwners[${index}][middleName]`} onChange={handleChange} />
                  <FormInput label="Last Name" name={`beneficialOwners[${index}][lastName]`} onChange={handleChange} />
                  <FormInput label="Country" name={`beneficialOwners[${index}][country]`} onChange={handleChange} />
                  <FormInput label="Street" name={`beneficialOwners[${index}][street]`} onChange={handleChange} />
                  <FormInput label="City" name={`beneficialOwners[${index}][city]`} onChange={handleChange} />
                  <FormInput label="State/Province" name={`beneficialOwners[${index}][state]`} onChange={handleChange} />
                  <FormInput label="Postal Code" type="number" name={`beneficialOwners[${index}][postalcode]`} onChange={handleChange} />
                </React.Fragment>
              ))}
            </div>

            <div className='importantNote'>
              <h3>Important Notice</h3>
              <p>To properly fulfill your Annual Report Prep and File service, incorporate.com will be the registered agent for this company. The fee for the first year of this service will be added to your cart when you check the box below, agreeing to these terms. In future years, you will receive an annual invoice for Registered Agent Service. Need more information? Call us at 00000000000.</p>
              <p>
                <input type="checkbox" name="importantNotice" onChange={handleChange} />
                <label>I have read the above statement and understand my requirement.</label>
              </p>
            </div>

            <div className='contactInfo'>
              <h3>Where should we ship your order?</h3>
              <FormInput label="First Name" name="shippingAddress[firstName]" onChange={handleChange} />
              <FormInput label="Middle Name" name="shippingAddress[middleName]" onChange={handleChange} />
              <FormInput label="Last Name" name="shippingAddress[lastName]" onChange={handleChange} />
              <FormInput label="Country" name="shippingAddress[country]" onChange={handleChange} />
              <FormInput label="Street" name="shippingAddress[street]" onChange={handleChange} />
              <FormInput label="City" name="shippingAddress[city]" onChange={handleChange} />
              <FormInput label="State/Province" name="shippingAddress[state]" onChange={handleChange} />
              <FormInput label="Postal Code" type="number" name="shippingAddress[postalcode]" onChange={handleChange} />
            </div>

            <div>
              <p>Do you want your LLC to exist indefinitely, or do you want your LLC to terminate on a certain date?</p>
              <p>
                I (we) plan to keep our LLC indefinitely.
                <input type="radio" name="llcDuration" value="indefinitely" onChange={handleChange} />
              </p>
              <p>
                I (we) want our LLC to terminate on a certain date.
                <input type="radio" name="llcDuration" value="certainDate" onChange={handleChange} />
              </p>
              <FormInput label="End Date" type="date" name="endDate" onChange={handleChange} />
            </div>

            <div className='incorporator'>
              <h3>Incorporator Information</h3>
              <p>If you have a specific incorporator in mind, please enter the details below:</p>
              <FormInput label="First Name" name="incorporator[firstName]" onChange={handleChange} />
              <FormInput label="Middle Name" name="incorporator[middleName]" onChange={handleChange} />
              <FormInput label="Last Name" name="incorporator[lastName]" onChange={handleChange} />
              <FormInput label="Country" name="incorporator[country]" onChange={handleChange} />
              <FormInput label="Street" name="incorporator[street]" onChange={handleChange} />
              <FormInput label="City" name="incorporator[city]" onChange={handleChange} />
              <FormInput label="State/Province" name="incorporator[state]" onChange={handleChange} />
              <FormInput label="Postal Code" type="number" name="incorporator[postalcode]" onChange={handleChange} />
            </div>

            <div>
              <FormInput label="Business Email" type="email" name="businessEmail" onChange={handleChange} />
              <FormInput label="Business Phone" type="tel" name="businessPhone" onChange={handleChange} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Cart data */}
      <div className="rightCartData">
        <div className="cartData">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default UserCompanyInfo;
