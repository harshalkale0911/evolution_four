const express = require('express') ;
const router = express.Router() ;
const Log = require('../models/log') ;
const logController = require('../controllers/logController');
const dataController = require('../controllers/dataController');
 

router.get('/logs' , async(req , res) =>{
    const {type} = req.query ;
    let logs ;
    if(type){
        logs = await Log.find({type}).sort({timestamp:-1}) ;

    }else{
        logs = await 
        Log.find().sort({timestamp:-1}) ;

    }
    res.render('logDashboard' , {logs}) ;
})

 

// Log dashboard route with filtering options
router.get('/logs', logController.getLogs);

// Create new entry route
router.post('/data', dataController.createData);

// Update existing entry route
router.put('/data/:id', dataController.updateData);

// Delete entry route
router.delete('/data/:id', dataController.deleteData);

module.exports = router;


 