const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click',
  (event) => {
    alert('Метод для вывода сообщения в веб-консоль');
});

const alertElement = document.querySelector('#alert');
alertElement.addEventListener('click',
  (event) => {
    alert('Метод для вызова диалогового окна с сообщением');
});

const promptElement = document.querySelector('#prompt');
promptElement.addEventListener('click',
  (event) => {
    alert('Метод для вызова диалогового окна с запросом на ввод текста');
});