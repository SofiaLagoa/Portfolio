(function() {
    emailjs.init("user_3SpPKuE3XgqUTWiuseY7R");
})();
window.onload = function() {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable

            // these IDs from the previous steps
            emailjs.sendForm("service_71836jh", "template_o98pmw4", this).then(
                function() {
                    window.location.href =
                        "https://sofialagoa.github.io/portfolio/sobreMi.html";
                },
                function(error) {
                    console.log("No se pudo enviar el Email", error);
                }
            );
        });
};