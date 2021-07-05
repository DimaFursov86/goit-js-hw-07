const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
    const datalength = event.currentTarget.dataset.length;
    const inputLength = event.currentTarget.value.length;
   
    if (Number(datalength) === inputLength) {
        (inputEl.className = "valid");
      
    } 
        else (inputEl.className = "invalid");
      
};

// if (Number(datalength) === inputLength) {
//         (inputEl.classList.add("valid")) || (inputEl.className = "valid");
      
//     } 
//         else inputEl.classList.add("invalid") || (inputEl.className = "invalid");
      
// };