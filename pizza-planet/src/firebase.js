
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAIQWhEawZmlRLUGmQTi8aUL_7P4_pUPf0",
    authDomain: "pizza-planet-5c0c3.firebaseapp.com",
    databaseURL: "https://pizza-planet-5c0c3.firebaseio.com",
    projectId: "pizza-planet-5c0c3",
    storageBucket: "pizza-planet-5c0c3.appspot.com",
    messagingSenderId: "413299754521",
    appId: "1:413299754521:web:95a90da63175f373258c88"
}

firebase.initializeApp(config)
const db = firebase.firestore()
export const firebaseAuth = firebase.auth()

export const dbMenuRef = db.collection('menu')