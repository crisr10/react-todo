var moment = require('moment');

console.log(moment().format());

// January 1rst 1970 @ 12:00 -> 0
// January 1rst 1970 @ 12:01 -> 60

var now = moment();
console.log('Current timestamp ', now.unix());

var timestamp = 1498498238;
var currentMoment = moment.unix(timestamp);

console.log('current moment ', currentMoment.format('MMM D, YYYY @ h:mm a'));

// January 3rd, 2017 @ 12:13 AM
console.log('current moment ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

