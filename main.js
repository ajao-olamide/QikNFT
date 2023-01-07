function changeColor() {
  document.getElementById("button").style.background = "green";
  setTimeout("changeColor2()", 2000);
}
{
  let changeBackground = document.createElement("style");
  changeBackground.style = "background:green";
}

let buttons = document.querySelectorAll(".different");

// document.addEventListener("click", function (evt) {
//   if (evt.target.classList.contains("different")) {
//     buttons.forEach(function (button) {
//       button.classList.remove("active");
//     });
//     evt.target.classList.add("active");
//   }
// });
