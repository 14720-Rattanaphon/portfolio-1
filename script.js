// =============================
// Contact Form
// =============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {

            alert(
                "ขอบคุณคุณ " + name +
                "\nระบบได้รับข้อความของคุณแล้วครับ"
            );

            contactForm.reset();

        }

    });

}
