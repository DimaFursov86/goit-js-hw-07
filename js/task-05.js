const inputElement = document.querySelector('#name-input');
const outputSpanElement = document.querySelector('#name-output');

function onInputWrite(event) {
    const inputValue = event.currentTarget.value;
   
    if (inputValue === "") {
        outputSpanElement.textContent = "незнакомец";
    } 
        else outputSpanElement.textContent = inputValue;
      
};

inputElement.addEventListener("input", onInputWrite);