import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDbDlzyK4-lW-tAmL7XMK4CpgsX2JsAOs4",
  authDomain: "cristian-todo-app.firebaseapp.com",
  databaseURL: "https://cristian-todo-app.firebaseio.com",
  projectId: "cristian-todo-app",
  storageBucket: "cristian-todo-app.appspot.com",
  messagingSenderId: "538666993345"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'TodoApp',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Cristian',
		age: 25
	},
});

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
// 	console.log('child_added', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
// 	text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'Keep studying React'
});
console.log('Todo id', newTodoRef.key);

todosRef.push({
	text: 'Start the React Native and Redux course'
});
console.log('Todo id', newTodoRef.key);


