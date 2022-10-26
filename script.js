const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

const buttons = document.querySelectorAll("button");

function handleClick(event) {
  const currentFontSize = Number.parseFloat(
    getComputedStyle(h2).getPropertyValue("--font-size")
  );

  if (event.target.id === "increase") {
    h2.style.setProperty("--font-size", currentFontSize + 0.5 + "em");
  } else {
    h2.style.setProperty("--font-size", currentFontSize - 0.5 + "em");
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});
