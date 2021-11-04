const updateButtonEl = document.getElementById('update-button');
const nameInputEl = document.getElementById('name-input');
const nameDisplayEl = document.getElementById('name-display');
const colorButtonEl = document.getElementById('color-button');
const boxEl = document.getElementById('box');
const colors = ['pink', 'red', 'orange', 'yellow', 'blue', 'green'];
let colorNumber = 0;
const proNouns = document.getElementById('pronouns');
const pronounDisplay = document.getElementById('pronoun-display');

console.log(updateButtonEl);
console.log(nameInputEl);
console.log(nameDisplayEl);
console.log(colorButtonEl);
console.log(boxEl);
console.log(proNouns);
console.log(pronounDisplay);

updateButtonEl.addEventListener('click', () => {
    const newName = nameInputEl.value;
    nameDisplayEl.textContent = newName;
    console.log('you clicked the button,' + newName + '.');

    nameInputEl.value= '';
    
    pronounDisplay.textContent = proNouns.value;
})    

colorButtonEl.addEventListener('click', () => {
    console.log('You clicked the color button');
    boxEl.style.backgroundColor = colors[colorNumber % colors.length];
    colorNumber++;
})