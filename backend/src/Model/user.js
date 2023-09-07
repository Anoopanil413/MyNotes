import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
      trim: true
    }
  });

const userSchema = new mongoose.Schema({

    email: {
      type: String,
      required: true,
      trim: true
    },
    notes:[noteSchema] 
})




export default mongoose.model('User', userSchema);
