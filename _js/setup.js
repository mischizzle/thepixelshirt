'use strict';

var colorSelected = 'black';
var prevSelected;
var pixelColor;
var resetBtn;
var pixelShirt;

//create grid
pixelShirt = new Grid(document.getElementById('pixelShirt'), 41);

resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetGrid);

//set colors
pixelColor = document.getElementById('colors');
pixelColor.children[0].classList.add("checked");

for(var i=0; i<pixelColor.children.length; i++) {
  pixelColor.children[i].addEventListener('click', selectColor);
}

function selectColor() {
  for (var i=0; i<pixelColor.children.length; i++) {
    pixelColor.children[i].classList.remove("checked");
  }

  this.classList.add("checked");
  colorSelected = this.id;
}

function resetGrid() {
  pixelShirt.reset();
}
