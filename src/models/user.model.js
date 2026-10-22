import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fullName : {
        type : String,
        required : true,
        trim : true 
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    passwordHash : {
        type : String,
        required: [true,'password is required']
    },
    avatar : {
        type : String  // cloudinary url
    },
    refreshToken : {
        type : String
    },
    timezone : {
        type: String,
        required: true,
        default: "Asia/Kolkata",
        trim: true
       
    }

},
{
    timestamps : true
});


export const User = mongoose.model("User",userSchema);