

import client from "../Config/stytchConfig.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

export const authMiddleware = async(req, res, next) => {

    const sessionToken = req.headers.sessiontoken;
    
    const emailId = req.query['emailId '].trim()
       console.log("sessionToken hellllllllllll",sessionToken)

    jwt.verify(String(sessionToken), process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
         res.status(401).json({ message: "Invalid TOken" });
      }
      console.log("VERIFYING TOKEN WITH :",user,emailId);
      req.id = emailId
    });
    next();
  };