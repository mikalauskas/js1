const changeMe = document.querySelector('#changeMe');
changeMe.addEventListener('click', (event) => {
    // логика сюды
    let promptInput = prompt('Введите текст для изменения ссылки');
    changeMe.textContent = promptInput;
});