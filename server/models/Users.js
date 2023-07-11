const mongoose= require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,

        },
        pho:{
            type:Number,
            required: true,

        },
        message:{
            type:String,
            required: true,

        },
});
// created usermodel collection 
const UserModel =mongoose.model('UserModel', UserSchema);

module.exports = UserModel;