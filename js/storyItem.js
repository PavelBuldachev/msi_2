document.addEventListener('DOMContentLoaded', function () {
    const storyItems = document.querySelectorAll('.story_item');

    function animateStoryItem(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(animateStoryItem, {
        root: null,
        threshold: 0.5,
        rootMargin: '0px'
    });

    storyItems.forEach(storyItem => {
        observer.observe(storyItem);
    });
});