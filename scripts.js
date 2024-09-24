var i = 0;
var titleCardName = 'Jakob Daniel Deschauer';
var speed = 50;
let root = document.documentElement;


function start(){
    console.log("hallo");
    typeWriter("TitleCardName", titleCardName);
    checkFadeInElements();
    window.addEventListener('scroll', checkFadeInElements);
}

function typeWriter(elementID, text){
    if (i < text.length){
        document.getElementById(elementID).innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed, elementID, text);
    } else {
        root.style.setProperty('--opacity', 1);
        root.style.setProperty('--offset', "0px");
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