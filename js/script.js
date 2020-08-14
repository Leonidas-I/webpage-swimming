const getElement = (e) => document.querySelectorAll(e);

///* Curtain Menu *///
getElement(".hamburger")[0].addEventListener("click", () => {
    getElement(".nav__list")[0].classList.add("open");
});

getElement(".back")[0].addEventListener("click", () => {
    getElement(".nav__list")[0].classList.remove("open");
});

getElement(".nav__list")[0].addEventListener("click", () => {
    getElement(".nav__list")[0].classList.remove("open");
});

///* Navigate SlideShow on Arrow-Click*///
getElement(".slideshow__arrow--prev")[0].addEventListener("click", () => {
    goSlide__arrowClick(-1);
});

getElement(".slideshow__arrow--next")[0].addEventListener("click", () => {
    goSlide__arrowClick(1);
});

const goSlide__arrowClick = (n) => showSlide((slideIndex += n));

/* Navigate SlideShow With Event Delegation on Dot-click */
getElement(".slideshow__indicator")[0].addEventListener("click", (e) => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i] === e.target) {
            showSlide(i + 1);
        }
    }
});

let slideIndex = 1;
const slides = getElement(".slideshow__image");
const dots = getElement(".slideshow__dot");

const showSlide = (n) => {
    /* Ternary Operator */
    n > slides.length
        ? (slideIndex = 1)
        : n < 1
        ? (slideIndex = slides.length)
        : (slideIndex = n);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.opacity = "0.6";
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.opacity = "1";
};

showSlide(slideIndex);
