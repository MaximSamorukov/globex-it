const tableContainer = document.createElement('div');
const table = document.createElement('table');


Array.from({ length: height }).map((i, index) => {
  const row = document.createElement('tr');
  row.className = 'row';
  table.append(row);
  Array.from({ length: width }).map((ii, ind) => {
    const cell = document.createElement('td');
    const value = (width * index) + (ind + 1);
    const bgColor = activeElements.includes(parseInt(value, 10)) ? 'active' : selectedColor === 'blue' ? 'bg-blue' : 'bg-red';
    cell.className = `cell cell-${value} ${bgColor}`;
    cell.textContent = value;
    row.append(cell);
  })

})
tableContainer.className = 'table-container';
table.className = 'table';
tableContainer.append(table);
document.body.append(tableContainer);