const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String
        
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},
{timestamps:true}
)

module.exports = mongoose.model('maid-finder-user',signupSchema)



