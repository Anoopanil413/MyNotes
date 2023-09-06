import {createLink,authenticatingtok} from "../helper/stytchfun.js"
import client from "../Config/stytchConfig.js";



export const userLOgin = async(req,res)=>{
    try {
        const email = req.body.email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(email);
        if(isValidEmail){
            const creatingLink = await createLink(email)
            // console.log("in login",email,creatingLink,isValidEmail)
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
        // console.log("here the session token is sent",authUserToken)
        const params = {
            user_id:authUserToken?.user_id ,
          };
        const session_tok = await client.sessions.get(params)
     
        console.log("building session token",authUserToken)

        res.json({authUserToken})
        
    } catch (error) {
        console.log(error)
    }
}