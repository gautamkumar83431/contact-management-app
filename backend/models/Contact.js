import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  message:String
},{timestamps:true});

export default mongoose.model("Contact",schema);