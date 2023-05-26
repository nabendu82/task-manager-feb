const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String
    },
    email: {
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('pass')){
                throw new Error('Password cannot contain "pass"')
            }
        }
    },
    age: {
        type: Number,
        default: 0
    }
})

module.exports = User