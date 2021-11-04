const updateButtonEl = document.getElementById('update-button');
const nameInputEl = document.getElementById('name-input');
const nameDisplayEl = document.getElementById('name-display');
const colorButtonEl = document.getElementById('color-button');
const boxEl = document.getElementById('box');

console.log(updateButtonEl);
console.log(nameInputEl);
console.log(nameDisplayEl);
console.log(colorButtonEl);
console.log(boxEl);

updateButtonEl.addEventListener('click', () => {
    const newName = nameInputEl.value;
    nameDisplayEl.textContent = newName;
    console.log('you clicked the button,' + newName + '.');
});

colorButtonEl.addEventListener('click', () => {
    console.log('You clicked the color button');
    boxEl.style.backgroundColor = 'pink';
})