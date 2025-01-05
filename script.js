// Снегопад
const snowflakes = document.getElementById('snowflakes');

function generateSnowflakes() {
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflakes.appendChild(snowflake);
    }
}

setInterval(generateSnowflakes, 500);

// Анимация прокрутки наверх
const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
