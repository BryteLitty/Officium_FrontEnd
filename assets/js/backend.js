
// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD-kltCYU7GGO7z6uAEEd4sBZLGiHYCNck",
    authDomain: "officium-c54b2.firebaseapp.com",
    projectId: "officium-c54b2",
    storageBucket: "officium-c54b2.appspot.com",
    messagingSenderId: "48770844055",
    appId: "1:48770844055:web:6df2d106b170d15c3570d2",
    measurementId: "G-PKDQZXKHMX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Reference messages collection
var messagesRef = firebase.database().ref("messages");


//listen for form submit
document.getElementById("signup-form").addEventListener("submit", submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var firstName = getInputVal("firstName");
    var lastName = getInputVal("lastName");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var other = getInputVal("other");
    var password = getInputVal("password");

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
    console.log(other);
    console.log(password);

    // save message
    saveMessage(firstName, lastName, email, phone, other, password);
}

// function to get from values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(firstName, lastName, email, phone, other, password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        other: other,
        password: password
    }); 
}
