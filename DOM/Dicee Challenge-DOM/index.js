function returnRandomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

function greaterNum(num1, num2) {
  return num1 < num2 ? "2" : "1";
}

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let heading = document.querySelector("h1");

let randomNum1 = returnRandomNum();
let randomNum2 = returnRandomNum();

let dice1 = `./images/dice${randomNum1}.png`;
let dice2 = `./images/dice${randomNum2}.png`;

const winner = `Dice${greaterNum(randomNum1, randomNum2)} wins `;

img1.setAttribute("src", dice1);
img2.setAttribute("src", dice2);
heading.textContent = winner;
