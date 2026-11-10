
console.log("Anjal Digital Website Started!");

// Explore Services Button
const exploreButton = document.querySelector("#home button");

exploreButton.addEventListener("click", function() {
    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });
});

// WhatsApp Contact Form
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const service = document.querySelector("#service").value;
    const message = document.querySelector("#message").value;

    const phoneNumber = "919913379665";

    const whatsappMessage =
        "Hello Anjal Digital!" +
        "\nName: " + name +
        "\nEmail: " + email +
        "\nService: " + service +
        "\nMessage: " + message;

    const whatsappURL =
        "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});

// Mobile Menu Functionality

const menuBtn = document.querySelector("#menuBtn");
const navbar = document.querySelector("#navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("active");

});

// Close menu after clicking a link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        navbar.classList.remove("active");
    });

});

// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const currentItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(function(item) {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });

        currentItem.classList.toggle("active");

    });

});

// Animated Counters

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const duration = 1500;
            const startTime = performance.now();

            function updateCounter(currentTime) {

                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                counter.textContent = Math.floor(
                    target * progress
                );

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(counter);
        }

    });

}, {
    threshold: 0.5
});

counters.forEach(function(counter) {
    counterObserver.observe(counter);
});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("whatsappForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = form.elements["name"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    const whatsappNumber = "919913379665";

    const whatsappMessage =
      "NEW WEBSITE ENQUIRY - ANJAL DIGITAL\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Email: " + email + "\n" +
      "Message: " + message;

    const whatsappURL =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

  });

});
