'use strict';

var Grid = function (table, size) {
  this.table = table;
  this.size = size;

  var row,
      cell,
      checkbox,
      fragment = document.createDocumentFragment(),
      checkboxes = [],
      x,
      y;

  //create the pixel grid
  for (y=0; y<size; y++) {
    row = document.createElement('tr');
    checkboxes[y] = [];

    for (x=0; x<size; x++) {
      cell = document.createElement('td');
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.cell = new Cell([y, x]);

      if(canHit) {
        checkbox.addEventListener("click", this.clickHandler, false);
      }
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
