///* Declare Global Variable *///
const getElement = (e) => document.querySelectorAll(e);
let slideIndex = 1;
const slides = getElement(".slideshow__image");
const dots = getElement(".slideshow__dot");

///* Curtain Menu *///
getElement(".hamburger")[0].addEventListener("click", () => {
    getElement(".nav__list")[0].classList.add("open");
});

getElement(".back")[0].addEventListener("click", () => {
    getElement(".nav__list")[0].classList.remove("open");
});

///* Navigate SlideShow *///
const showSlide = (n) => {
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

const goSlide__arrowClick = (n) => showSlide((slideIndex += n));

showSlide(slideIndex);

getElement(".slideshow__arrow--prev")[0].addEventListener("click", () => {
    goSlide__arrowClick(-1);
});

getElement(".slideshow__arrow--next")[0].addEventListener("click", () => {
    goSlide__arrowClick(1);
});

getElement(".slideshow__indicator")[0].addEventListener("click", (e) => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i] === e.target) {
            showSlide(i + 1);
        }
    }
});
