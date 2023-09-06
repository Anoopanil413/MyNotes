

import client from "../Config/stytchConfig.js";

export const authMiddleware = async(req, res, next) => {

    const sessionToken = req.headers.sessiontoken;
    console.log("sessionToken hellllllllllll",sessionToken)
    await client.sessions
      .authenticate({ session_token: sessionToken })
      .then(() => {
        next();
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  };