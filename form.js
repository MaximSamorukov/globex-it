const form = document.createElement('div');
form.className = 'form';

const textFirstRow = document.createElement('div')
textFirstRow.className = 'text-style';
textFirstRow.textContent = 'Select Color';

const selectColor = document.createElement('div');
selectColor.className = 'select-color';

const redColor = document.createElement('div');
redColor.className = 'red-color';

const blueColor = document.createElement('div');
blueColor.className = 'blue-color';

selectColor.append(blueColor);
selectColor.append(redColor);



selectColor.addEventListener('click', (e) => {
  const colorValue = e.target.className.split('-')[0];
  if (selectedColor === colorValue) {
    return;
  }
  selectedColor = colorValue;
  tableRerender();
});

const textSecondRow = document.createElement('div');
textSecondRow.className = 'text-style second-row';
textSecondRow.textContent = 'Select cell';

const selectCell = document.createElement('div');
selectCell.className = 'cell-selector';

Array.from({ length: width * height }).map((i, index) => {
  const innerElement = document.createElement('div');
  innerElement.className = `inner-element ${activeElements.includes(index + 1) ? 'selected' : ''}`;
  innerElement.textContent = `${index + 1}`;
  selectCell.append(innerElement);
});

selectCell.addEventListener('click', (e) => {
  const value = parseInt(e.target.textContent, 10);
  if (option === 'one') {
    activeElements = [value];
  } else {
    if (activeElements.includes(value)) {
      activeElements = activeElements.filter((i) => i !== value);
    } else {
      activeElements.push(value);
    };

  }
  tableRerender();
  cellsRerender();
});

const textThirdRow = document.createElement('div');
textThirdRow.className = 'text-style third-row';
textThirdRow.textContent = 'Select option';

const selectOption = document.createElement('form');
const optionOne = document.createElement('input');
optionOne.type = 'radio';
optionOne.name = 'option';
optionOne.value = 'one';
optionOne.checked = option === 'one';
const optionTextOne = document.createElement('p').textContent = 'One value';

const optionMany = document.createElement('input');
optionMany.type = 'radio';
optionMany.name = 'option';
optionMany.value = 'many';
optionMany.checked = option === 'many';
const optionTextMany = document.createElement('p').textContent = 'Many values';

selectOption.addEventListener('change', (e) => {
  const value = e.target.value;
  option = value;
  console.log(value);
  if (value === 'one') {
    makeOne();
    tableRerender();
    cellsRerender();
  }
})


selectOption.append(optionOne);
selectOption.append(optionTextOne);
selectOption.append(optionMany);
selectOption.append(optionTextMany);



form.append(textFirstRow);
form.append(selectColor);
form.append(textSecondRow);
form.append(selectCell);
form.append(textThirdRow);
form.append(selectOption);
const tableCont = document.querySelector('.table-container');
tableCont.appendChild(form);
