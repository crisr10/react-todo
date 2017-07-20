import firebase from 'firebase';

try {
	var config = {
	  apiKey: "AIzaSyDbDlzyK4-lW-tAmL7XMK4CpgsX2JsAOs4",
	  authDomain: "cristian-todo-app.firebaseapp.com",
	  databaseURL: "https://cristian-todo-app.firebaseio.com",
	  projectId: "cristian-todo-app",
	  storageBucket: "cristian-todo-app.appspot.com",
	  messagingSenderId: "538666993345"
	};
	firebase.initializeApp(config);
} catch (e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;