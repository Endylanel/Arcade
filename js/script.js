// Снегопад
const snowflakes = document.getElementById('snowflakes');

// Генерация снежинок
function generateSnowflakes() {
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflakes.appendChild(snowflake);
    }
}

// Обработка анимации снежинок
function animateSnowflakes() {
    let snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        let xPos = Math.random() * window.innerWidth;
        let delay = Math.random() * 5;
        let duration = Math.random() * 5 + 3;
        let opacity = Math.random() * 0.5 + 0.5;

        snowflake.style.left = `${xPos}px`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.opacity = opacity;
    });
}

setInterval(generateSnowflakes, 500);
setInterval(animateSnowflakes, 100);

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

// Таймер для блоков с играми
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Статус анимации кнопки
const statusButton = document.querySelector('.hero-button');
statusButton.addEventListener('mouseenter', () => {
    statusButton.style.background = 'linear-gradient(45deg, #ffcc00, #f04c84)';
    statusButton.style.transform = 'scale(1.1)';
});

statusButton.addEventListener('mouseleave', () => {
    statusButton.style.background = 'linear-gradient(45deg, #ff6b81, #f04c84)';
    statusButton.style.transform = 'scale(1)';
});

// Функция для отображения игрового контента по клику
const gameContent = document.querySelector('.game-cards');
const allGameCards = document.querySelectorAll('.game-card');
allGameCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Вы выбрали игру: ' + card.querySelector('h3').textContent);
    });
});

// Анимация для элементов секции "О нас"
const aboutSection = document.querySelector('.about');
const features = document.querySelectorAll('.feature');
window.addEventListener('scroll', () => {
    let aboutPosition = aboutSection.getBoundingClientRect().top;
    if (aboutPosition <= window.innerHeight / 1.5) {
        features.forEach((feature, index) => {
            feature.classList.add('fade-in');
            feature.style.animationDelay = `${index * 0.2}s`;
        });
    }
});

// Переключение фонового цвета в секции "Игры"
const gameSection = document.querySelector('.games');
window.addEventListener('scroll', () => {
    let gamePosition = gameSection.getBoundingClientRect().top;
    if (gamePosition <= window.innerHeight / 1.5) {
        gameSection.style.backgroundColor = '#2f2f4f';
        gameSection.style.transition = 'background-color 0.5s ease';
    }
});

// Добавление плавной анимации на кнопку "Наверх"
scrollToTopButton.style.transition = 'opacity 0.5s ease';

// Функция для создания иконок социальных сетей
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease-in-out';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Эффекты на главной кнопке
const heroButton = document.querySelector('.hero-button');
heroButton.addEventListener('click', () => {
    heroButton.style.background = 'linear-gradient(45deg, #ffcc00, #ff6b81)';
    setTimeout(() => {
        heroButton.style.background = 'linear-gradient(45deg, #ff6b81, #f04c84)';
    }, 1000);
});

// Обработка анимации текста на главной странице
const heroTitle = document.querySelector('.hero-title');
const heroDescription = document.querySelector('.hero-description');
window.addEventListener('scroll', () => {
    let heroPosition = heroTitle.getBoundingClientRect().top;
    if (heroPosition <= window.innerHeight / 1.2) {
        heroTitle.classList.add('fade-in-up');
        heroDescription.classList.add('fade-in-up');
    }
});

// Плавная анимация для секции "Контакты"
const contactSection = document.querySelector('.footer');
window.addEventListener('scroll', () => {
    let contactPosition = contactSection.getBoundingClientRect().top;
    if (contactPosition <= window.innerHeight / 1.5) {
        contactSection.classList.add('fade-in');
    }
});

// Обработчик для всех ссылок с переходом
const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
