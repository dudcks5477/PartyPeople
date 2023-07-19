const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type : String,
        required : true,
        unique : true,
    },
    age: {
        type : Number,
        required : true,
    },
    married : {
        type: Boolean,
        required: true, //필수
    },
    comment : String, //필수 아님
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User',userSchema)