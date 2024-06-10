const mongoose = require('mongoose') ;

const logSchema = new mongoose.Schema({type : {
    type:{
        type:String , 
        enum : ['information' , 'warn' , 'error' , 'success'] ,
        required: true 
    } ,
    message:{
        type:String ,
        required:true 
    } ,
    timestamp:{
        type:String,
        // default:Data.now
    }
}})

module.exports = mongoose.model('Log' , logSchema) ;