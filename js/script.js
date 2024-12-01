document.addEventListener("DOMContentLoaded", () => {
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("Navegue para a página de Contexto para mais detalhes!");
            window.location.href = "contexto.html";
        });
    }

    const menuItems = document.querySelectorAll(".navigation ul li a");
    menuItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.color = "#4A7C59";
        });
        item.addEventListener("mouseout", () => {
            item.style.color = "";
        });
    });

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Insira um e-mail válido.");
                return;
            }

            alert(`Obrigado pelo contato, ${name}! Retornaremos em breve.`);
            contactForm.reset();
        });
    }

    const carouselImages = document.querySelectorAll(".carousel-image");
    let currentSlide = 0;

    function changeSlide(direction = 1) {
        if (carouselImages.length === 0) return;

        carouselImages[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + direction + carouselImages.length) % carouselImages.length;
        carouselImages[currentSlide].classList.add("active");
    }

    if (carouselImages.length > 0) {
        setInterval(() => {
            changeSlide(1); 
        }, 5000);

        const prevButton = document.querySelector(".carousel-btn.prev");
        const nextButton = document.querySelector(".carousel-btn.next");

        if (prevButton) {
            prevButton.addEventListener("click", () => changeSlide(-1));
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => changeSlide(1));
        }
    }

    const solutionButton = document.querySelector(".explore-button");
    if (solutionButton) {
        solutionButton.addEventListener("click", () => {
            const solutionText = document.querySelector(".solution-text");
            if (solutionText) {
                solutionText.textContent =
                    "Nossa solução já está impactando positivamente a eficiência hospitalar!";
            }
        });
    }
});
