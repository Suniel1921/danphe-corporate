import React, { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import "../pricing/quotePricing.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const QuotePricing = () => {
  const [priceData, setPriceData] = useState([]);

  const getAllPriceData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getAllPrice`);
      if (response.data.success) {
        setPriceData(response.data.allPrice);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    getAllPriceData();
  }, []);

  return (
    <div className="container">
      <div className="quote-main-container">
        <div className="quote-full-container">
          <h2 className="quote-main-header">
            Select a State for Your New Business Entity
          </h2>
          <p className="quote-header-paragraph">
            Many businesses incorporate in their home states, but there are
            advantages to selecting other states.
          </p>
          <div className="quote-search-logo">
            <SlLocationPin className="quote-icon-map" />
            <span className="countryList">
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
            LLC is the most popular entity type for small businesses, but it's
            not for everyone. We've provided descriptions of some common entity
            types to help you choose.
          </p>
          <div className="quote-pricing-container">
            {priceData.map((pData) => (
              <div className="quote-pricing-card" key={pData.id}>
                <div className="quote-card-content">
                  <h2 className="quote-card-header">{pData.heading}</h2>
                  <p className="quote-card-paragraph">{pData.para}</p>
                  
                  <ul className="quote-card-list">
                    {pData.contentList.map((content, index) => (
                      <li key={index}>
                        <FaCheck className="quote-check-icon" />
                        {content}
                      </li>
                    ))}
                  </ul>

                  <div className="quote-faq">
                    Frequently Asked Questions
                    <FaExternalLinkAlt className="quote-faq-icon" />
                  </div>
                </div>
                <div className="quote-pricing">
                  <p className="quote-pricing-paragraph">
                    Packages starting at
                  </p>
                  <h3>$99</h3>
                  <p className="quote-bottom-paragraph">Plus State Fees</p>
                 <Link to={`/package-selection/${pData._id}`}> <button className="quote-select-button">Select</button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="quote-left-side">
          <div className="quote-help-container">
            <p className="quote-help-header">
              Need help selecting a state for your new business entity?
            </p>
            <ul className="quote-help-links">
              <li>
                <a href="#">Choosing Your Home State</a>
              </li>
              <li>
                <a href="#">Why Delaware is the 'Best'</a>
              </li>
            </ul>
            <p className="quote-top-states-header">
              Top States to incorporate in
            </p>
            <ul className="quote-top-states-list">
              <li>
                <a href="#">Delaware</a>
              </li>
              <li>
                <a href="#">California</a>
              </li>
              <li>
                <a href="#">Florida</a>
              </li>
              <li>
                <a href="#">New York</a>
              </li>
              <li>
                <a href="#">Nevada</a>
              </li>
              <li>
                <a href="#">Texas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePricing;
