// taking size of array from input arrSize
var arrSize = document.getElementById("arrSize");
createArray(parseInt(arrSize.value));


// creating a new array when size is given 
arrSize.addEventListener("input", function () {
  createArray(parseInt(arrSize.value));
});


// creating new array when New Array button is pressed
var newArray = document.getElementById("NewArray");
newArray.addEventListener("click", function () {
  createArray(parseInt(arrSize.value));
});


// swap 2 bar elements by changing their heights
function swap(element1, element2) {
  var temp = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = temp;
}

// array
var array = [];

// function to create array
function createArray(numberOfBars) {
  var width = 12;
  if (numberOfBars <= 80 && numberOfBars >= 60)
    width = 14;
  else if (numberOfBars >= 30 && numberOfBars < 60)
    width = 16;
  else if (numberOfBars < 30)
    width = 20;

  var bars = document.getElementById("bars");
  // deleting old values of array
  bars.innerHTML = "";
  array = [];

  // creating random values for array
  for (var i = 0; i < numberOfBars; i++) {
    array.push(Math.floor((Math.random()) * 500) + 5);
  }

// creating bars of array
  for (var i = 0; i < numberOfBars; i++) {
    var bar = document.createElement("div");
    bar.style.height = `${array[i]}px`;
    bar.style.width = `${width}px`;
    bar.classList.add("bar");
    bar.classList.add(`bar${i}`);
    bars.appendChild(bar);
  }

}


// maintaining speed of algorithm
var arrSpeed = document.getElementById("arrSpeed");
var waitingTime = 1000 - parseInt(arrSpeed.value);
arrSpeed.addEventListener("input", () => {
  waitingTime = 1000 - parseInt(arrSpeed.value);
});


// delay function to show animation 
function delay() {
  return new Promise(resolve => {
    setTimeout(() => { resolve("") }, waitingTime);
  });
}


// function to disable the newArray/arrSize/selectAlgo buttons
function disableButtons()
{
  document.getElementById("NewArray").disabled=true;
  document.getElementById("arrSize").disabled=true;
  document.getElementById("navbarDropdown").disabled=true;
}

// function to enable the newArray/arrSize/selectAlgo buttons
function enableButtons()
{
  document.getElementById("NewArray").disabled=false;
  document.getElementById("arrSize").disabled=false;
  document.getElementById("navbarDropdown").disabled=false;
}