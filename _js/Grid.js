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
      yIndicator,
      xIndicator,
      xChars;

  xChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmn';

  //create the pixel grid
  for (y=0; y<size; y++) {
    row = document.createElement('tr');
    checkboxes[y] = [];

    for (x=0; x<size; x++) {
      cell = document.createElement('td');

      //y indicators
      if(y===0 && x>0) {
        par = document.createElement('p');
        par.innerHTML = xChars.charAt(x-1);
        cell.appendChild(par);
      }

      //x indicators
      if(x===0 && y>0) {
        par = document.createElement('p');
        par.innerHTML = y;
        cell.appendChild(par);
      }

      checkbox = document.createElement('div');
      checkbox.cell = new Cell([y, x]);
      checkbox.addEventListener("click", this.clickHandler, false);
      checkbox.addEventListener("mousedown", this.mousedownHandler, false);

      checkboxes[y][x] = checkbox;
      cell.appendChild(checkbox);
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  this.table.appendChild(fragment);
};

Grid.prototype.clickHandler = function () {
  this.className = "";
  this.classList.add(colorSelected);
};

Grid.prototype.mousedownHandler = function(e) {
  console.log(e);
  e.preventDefault();
}

Grid.prototype.getGrid = function() {
  return this;
}

Grid.prototype.reset = function() {
  var grid = Grid.prototype.getGrid();
  // console.log(this.table.childNodes);
  console.log("resetting the grid");

  for(var i=0; i<this.table.childNodes.length; i++) {
    for(var j=0; j<this.table.childNodes.length; j++) {
      this.table.childNodes[i].childNodes[j].childNodes[0].className = "";
    }
  }
}
