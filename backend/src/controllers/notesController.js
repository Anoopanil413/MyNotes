
import User from "../Model/user.js"

export const createNote = async(req,res)=>{
try {
    // console.log("helooooooo",req?.body?.content,req.id)
    const userupdate = await User.findOneAndUpdate(
        { email: req.id }, 
        {
          $push: {
            'notes': { content: req?.body?.content } 
          }
        },
        { new: true })

    const user = await User.find({email:req.id})
    res.status(200).json({user})
} catch (error) {
    console.log(error)

}
}

export const getNotes = async(req,res)=>{

    try {
        const user = await User.find({ email: req.id });
        console.log("getting all notes",req.id,user)

        if(user.length!=0){
            res.status(200).json({user})
        }else{
            const userData = {
                email:req.id
            }
            const newUser = new User(userData);
            await newUser.save();
            console.log(newUser)
            const user = await User.find({ email: req.id });

            res.status(200).json({user})

        }
        
    } catch (error) {
        console.log(error)
    }
  

        

}


export const deleteNote = async(req,res)=>{
    try {
        const notId =req.query['v'].trim()

        const usrUpdate = await User.findOneAndUpdate(
            { email: req.id },
            {
              $pull: {
                'notes': { _id: notId } 
              }
            },
            { new: true })


            const user = await User.find({ email: req.id });
        res.status(200).json({user})

    } catch (error) {
        console.log(error)
    }
}