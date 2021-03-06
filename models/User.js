const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// const userSchema = mongoose.Schema(
//     {
//         name: String,
//         email: String,
//         password: String
//     }
// )

const User = mongoose.model('User', userSchema);
module.exports = User;
