
import client from "../Config/stytchConfig.js";


export const createLink = async(email)=>{
    try {
        
const params = {
    email,
    login_magic_link_url: "http://localhost:5173/auth",
    signup_magic_link_url: "http://localhost:5173/auth",
  };
  const response = await client.magicLinks.email.loginOrCreate(params);
  return response
        
    } catch (error) {
        console.log(error)
    }
}

export const    authenticatingtok = async(token)=>{
    try {
        const params = {
            token: token,
          };
        const sessionToken = await client.magicLinks.authenticate(params);
          return sessionToken
    } catch (error) {
        console.log("authentication error",error)
    }
}



