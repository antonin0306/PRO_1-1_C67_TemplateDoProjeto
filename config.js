import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
apiKey: "AIzaSyApDKT0KFQTH4BeE0JvjCBqQdGu8D8bs4o",
 authDomain: "projeto-67-fa6c6.firebaseapp.com",
 databaseURL: "https://projeto-67-fa6c6-default-rtdb.firebaseio.com",
  projectId: "projeto-67-fa6c6",
   storageBucket: "projeto-67-fa6c6.appspot.com",
    messagingSenderId: "453647043704",
 appId: "1:453647043704:web:bc6b6b1b812e77731c718d"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();