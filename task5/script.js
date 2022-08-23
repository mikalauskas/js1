
const inputElement = document.querySelector('#inputField');
const duplicateElement = document.querySelector('#duplicateField');
inputElement.addEventListener('input',
  (event) => {
    duplicateElement.textContent += event.data;
});


document.addEventListener('submit',
  (event) => {
    event.preventDefault();
    const inputElement = document.querySelector('#inputField');

    console.log(inputElement.value);
    
    inputElement.value = '';
    duplicateElement.textContent = '';
});