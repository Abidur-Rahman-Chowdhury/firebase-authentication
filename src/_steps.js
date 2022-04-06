/* 
* Steps to use firebase
* 1. create a project on console.firebase.google.com
* 2. install (npm install firebase)
* 3. Register web app in firebase
* 4. copy firebase init with config from firebase project settings firebase.init.js
* 5. Register Web App in firebase
* 6. export default app from firebase.init.js 
* 7. import app firebase init.js into your app.js
* 8. import getAuth from firebase/auth and create const auth = getAuth(app) in app.js file
* 9. turn on google authentication enable google sign-in
* 10. create google provider
* 11. use signInWithPopup and pass (auth, provider)
* 12. handel .then(if successful) and catch error (if error)
*/