window.addEventListener('scroll', function () {
    var wrapper2 = document.getElementById('wrapper_2');
    var wrapper2Position = wrapper2.getBoundingClientRect();

    // Check if wrapper_2 is in view
    if (wrapper2Position.top <= window.innerHeight && wrapper2Position.bottom >= 0) {
        // If wrapper_2 is in view, add the 'scrolled' class to trigger the animation
        wrapper2.classList.add('scrolled');
    } else {
        // If wrapper_2 is not in view, remove the 'scrolled' class to reset the animation
        wrapper2.classList.remove('scrolled');
    }
});