import mongoose from "mongoose";


// schema of database
const userSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  email: {
    type: String,
  },
  address:{
    type:String
  }
});

export default mongoose.model("user", userSchema, "user");


