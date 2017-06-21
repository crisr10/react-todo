// function add(a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];

// console.log(add(...toAdd));

// var groupA = ['Raul', 'Cristian'];
// var groupB = ['Diana', 'Daisy'];

// var final = [...groupA, ...groupB];

// console.log(final);

var person = ['Cristian', 25];
var personTwo = ['Daisy', 23];

function greeting(name, age) {
	return 'Hi ' + name + ', you are ' + age;
};

console.log(greeting(...person));
console.log(greeting(...personTwo));

var names = ['Raul', 'Daisy'];
var final = ['Cristian', ...names];

// for (var i = 0; i < final.length; i++ ) {
// 	console.log('Hi ' + final[i]);
// };

final.forEach(function(name) {
	console.log('Hi ' + name);
});

