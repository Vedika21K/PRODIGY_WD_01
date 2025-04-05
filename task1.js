let navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#72cae8";
  } else {
    navbar.style.backgroundColor = "lightblue";
  }
};
