let add = document.getElementById("add");
let minus = document.getElementsByClassName("minus");
let counter = 0;

function addNumber() {
  counter += 1;
  console.log(counter);
}

function substractNumber() {
  counter -= 1;
  console.log(counter);
}

add.addEventListener("click", addNumber);

// add.getElementsByClassName("add").addEventListener("click", addNumber);

// minus.addEventListener("click", substractNumber);
