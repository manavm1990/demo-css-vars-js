const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

const buttons = document.querySelectorAll("button");

function handleClick(event) {
  // Use 'target' to get the specific button that was clicked
  console.log(event.target.id);
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});
