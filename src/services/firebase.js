import firebase from 'firebase';

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const authentication = firebase.auth();

export function login(user){
    return authentication.signInWithEmailAndPassword(user.email, user.password)
}
export function logout(){
    return authentication.signOut()
}
export function signup(user){
    return authentication.createUserWithEmailAndPassword(user.email,user.password)
}

export let isAuth = new Promise((resolve, reject) => {
  authentication.onAuthStateChanged(user=>{
     return resolve(!!user)
  })
});
