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
