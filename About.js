// Toggle 'Read More' content
document.getElementById('toggle-more').addEventListener('click', function() {
    const moreContent = document.getElementById('more-content');
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        moreContent.classList.add('hidden');
        this.textContent = 'Read More';
    }
});
