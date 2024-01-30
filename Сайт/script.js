function toggleLanguage() {
    var currentLang = document.documentElement.lang;
    var elementsToTranslate = document.querySelectorAll('[data-lang], [data-lang-en]');

    if (currentLang === 'en') {
        document.documentElement.lang = 'ru';
        elementsToTranslate.forEach(function(element) {
            element.style.opacity = '0';
            setTimeout(function() {
                element.innerText = element.getAttribute('data-lang');
                element.style.opacity = '1';
            }, 500); // Задержка для плавного перехода
        });
    } else {
        document.documentElement.lang = 'en';
        elementsToTranslate.forEach(function(element) {
            element.style.opacity = '0';
            setTimeout(function() {
                element.innerText = element.getAttribute('data-lang-en');
                element.style.opacity = '1';
            }, 500); // Задержка для плавного перехода
        });
    }
}

// Появление кнопки переключения языка
window.addEventListener('DOMContentLoaded', function() {
    var langToggle = document.querySelector('.lang-toggle');
    langToggle.style.opacity = '1'; // Показываем кнопку
});
