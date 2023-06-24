let myTopBtn = document.querySelector(".arrow-go-top");

window.onscroll = function () {
  if (scrollY >= 600) {
    myTopBtn.classList.add("show");
  } else myTopBtn.classList.remove("show");
};

myTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
