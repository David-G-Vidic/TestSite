let elem = document.body;
let elemText = elem.querySelector(".body");
let preloader = elem.querySelector(".banter-loader");

let timerId = setTimeout(() => {
  elem.style.background = "#fff";
  elemText.style.display = "block";
  preloader.style.display = "none";
}, 1000);

setTimeout(() => {
  clearTimeout(timerId);
  console.log("preloader off");
},5000);
