// Снежинки
const snowflakesContainer = document.getElementById("snowflakes");
const snowflakeSymbols = ["❄", "❅", "❆"];
const totalSnowflakes = 50;

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];

    snowflake.style.left = `${Math.random() * 100}vw`;
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
