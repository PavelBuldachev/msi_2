// Когда пользователь прокручивает вниз 20px от верхней части документа, показать кнопку
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// Когда пользователь нажимает на кнопку, плавно прокручивать вверх
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Привязываем функцию к кнопке
document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);