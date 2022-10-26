const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

const input = document.querySelector("input");

const buttons = document.querySelectorAll("button");

function handleClick(event) {
  const currentFontSize = Number.parseFloat(
    getComputedStyle(h2).getPropertyValue("--font-size")
  );

  if (event.target.id === "increase") {
    h2.style.setProperty("--font-size", currentFontSize + 0.05 + "em");
  } else {
    // decrease
    h2.style.setProperty("--font-size", currentFontSize - 0.05 + "em");
  }
}

// Loop over buttons and add event listener to each individual button
buttons.forEach(
  // callback function
  function (button) {
    button.addEventListener(
      "click",

      // Reference the function we created above - use it for each button
      handleClick
    );
  }
);
