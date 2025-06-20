const User = require("../Model/LoginModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const nodemailer = require("nodemailer");

const register = async (req, res) => {
  const {
    username,
    email,
    password,
    firstname,
    secondname,
    phonenumber,
    gender,
  } = req.body;
  try {
    const exsitingUser = await User.findOne({ email });
    if (exsitingUser)
      return res.status(400).json({ message: "User Already Registered" });

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashpassword });

    await newUser.save();
    res.status(201).json({ message: "User register Successfully" });
    await sendEmail(
      email,
      "🎉 Welcome to Our App!",
      `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5; padding: 40px;">
    <table style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);">
      <tr>
        <td style="background-color: #000000; padding: 30px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px;">Welcome, ${username} 👋</h1>
          <p style="margin: 8px 0 0; font-size: 14px; color: #cccccc;">Thanks for joining Our App</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px 40px; color: #333333;">
          <p style="font-size: 15px; line-height: 1.6; color: #555555;">
            We're excited to have you onboard. Your account is ready and you can now log in to explore everything Our App has to offer.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="http://localhost:5173/login" style="background-color: #333333; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 500; display: inline-block;">
              Login Now
            </a>
          </div>
          <p style="font-size: 13px; color: #999999; text-align: center;">
            If you did not sign up for this account, please ignore this email.
          </p>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f0f0f0; text-align: center; padding: 20px; font-size: 12px; color: #777777;">
          &copy; ${new Date().getFullYear()} Our App. All rights reserved.<br/>
          <a href="http://localhost:5173" style="color: #333333; text-decoration: none;">Visit our site</a>
        </td>
      </tr>
    </table>
  </div>
  `
    );

    res.status(201).json({ message: "User registered and email sent!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail", // Or your email service (e.g. "hotmail", "yahoo")
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASS, // your app password
  },
});

console.log("User:", process.env.EMAIL_USER);
console.log("Pass:", process.env.EMAIL_PASS);

const SendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "Email not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP to user document
    user.otp = otp;
    user.otpExpire = Date.now() + 10 * 60 * 1000; // 10 mins
    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Password Reset",
      text: `Your OTP is: ${otp}`,
    });

    res
      .status(201)
      .json({ success: true, message: "OTP send successfully", otp: otp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || Date.now() > user.otpExpire) {
      return res.json({ success: false, message: "Invalid or expired OTP" });
    }

    // Clear OTP after successful verification
    user.otp = null;
    user.otpExpire = null;
    await user.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};


const resetPass = async (req, res) => {
  const { userId, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(userId, { password: hashed });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

const createAdmin = async () => {
  const existingAdmin = await User.findOne({ role: "admin" });
  if (existingAdmin) {
    console.log("Admin already exists.");
    return;
  }

  const hashPassword = await bcrypt.hash("admin@123", 10); // Set a secure password
  const adminUser = new User({
    username: "admin",
    email: "admin@gmail.com",
    password: hashPassword,
    role: "admin",
  });

  await adminUser.save();
  console.log("✅ Admin user created");
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    // console.log(user,"user")
    if (!user) return res.status(501).json({ message: "User not Found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(501).json({ message: "Incorrect Password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getlogData = async (req, res) => {
  try {
    const data = await User.find();
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error in getlogData:", error);
    return res.status(500).json({
      success: false,
      message: "getlogData server error",
      error: error.message,
    });
  }
};

const updatePass = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while updating password",
    });
  }
};

const PersonalInfo = async (req, res) => {
  const { firstname, secondname, gender, phonenumber, _id } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname,
        secondname,
        gender,
        phonenumber,
      },
      { new: true } // returns updated document
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Personal information updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update failed:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating personal info",
    });
  }
};

const AddressAdd = async (req, res) => {
  const {
    addfname,
    addsname,
    addpnumber,
    address,
    address2,
    pincode,
    city,
    state,
    country,
    _id,
  } = req.body;

  try {
    const updateAddress = await User.findByIdAndUpdate(
      _id,
      {
        addfname,
        addsname,
        addpnumber,
        address,
        address2,
        pincode,
        city,
        state,
        country,
      },
      { new: true } // returns updated document
    );

    if (!updateAddress) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Personal information updated successfully",
      data: updateAddress,
    });
  } catch (error) {
    console.error("Update failed:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating personal info",
    });
  }
};

const verifyUser = async (req, res) => {
  try {
    await res.status(201).json({
      success: true,
      message: "Profile data",
      user: req.user,
    });
    console.log(req.user);
  } catch (error) {
    res.status(501).json({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  register,
  login,
  updatePass,
  createAdmin,
  verifyUser,
  getlogData,
  PersonalInfo,
  AddressAdd,
  SendOTP,
  verifyOtp,
  resetPass,
};
