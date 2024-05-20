'use strict';
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.trim;
      if (currentInputValue === '') {
    return (nameOutput.textContent = 'Anonymous');
  }
  return (nameOutput.textContent = currentInputValue);
});
