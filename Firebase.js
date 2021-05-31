import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCRJUs-bF4a7yYJkfFz1M9mEsIKQoUhwf0",
    authDomain: "millets-clique.firebaseapp.com",
    databaseURL: "https://millets-clique-default-rtdb.firebaseio.com",
    projectId: "millets-clique",
    storageBucket: "millets-clique.appspot.com",
    messagingSenderId: "633994435840",
    appId: "1:633994435840:web:023f7667a1b59bf4a927e5",
    measurementId: "G-E2PJ1VF95Q"
 
})

const auth = firebase.auth();



export { auth };