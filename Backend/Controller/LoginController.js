const User = require("../Model/LoginModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  const { username, email, password } = req.body;
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
          <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <div style="background-color: #4CAF50; color: white; padding: 20px 30px;">
                <h1 style="margin: 0;">Welcome, ${username} 👋</h1>
              </div>
              <div style="padding: 30px;">
                <p style="font-size: 16px; color: #333;">Thank you for registering with <strong>Our App</strong>.</p>
                <p style="font-size: 16px; color: #555;">
                  We’re excited to have you on board. You can now log in and explore all the amazing features waiting for you!
                </p>
                <a href="http://localhost:5173/login" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Login Now</a>
                <p style="margin-top: 30px; font-size: 14px; color: #999;">If you didn’t sign up for this account, you can ignore this email.</p>
              </div>
              <div style="background-color: #f1f1f1; text-align: center; padding: 15px;">
                <p style="margin: 0; font-size: 12px; color: #777;">&copy; ${new Date().getFullYear()} Our App. All rights reserved.</p>
              </div>
            </div>
          </div>
      `
    );

    res.status(201).json({ message: "User registered and email sent!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    if (!user) return res.status(501).json({ message: "User not Found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(501).json({ message: "Incorrect Password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "100h",
    });
    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

module.exports = { register, login, updatePass, createAdmin };
