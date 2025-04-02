import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Schema=mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

    role: {
        type: String,
        default: "User",
    }
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        next();
    }
        // return next();
    this.password = await bcrypt.hashSync(this.password,10);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            firstName:this.firstName,
            lastName:this.lastName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }

    );
};

const User = mongoose.model("User", userSchema);
export default User;
