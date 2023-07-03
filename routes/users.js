const router = require("express").Router();
const crypto = require("crypto");
const User = require("./UserModel");
const nodemailer = require("nodemailer");

const {
    getUsers,
    saveUser,
    deleteUser
} = require('../controllers/usersController');

router.get('/', getUsers);
router.post('/', saveUser);
router.delete('/:id', deleteUser);

// Configure nodemailer with your email service details
const transporter = nodemailer.createTransport({
    service: "your_email_service",
    auth: {
      user: "your_email",
      pass: "your_password",
    },
  });
  
  // Generate a confirmation token
  const generateConfirmationToken = () => {
    return crypto.randomBytes(20).toString("hex");
  };
  
  // Send confirmation email
  const sendConfirmationEmail = (email, confirmationToken) => {
    const mailOptions = {
      from: "your_email",
      to: email,
      subject: "Email Confirmation",
      html: `
        <p>Please click the following link to confirm your email:</p>
        <a href="http://your_domain/confirm/${confirmationToken}">Confirm Email</a>
      `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  };
  
  router.post("/register", async (req, res) => {
    const { name, email, age } = req.body;
  
    try {
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email already registered" });
      }
  
      // Create and save the new user with confirmation token
      const confirmationToken = generateConfirmationToken();
      const newUser = new User({
        name,
        email,
        age,
        confirmationToken,
      });
  
      await newUser.save();
  
      // Send confirmation email
      sendConfirmationEmail(email, confirmationToken);
  
      return res.status(201).json({
        message: "User registration successful",
        data: { user: newUser },
      });
    } catch (error) {
      return res.status(500).json({
        message: "User registration failed",
        data: error,
      });
    }
  });
  
  router.get("/confirm/:token", async (req, res) => {
    const confirmationToken = req.params.token;
  
    try {
      // Find the user with the confirmation token
      const user = await User.findOne({ confirmationToken });
  
      if (!user) {
        return res.status(404).json({ message: "Invalid confirmation token" });
      }
  
      // Mark the user as confirmed
      user.isConfirmed = true;
      user.confirmationToken = undefined;
      await user.save();
  
      return res.json({ message: "Email confirmed successfully" });
    } catch (error) {
      return res.status(500).json({
        message: "Confirmation failed",
        data: error,
      });
    }
  });

module.exports = router;