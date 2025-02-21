const button = document.getElementById('noButton');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.floor(Math.random() * 90)}%`;
    button.style.top = `${Math.floor(Math.random() * 50)}%`;
});
