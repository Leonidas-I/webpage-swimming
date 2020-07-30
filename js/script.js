const getElement = (e) => document.querySelector(e);

getElement(".hamburger").addEventListener("click", () => {
  getElement(".nav__list").classList.add("open");
});

getElement(".back").addEventListener("click", () => {
  getElement(".nav__list").classList.remove("open");
});
