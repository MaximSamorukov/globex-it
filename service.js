function tableRerender() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((i) => {
    const value = i.textContent;
    const bgColor = activeElements.includes(parseInt(value, 10)) ? 'active' : selectedColor === 'blue' ? 'bg-blue' : 'bg-red';
    i.className = `cell cell-${value} ${bgColor}`;
  });

}

function cellsRerender() {
  const innerElements = document.querySelectorAll('.inner-element');
  innerElements.forEach((i) => {
    const value = i.textContent;
    i.className = `inner-element ${activeElements.includes(parseInt(value, 10)) ? 'selected' : ''}`;
  });
}


function makeOne() {
  activeElements = activeElements.slice(0, 1);
}