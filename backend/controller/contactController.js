const contactModel = require("../models/contactModel");

exports.contact = async (req, res) => {
  try {
    const { firstName,middleName,lastName,country,street,city,state,postalCode,phoneNumber,secondaryPhoneNumber,email,confirmEmail,industry, } = req.body;

    // Validation
    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !country ||
      !street ||
      !city ||
      !state ||
      !postalCode ||
      !phoneNumber ||
      !secondaryPhoneNumber ||
      !email ||
      !confirmEmail ||
      !industry
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Save contact information in the database
    const newContact = await contactModel.create({
      firstName,
      middleName,
      lastName,
      country,
      street,
      city,
      state,
      postalCode,
      phoneNumber,
      secondaryPhoneNumber,
      email,
      confirmEmail,
      industry,
    });

    return res
      .status(201)
      .json({ success: true, message: "Contact saved successfully", newContact });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `${error}` });
  }
};




//company information form submission handler
const UserCompanyInfo = require('../models/companyInfoModel');
exports.createUserCompanyInfo = async (req, res) => {
  try {
    const newInfo = new UserCompanyInfo(req.body);
    await newInfo.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully', data: newInfo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit form', error });
  }
};
