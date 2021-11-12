function initializeApp() {

    var firebaseConfig ={
        apiKey: "AIzaSyBlKtHSHez53z6LqZ4GyljzBk5Dq6G95oM",
        authDomain: "white-web-cac.firebaseapp.com",
        databaseURL: "https://white-web-cac.firebaseio.com",
        projectId: "white-web-cac",
        storageBucket: "white-web-cac.appspot.com",
        messagingSenderId: "16825950723472",
        appId: "1:168259507672:web:f352b0c66828d746b06d7904ead",
        measurementId: "G-KXTSR34654V"
    };
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const firestore= firebase.firestore()
    
    // Listen for form submit
    const form= document.getElementById('contactForm');
    form.addEventListener('submit', submitForm);
    const db = firestore.collection("ContactFormData");
    
    // Submit form
    function submitForm(e){
        e.preventDefault();
    
        //Get value
        var name = getInputVal('name');
        var company = getInputVal('company');
        var email = getInputVal('email');
        var phone = getInputVal('phone')
        var message = getInputVal('message');
    
        // Save message
        saveMessage(name, company, email, phone, message);
    
    
        // Show alert
        document.querySelector('.alert').style.display = 'block';
    
        // Hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },3000);
    
        // Clear form
        document.getElementById('contactForm').reset();
    }
    
    // Function to get form value
    function getInputVal(id){
        return document.getElementById(id).value;
    }
    
    
    // Save message to firebase
    const saveMessage= function(name, company, email, phone, message){
        firestore.collection("ContactFormData").add({
            name,
            company,
            email,
            phone,
            message
        })
    }
}