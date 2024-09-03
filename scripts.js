var i = 0;
var titleCardName = 'Jakob Daniel Deschauer';
var speed = 50;

function start(){
    console.log("hallo");
    typeTitleCardName();
    checkFadeInElements(); // Initial check for elements in view
    window.addEventListener('scroll', checkFadeInElements);
}

function typeTitleCardName(){
    if (i < titleCardName.length){
        document.getElementById("TitleCardName").innerHTML += titleCardName.charAt(i);
        i++;
        setTimeout(typeTitleCardName, speed);
    }
}

function checkFadeInElements() {
    const fadeInElements = document.querySelectorAll('.fade-in-section');
    fadeInElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}