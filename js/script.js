//this file will hande logic and server requests for main page including email requests to my email
//this file will also handle the logic for the contact form

//this function will handle the email request to my email
function sendEmail(){
    //get the email address
    var email = document.getElementById("email").value;
    //get the subject
    var subject = document.getElementById("subject").value;
    //get the message
    var message = document.getElementById("message").value;
    //check if the email is valid
    if(email == "" || subject == "" || message == ""){
        alert("Please fill out all fields");
    }else{
        //send the email
        Email.send({
            Host : "smtp.gmail.com",
            Username : "",
            Password : "",
            To : "",
            From : email,
            Subject : subject,
            Body : message
        }).then(
          message => alert("mail sent successfully")
        );
    }
}