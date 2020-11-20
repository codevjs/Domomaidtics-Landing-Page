// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCb3iLrsxdPlvM-aps_3HYVqLdrzKV5BS4",
    authDomain: "domomaidtics-firebase.firebaseapp.com",
    databaseURL: "https://domomaidtics-firebase.firebaseio.com",
    projectId: "domomaidtics-firebase",
    storageBucket: "domomaidtics-firebase.appspot.com",
    messagingSenderId: "739134068131",
    appId: "1:739134068131:web:278f16faa8a397aa513616",
    measurementId: "G-L13J02MWG1"
};

// Initialize Firebase
firebase.initializeApp(config);

const analytics = firebase.analytics();

analytics.logEvent('start_page');

