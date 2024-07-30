import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import '../pricing/quotePricing.css';

const QuotePricing = () => {
  return (
    <div className="container">
      <div className="quote-main-container">
        <div className="quote-full-container">
          <h2 className="quote-main-header">
            Select a State for Your New Business Entity
          </h2>
          <p className="quote-header-paragraph">
            Many businesses incorporate in their home states, but there are advantages to selecting other states.
          </p>
          <div className="quote-search-logo">
            <SlLocationPin className="quote-icon-map" />
            <span className='countryList'>
              <select name="Country" id="Country" className="quote-select">
                <option value="f">California</option>
              </select>
            </span>
          </div>
          <hr />
          <h2 className="quote-main-header">
            Choose the Type of Entity You'd Like to Form
          </h2>
          <p className="quote-header-paragraph">
            LLC is the most popular entity type for small businesses, but it's not for everyone. We've provided descriptions of some common entity types to help you choose.
          </p>
          <div className="quote-pricing-container">
          <div className="quote-pricing-card">
  <div className="quote-card-content">
    <h2 className="quote-card-header">Limited Liability Company (LLC)</h2>
    <p className="quote-card-paragraph">The most popular entity type for small businesses. Benefits of an LLC include:</p>
    <ul className="quote-card-list">
      <li><FaCheck className="quote-check-icon" /> Limited liability for business debts and obligations</li>
      <li><FaCheck className="quote-check-icon" /> Pass-through taxes and enhanced credibility</li>
      <li><FaCheck className="quote-check-icon" /> No residency requirement</li>
    </ul>
    <div className="quote-faq">
      Frequently Asked Questions 
      <FaExternalLinkAlt className="quote-faq-icon" />                       
    </div>
  </div>
  <div className="quote-pricing">
    <p className="quote-pricing-paragraph">Packages starting at</p>
    <h3>$99</h3>
    <p className="quote-bottom-paragraph">Plus State Fees</p>
    <button className="quote-select-button">Select</button>
  </div>
</div>

            {/* Repeat the pricing card if needed */}
          </div>
        </div>
        <div className="quote-left-side">
          <div className="quote-help-container">
            <p className="quote-help-header">Need help selecting a state for your new business entity?</p>
            <ul className="quote-help-links">
              <li><a href="#">Choosing Your Home State</a></li>
              <li><a href="#">Why Delaware is the 'Best'</a></li>
            </ul>
            <p className="quote-top-states-header">Top States to incorporate in</p>
            <ul className="quote-top-states-list">
              <li><a href="#">Delaware</a></li>
              <li><a href="#">California</a></li>
              <li><a href="#">Florida</a></li>
              <li><a href="#">New York</a></li>
              <li><a href="#">Nevada</a></li>
              <li><a href="#">Texas</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePricing;
