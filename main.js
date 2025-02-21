const button = document.getElementById('noButton');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.floor(Math.random() * 90)}%`;
    button.style.top = `${Math.floor(Math.random() * 50)}%`;
});

document.getElementById('yesButton').onclick = function(){
    window.location.href = 'yes.html';
}

function checkMediaQuery(){
    if (window.innerWidth < 600) {
        document.getElementById('noButton').onclick, function (){
            button.style.left = `${Math.floor(Math.random() * 90)}%`;
            button.style.top = `${Math.floor(Math.random() * 50)}%`;
        }
    };
}