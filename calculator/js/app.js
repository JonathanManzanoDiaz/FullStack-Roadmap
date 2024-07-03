const buttons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const delAll = document.querySelector("#delAll");
const del = document.querySelector(".del");
const dot = document.querySelector(".dot");
let arr = [];
let total = document.querySelector(".total");
let iValue = screen.value;
// Add event listeners to number buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.textContent;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (arr[arr.length - 1] === operator.textContent) {
      alert("First, type the number");
    } else {
      arr.push(`${screen.value}`);
      arr.push(`${operator.textContent}`);
      screen.placeholder = "Type the next number";
      screen.value = "";
    }
  });
});

// Add event listener to delete all button
delAll.addEventListener("click", () => {
  screen.value = "";
  arr = [];
});

total.addEventListener("click", () => {
  arr.push(`${screen.value}`);
  let str = arr.join("");
  screen.value = `${eval(str)}`;
});

del.addEventListener("click", () => {
  screen.value = screen.value.slice(0, -1);
});

dot.addEventListener("click", () => {
  if (screen.value == 0) {
    screen.value = 0 + ".";
  } else {
    screen.value = screen.value + ".";
  }
});
