import {createLink,authenticatingtok} from "../helper/stytchfun.js"
import client from "../Config/stytchConfig.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config()






export const userLOgin = async(req,res)=>{
    try {
        const email = req.body.email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(email);
        if(isValidEmail){
            const creatingLink = await createLink(email)
            // console.log("in login",email,creatingLink,isValidEmail)
            const params = {
                user_id:creatingLink?.user_id ,
              };
            const session_tok = await client.sessions.get(params)

            res.status(200).json(creatingLink)
        }else{
            res.status(401).json({message:"user unauthrized"})
        }
    } catch (error) {
        console.log(error)
    }

}


export const authorisedUser = async(req,res)=>{
    try {
        const token  = req.body.token
        let authUserToken = await authenticatingtok(token)
        // console.log("hey tok",authUserToken?.user?.emails[0]?.email)
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        const JWTtoken = jwt.sign({
            id: authUserToken?.user_id
        }, jwtSecretKey, {expiresIn: "30hr"})


        if(authUserToken){
            authUserToken.session_token = JWTtoken
        }
        res.json({authUserToken})
        
    } catch (error) {
        console.log(error)
    }
}