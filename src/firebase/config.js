import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWxlUmPA-wj0nqEnDSzHmRI4P_-fmg4FQ",
    authDomain: "blog-vue-firebase-sites.firebaseapp.com",
    projectId: "blog-vue-firebase-sites",
    storageBucket: "blog-vue-firebase-sites.appspot.com",
    messagingSenderId: "567843829499",
    appId: "1:567843829499:web:691062c154c705c835e25e"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }