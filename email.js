var templateParams = {
    subject: "Email desde portfolio",
    fullName: document.querySelector("#full-name").innerHTML,
    email: document.querySelector("#email").innerHTML,
    message: document.querySelector("message").innerHTML
};

function sendEmail() {
    emailjs.send('service_71836jh', 'template_o98pmw4', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}