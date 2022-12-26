const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema ({
    firstname : {
        type : String,
        required : true,
        unique : true,
        minlength : 3
    },
    lastname : {
        type : String,
        required : true,
        unique : true,
        minlength : 3
    },
    username : {
        type : String,
        required : true,
        unique : true,
    },
    dob : {
        type:Date,
        required : true,
        unique : true,
    },
    gmail : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type :String,
        required : true,
        unique : true,
        minlength : 5
    },
    mobile : {
        type : Number,
        required : true,
        unique : true,
        minlength : 9
    },
    address : {
        type : String,
        required : true,
        unique : true,
    },
    city : {
        type : String,
        required : true,
        unique : true
    },
    district : {
        type : String,
        required : true,
        unique : true
    },
    pincode : {
        type : Number,
        required : true,
        unique : true,
        minlength : 6
    },

}, {
    timestamps : true
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;