// Добавление снежинок
const snowflakesContainer = document.getElementById("snowflakes");
const snowflakeSymbols = ["❄", "❅", "❆"];
const totalSnowflakes = 50;

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.fontSize = `${Math.random() * 10 + 15}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    snowflakesContainer.appendChild(snowflake);

    snowflake.addEventListener("animationend", () => {
        snowflake.remove();
    });
}

for (let i = 0; i < totalSnowflakes; i++) {
    createSnowflake();
}

// Кнопка "Наверх"
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Плавное появление секций
const sections = document.querySelectorAll("section");

function revealSections() {
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
