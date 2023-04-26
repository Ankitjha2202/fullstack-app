import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
 name:{
    type:String,
    required:[true, "Please enter your name"]
 },
 email:{
    type:String,
    required:[true, "Please enter your name"],
    unique: true,
    validate:validator.isEmail,
 },


});

export const User =moongose.model("User",schema);