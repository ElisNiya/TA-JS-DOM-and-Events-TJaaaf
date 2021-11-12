let display = document.querySelectior(".display")
let allBts = document.querySelectorAll("button")

let initialValue = 0;

function handleBtnClick(event) {
  if(event.target.classList.container("equal")) {
    display.innerText = eval(display.innerText);
    return;
  }
  if(event.target.classList.container("clear")) {
    display.innerText = initialValue;
    return;
  }
  if(display.innerText == initialValue) {
     display.innerText = event.target.innerText;
  }else {
     display.innerText += event.target.innerText;
  }
  display.innerText += event.target.innerText. // so that the previous nr doesn`t disappear
}

allBts.forEach((btn) => {
  btn.addEventListener("click", handleBtnClick)

})
               
  display.innerText = initialValue;
