// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }
let navigation = document.querySelector('.nav-links');
let hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navigation.contains(e.target)){
        navigation.classList.remove('active')
    }
})


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


//
