const fs = require('fs') ;
const path = require('path') ;
const Log = require('../models/log') ;
const logController = require('../controller/logController')



const dataFilePath = process.env.DATA_FILE_PATH ;
const readAndUploadData = async() => {
    try{
        const data = JSON.parse(fs.readFileSync(dataFilePath  , 'utf8'))  ;
        
        //upload new entries to the database and log the operation 

        // assuming datamodels  is your mongoose model for the data you want to save  
        for(const entry of data ) {
              const existingEntry = await DataModel.findOne({id:entry.id}) ;
              if(!existingEntry){
                await DataModel.create(entry) ;
                logController.log('information' , 'New entry added : ${JSON.stringify(entry)}') ;

              }
        }
        logController.log('success' , 'Data upload completed' ) ;
    }catch(err){
        logController.log('err' , 'Error uploading data : ${err.message}') ;
    }
}
module.exports = {readAndUploadData};