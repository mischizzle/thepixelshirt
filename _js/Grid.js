'use strict';

var Grid = function (table, size) {
  this.table = table;
  this.size = size;

  var row,
      cell,
      par,
      checkbox,
      fragment = document.createDocumentFragment(),
      checkboxes = [],
      x,
      y,
      yIndicator;

  yIndicator = document.getElementById('y-indicator');

  //create the y indicator
  for (y=1; y<=size; y++) {
    par = document.createElement('p');
    par.innerHTML = y;
    // par.innerHTML(y);
    yIndicator.appendChild(par);
  }



  //create the pixel grid
  for (y=0; y<size; y++) {
    row = document.createElement('tr');
    checkboxes[y] = [];

    for (x=0; x<size; x++) {
      cell = document.createElement('td');
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.cell = new Cell([y, x]);
      checkbox.addEventListener("click", this.clickHandler, false);
      checkboxes[y][x] = checkbox;
      cell.appendChild(checkbox);
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  this.table.appendChild(fragment);
};

Grid.prototype.clickHandler = function () {
  if(!this.checked) {
    this.classList.remove(colorSelected);
  } else {
    this.classList.add(colorSelected);
  }
};
