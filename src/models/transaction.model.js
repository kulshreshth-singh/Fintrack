import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
    
    amount :{
         type: Number,
         required: [true, 'Price amount is required'], 
         min: [1, 'Price cannot be negative'],
         max : 1000000000,
        validate : {
            validator: Number.isInteger,
            message: '{VALUE} is not a valid integer amount in paisa.'
        }
       
    },
    description : {
        type: String,
        trim : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    status : {
        type : String,
        enum : ["planned" , "completed" , "cancelled"],
        default : "completed"
    },
    type : {
        type : String,
        enum : ["income" , "expense"],
        default : "expense"
    },
    date : {
        type : Date,
        required : true
    },
   category: {
    type: String,
    required: [true, "Transaction category is required"],
    enum: {
        values: [
            "Food",
            "Transport",
            "Housing",
            "Utilities",
            "Healthcare",
            "Shopping",
            "Education",
            "Entertainment",
            "Salary",
            "Business",
            "Investment",
            "Other"
        ],
        message: "Please select a valid transaction category"
    },
    trim: true
    }
},
{
    timestamps : true
})

export const Transaction = mongoose.model("Transaction" , transactionSchema)