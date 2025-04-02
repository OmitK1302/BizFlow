import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import User from "./models/userSchema.js";

dotenv.config();
const app = express();

// Mongoose connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Data base connect");
});

app.use(express.json());
app.use(cookieParser());

// bakend bydefault page
app.get("/", (req, res) => {
  res.send(`Backend working on port ${process.env.PORT}`);
});

// User register
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log("name", firstName);
  const dublicateUser = await User.findOne({ email: email.toLowerCase() });
  if (dublicateUser) {
    console.log("user already available");
    res.status(406).json({ message: "user already available" });
  } else {
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password:password,
    });
    console.log("signup successfull", user);

    res.status(200).json({ message: "signup successfull" });
  }
});

// login
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(411).json({message:"email and password required"});
    }
  
    const userPresent=await User.findOne({email:email.toLowerCase()});

    if(userPresent){
        const isPasswordValid=await userPresent.isPasswordCorrect(password);
        if(isPasswordValid){
            const accessToken=await userPresent.generateAccessToken();
            const option={
                httpOnly:true,
                secure:false,
            };
            console.log("Access Token :",accessToken);
            return res.status(200).cookie("accessToken",accessToken,option).json({message:"login successfully"});

        }
        else{
            res.status(406).json({message:"Incorrect password"});
        }
    }

    else{
        res.status(401).json({message:"email not valid"});
    }
        
 
});

//

app.listen(process.env.PORT, () => {
  console.log(`Server runing on http://localhost:${process.env.PORT}`);
});
