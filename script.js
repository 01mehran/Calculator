const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => calc(e.target.dataset.value));
});

const calc = (buttonValue) => {
  if (buttonValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (buttonValue === "AC") {
    output = "";
  } else if (buttonValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(buttonValue)) return;
    output += buttonValue;
  }
  display.value = output;
};
