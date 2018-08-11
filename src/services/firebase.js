import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

const authentication = firebase.auth()
const storage = firebase.storage()
const database = firebase.database()

export function login(user){
    return authentication.signInWithEmailAndPassword(user.email, user.password)
}
export function logout(){
    return authentication.signOut()
}
export function signup(user){
    return authentication.createUserWithEmailAndPassword(user.email,user.password)
}
export let userInfo = new Promise((resolve, reject) => {
  authentication.onAuthStateChanged(user=>{
    if(user != null)
        return resolve(user)
    else
        return reject(null)
  })
})
export function upload(file){
    return storage.ref('/images').child(Date.now().toString()).put(file)
}
export function create(collection, obj){
    return database.ref(collection).push(obj)
} 
export function remove(collection, id){
    return database.ref(collection).child(id).remove()
} 
export function list(collection){
    return database.ref(collection)
} 
export function read(collection, id){
    return database.ref(collection+"/"+id)
} 
