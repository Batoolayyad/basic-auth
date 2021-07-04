'use strict';
const mongoose =require('mongoose');
//Craete a mongoose model
const usersSchema=mongoose.Schema({
    username: {type:String, required: true, unique:true},
    password:{type: String, required:true}
})