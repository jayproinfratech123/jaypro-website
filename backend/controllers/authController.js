
import User from "../models/User.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken.js";


// ===============================
// Register User
// POST /api/auth/register
// ===============================
export const registerUser = async (req, res) => {

  const {
    name,
    email,
    password,
    phone,
    role,
  } = req.body;


  try {

    const exists = await User.findOne({
      email,
    });


    if (exists) {

      return res.status(400).json({
        message: "Email already registered",
      });

    }


    const allowedRoles = [
      "customer",
      "architect",
      "engineer",
      "interior_designer",
      "site_supervisor",
    ];


    const user = await User.create({

      name,

      email,

      password,

      phone,

      role:
        allowedRoles.includes(role)
          ? role
          : "customer",

    });



    const accessToken =
      generateAccessToken(
        user._id,
        user.role
      );


    const refreshToken =
      generateRefreshToken(
        user._id
      );


    user.refreshToken =
      refreshToken;


    await user.save();



    res.status(201).json({

      user: {

        id: user._id,

        name: user.name,

        email: user.email,

        role: user.role,

      },


      accessToken,

      refreshToken,

    });



  } catch (error) {


    res.status(500).json({

      message: error.message,

    });


  }

};





// ===============================
// Login Admin Only
// POST /api/auth/login
// ===============================
export const loginUser = async (
  req,
  res
) => {


  const {
    email,
    password,
  } = req.body;



  try {


    // Fixed Admin Credentials

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {


      let admin =
        await User.findOne({
          email:
            "admin@gmail.com",
        }).select("+password");



      // Create admin if not exists

      if (!admin) {


        admin =
          await User.create({

            name: "Admin",

            email:
              "admin@gmail.com",

            password:
              "123456",

            role:
              "admin",

          });


      }



      const accessToken =
        generateAccessToken(
          admin._id,
          "admin"
        );



      const refreshToken =
        generateRefreshToken(
          admin._id
        );



      admin.refreshToken =
        refreshToken;



      await admin.save();



      return res.json({

        user: {

          id: admin._id,

          name: admin.name,

          email: admin.email,

          role: "admin",

        },


        accessToken,

        refreshToken,

      });


    }



    return res.status(401).json({

      message:
        "Invalid admin email or password",

    });



  } catch (error) {


    res.status(500).json({

      message:
        error.message,

    });


  }

};





// ===============================
// Refresh Token
// POST /api/auth/refresh
// ===============================
export const refreshToken = async (
  req,
  res
) => {


  const {
    refreshToken,
  } = req.body;



  if (!refreshToken) {

    return res.status(401).json({

      message:
        "No refresh token",

    });

  }



  try {


    const jwt =
      (
        await import("jsonwebtoken")
      ).default;



    const decoded =
      jwt.verify(

        refreshToken,

        process.env.JWT_REFRESH_SECRET

      );



    const user =
      await User.findById(
        decoded.id
      ).select("+refreshToken");



    if (
      !user ||
      user.refreshToken !== refreshToken
    ) {


      return res.status(401).json({

        message:
          "Invalid refresh token",

      });


    }



    const accessToken =
      generateAccessToken(
        user._id,
        user.role
      );



    res.json({

      accessToken,

    });



  } catch (error) {


    res.status(401).json({

      message:
        "Refresh token expired or invalid",

    });


  }

};





// ===============================
// Get Current User
// GET /api/auth/me
// ===============================
export const getMe = async (
  req,
  res
) => {


  res.json(req.user);


};





// ===============================
// Logout
// POST /api/auth/logout
// ===============================
export const logoutUser = async (
  req,
  res
) => {


  try {


    const user =
      await User.findById(
        req.user._id
      );



    if (user) {

      user.refreshToken =
        null;


      await user.save();

    }



    res.json({

      message:
        "Logged out successfully",

    });



  } catch (error) {


    res.status(500).json({

      message:
        error.message,

    });


  }

};