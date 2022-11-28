const n  =document.getElementById("name")


// Import the functions you need from the SDKs you need
//import  initializeApp  from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import {getDatabase, ref, set} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0uH-RR01cPKI4e-EAjsGa7tI7Md_qfPg",
  authDomain: "experiment-6cc7f.firebaseapp.com",
  databaseURL: "https://experiment-6cc7f-default-rtdb.firebaseio.com",
  projectId: "experiment-6cc7f",
  storageBucket: "experiment-6cc7f.appspot.com",
  messagingSenderId: "998873189839",
  appId: "1:998873189839:web:a848cc091c852fabca96ba",
  measurementId: "G-HTGV8BGSRQ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const db = firebase.database()


const id = document.getElementById("email")
const phone = document.getElementById("phone")
const  location_to= document.getElementById("to")
const location_from = document.getElementById("from")
const vehicle_type = document.getElementById("type")
const comments = document.getElementById("comments")
const vehicle_no = document.getElementById("no_of_vehicle")
const submit = document.getElementById("btn")

//const database = app.database();
//const reference = ref(dp,'users/',+email)

submit.addEventListener('click',(e)=>{
    e.preventDefault();

    db.ref('/users/'+ phone.value).set({
         customer_id:id.value,
        //customer_name: name.value,
        customer_name:n.value,
        //customer_phone: phone.value,
        customer_to: location_to.value,
        customer_from : location_from.value,
        customer_vehicle: vehicle_type.value,
        custommer_comments: comments.value,
       // customer_no_of_vehicle: vehicle_no.value   need to check the syntax


    });


});
//const database = firebase.database();


