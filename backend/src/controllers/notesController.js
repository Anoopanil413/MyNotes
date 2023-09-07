
import User from "../Model/user.js"

export const createNote = async(req,res)=>{
try {
    console.log("helooooooo",req?.body?.content)
    
    
} catch (error) {
    
}
}

export const getNotes = async(req,res)=>{
  
        const user = await User.find({ email: req.id });
        console.log("getting all notes",req.id,user)

        if(user.length!=0){
            res.status(200).json({user})
        }else{
            const userData = {
                email:req.id
            }
            const newUser = new User(userData);
            console.log(newUser)
            const user = await User.find({ email: req.id });

            res.status(200).json({user})


        }
        

}