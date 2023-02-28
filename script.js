let $userName = document.getElementById("userName");
let $userAge = document.getElementById("userAge");
let $userMail = document.getElementById("userMail");
let $displayBtn = document.getElementById("btn");
let $displayArea = document.getElementById("display-area");

$displayBtn.addEventListener("click", function () {
  $displayArea.innerHTML = `${$userName.value} (${$userAge.value}) - ${$userMail.value}`;
});

let fruits = ["apple", "banana", "orange", "grapes", "watermelon"];

let $bg = document.getElementById("BackGround");
let $border = document.getElementById("Border");
let $array = document.getElementById("Array");

$bg.addEventListener("click", function () {
  $displayArea.classList.toggle("blue");
});

$border.addEventListener("click", function () {
  $displayArea.classList.toggle("borderTest");
});

$array.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * fruits.length);
  $displayArea.innerHTML = fruits[randomNumber];
});

// <!-- 1. create a new project
// 2. ask the user for name email and age and show as follows (use inputs, divs, addEventListener)
// 	"Daniel (28) - zaodk.@gamil.com"

// 3. create three buttons one will change a divs background one will change the border and one will change the text randomly from the following array
// (use classList)
// ["apple", "banana", "orange", "grapes", "watermelon"]

// 🤚🏾

// BONUS
// 4. create input which the user will tell how many levels and show in div
// 4.1 instead of * use <div></div> with some styling -->

let $floorsInput = document.getElementById("floors");
let $executeBtn = document.getElementById("execute");
let $showFloors = document.getElementById("showFloors");
let $pyramidArea = document.getElementById("pyramidArea");

// $pyramidArea.innerHTML = '<div class="pyramidBlocks"></div>';

$executeBtn.addEventListener("click", function () {
  $showFloors.innerHTML = `${$floorsInput.value} Floors, you got it!`;

  let baseWidth = $floorsInput.value;
  $pyramidArea.innerHTML = "";
  let block = "";

  for (let i = 0; i < baseWidth; i++) {
    $pyramidArea.innerHTML += `<div class="row flex-nowrap justify-content-center pyramid-row" id="row${i}">${
      i + 1
    }</div>`;
  }
  for (let i = 0; i < baseWidth; i++) {
    let $row = document.getElementById(`row${i}`);
    block += `<div class="pyramidBlocks"></div>`;
    $row.innerHTML += block;
    console.log(block);
  }
  //   $pyramidArea.innerHTML =
  //     `<div class="pyramidBlocks"></div>` + `<div class="pyramidBlocks"></div> `;
});
