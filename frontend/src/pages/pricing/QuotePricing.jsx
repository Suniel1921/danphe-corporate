import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import '../pricing/quotePricing.css';
import { FaExternalLinkAlt } from "react-icons/fa";


const Quotepricing = () => {
  return (
    <div className='maincontainer'>
    <div className='fullContainer'>
        <h2 className='mainheader'>
            Select a State for Your New Business Entity
        </h2>
        <p className='headerpar'>
            Many business incorporate in their home states, but there are advantages to selecting oher states.
        </p>
        <div className="searchlogo">
            <SlLocationPin className='iconMap' />
            <span>
                <select name="Country" id="Country" >
                    <option value="f">please select country</option>
                </select>
            </span>
        </div>
        <hr />
        <h2 className='mainheader'>
            Choose the Type of Entity You'd Like to Form
        </h2>
        <p className='headerpar'>
            LLC is the most popular entity type for small businesses, but it's not for everyone. We've provided descriptions od some common entity types to help you choose. 
        </p>
        <div className="pricing-container">
            <div className="pricing-card">
                <div className="card-content">
                    <h2 className='cardheader'>Limited Liability Company (LLC)</h2>
                    <p className='cardParagraph'>The most popular entity type for small businesses. Benefits of an LLC include:</p>
                    <ul>
                        <li>Limited liability for business debts and obligations</li>
                        <li>Pass-through taxes and enhanced credibility</li>
                        <li>No residency requirement</li>
                    </ul>
                    <div className='FQA'>
                        Frequently Asked Questions 
                        <FaExternalLinkAlt className='FQAIcon'/>                       
                    </div>
                </div>
                <div className="pricing">
                    <p className='PricingParagraph'>Packages starting at</p>
                    <h3>$99</h3>
                    <p className='buttomParagraph'>Plus State Fees</p>
                    <button className="select-button">Select</button>
                    
                </div>
            </div>
        </div>
    </div>
    <div className='leftside'>
            
    </div>
    </div>
  )
}

export default Quotepricing




