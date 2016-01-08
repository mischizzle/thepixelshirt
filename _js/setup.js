'use strict';

var colorSelected = 'black';
var prevSelected;

//create grid
this.ps = new Grid(document.getElementById('pixelShirt'), 41);

//set colors
var pixelColor = document.getElementById('colors');
pixelColor.children[0].children[0].checked = true;

for(var i=0; i<pixelColor.children.length; i++) {
  pixelColor.children[i].children[0].addEventListener('click', selectColor);
}

function selectColor() {
  for (var i=0; i<pixelColor.children.length; i++) {
    pixelColor.children[i].children[0].checked = false;
  }

  this.checked = true;
  colorSelected = this.classList[0];
}
