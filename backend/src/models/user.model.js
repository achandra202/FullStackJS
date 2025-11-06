import mongoose from 'mongoose';//ES Modules (ESM): modern approach

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true    
    },
    password: {
        type: String,   
        required: true
    },
    email: {    
        type: String,
        required: true,
        unique: true
    }
},{ timestamps: true});

export const User = mongoose.model('User', userSchema);//ES Modules (ESM): modern approach

