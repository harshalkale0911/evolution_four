const cron = require('node-cron') ;
const dataService = require('./dataService') ;

const converMonthName = (expression)=>{
    if(typeof expression !== 'string'){
        throw new Error('Invalid expression : must be a string') ;
    }
    const items = ['jan' , 'feb' , 'mar ' , 'apr' , 'may' ,'jun' , 'jul' , 'aug' , 'sep' , 'oct' , 'nov' , 'dec' ] ;
    for(let i = 0 ; i< items.length ; i++){
        expression = expression.replace(new RegExp(items[i] , 'g' ) , parseInt(i , 10) + 1 ) ;
        return expression
     }
}
const scheduleDataUpload = ()=>{
    const expression = "jan-feb-mar" ;
    try{
            const result = converMonthName(expression) ;
            console.log(result) ;

    }catch(err){
          console.log(err.message) ;
    }
} ;
module.exports = {scheduleDataUpload} ;