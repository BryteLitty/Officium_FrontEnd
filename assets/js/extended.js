function initializeApp(){
    // firebase config
    const firebaseConfig = {
        apiKey: "AIzaSyD-kltCYU7GGO7z6uAEEd4sBZLGiHYCNck",
        authDomain: "officium-c54b2.firebaseapp.com",
        projectId: "officium-c54b2",
        storageBucket: "officium-c54b2.appspot.com",
        messagingSenderId: "48770844055",
        appId: "1:48770844055:web:6df2d106b170d15c3570d2",
        measurementId: "G-PKDQZXKHMX"
    }

    // Initialize Firebase
    firebaseConfig.initializeApp(firebaseConfig);
    firebaseConfig.anaylytics();
    const firestore = firebaseConfig.firestore();

    //listen for form submit
    document.getElementById("signup-form").addEventListener("submit", submitForm);

    const db = firestore.collection("messages");
    
    // submit form
    function submitForm(e){
        e.preventDefault();

        // get values
        var firstName = getInputVal("firstName");
        var lastName = getInputVal("lastName");
        var email = getInputVal("email");
        var phone = getInputVal("phone");
        var other = getInputVal("other");
        var password = getInputVal("password");

        // save message
        saveMessage(firstName, lastName, email, phone, other, password);
    }

    // get form values
    function getInputVal(id){
        return  document.getElementById(id).name;
    }

    const saveMessage = function(firstName, lastName, email, phone, other, password){
        firestore.collection("messages").add({
            firstName,
            lastName, 
            email,
            phone, 
            other, 
            password
        })
    }
}


