document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fe-box').forEach(item => {
        item.addEventListener('click', event => {
            alert('Feature box clicked!');
        });
    });

    const bar = document.getElementById('bar');
    const navbar = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', () => {
            navbar.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    }
});
