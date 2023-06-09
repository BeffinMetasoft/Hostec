const mongoose = require("mongoose")

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const ClientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        validate: [validateEmail, 'Please fill a valid email address'],
        required: [true, "Email is required"],
        unique: true
    },
    shopperId:{
        type:String,
        required: [true, "Id is required"],
        unique: true
    },
    phone: {
        type: Number,
        minlength: [10, "phone number must be 10 digits"],
        required: [true, "Phone number is required"]
    },
    password: {
        type: String,
        minlength: [6, "Password must contain 6 letters"],
        required: [true, "Password is required"]
    },
    block: {
        type: Boolean,
       default:false
    },
  
   
})
mongoose.set('strictQuery', false);

const Client = mongoose.model('Client',ClientSchema)
module.exports= Client