// Анимация снежинок
const snowflakesContainer = document.getElementById("snowflakes");
const totalSnowflakes = 100;

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;

    snowflakesContainer.appendChild(snowflake);
    snowflake.addEventListener("animationend", () => snowflake.remove());
}

setInterval(createSnowflake, 200);
