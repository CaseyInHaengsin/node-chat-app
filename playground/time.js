var moment = require('moment'); 

// var date = moment(); 

// date.add(100, 'years');
// console.log(date.format('MMM Do, YYYY'));

//10:35 am
//6:01 am


var createdAt = 1234; 
var date = moment(1234);

var sometimestamp = moment().valueOf(); 
console.log(sometimestamp);

console.log(date.format('h:mm a')); 

