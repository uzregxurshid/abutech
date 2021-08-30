const button = document.getElementById("toggle");
const a = document.getElementsByClassName("header__nav")
button.addEventListener("click", function () {
  const c = document.getElementsByClassName("header__nav")[0].style.display;
  if (c == "" || c == "none") {
    a[0].style.display = "flex";
  } 
})
const buttonc = document.getElementById("toggler");
buttonc.addEventListener("click", function () {
  const c = document.getElementsByClassName("header__nav")[0].style.display;
  if (c == "" || c == "none") {
    a[0].style.display = "flex";
  } else {
    a[0].style.display = "none";
  }
})