import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Schema=mongoose.Schema;
const user=new Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        require:true,
    },

});

user.pre("save",async function (next) {
    if(!this.isModified("password")) 
        return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
});

user.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}

user.methods.generateAccessToken=async function () {
    return jwt.sign(
        {
             _id: this._id,
             email: this.email,

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }

    );
};

const User=mongoose.model("user",user);
export {User};