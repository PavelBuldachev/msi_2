document.addEventListener('DOMContentLoaded', function () {
    function scrollToElement(id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('toggle').click(); // Закрываем меню
        } else {
            console.error('Element with id ' + id + ' not found.');
        }
    }

    // Добавляем обработчики событий на все ссылки в меню
    var menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var id = this.getAttribute('href').substring(1); // Убираем символ # из href
            scrollToElement(id);
        });
    });
});