'use strict';
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
    const currentInputValue = event.currentTarget.value.trim();
      if (currentInputValue === '') {
    return (nameOutput.textContent = 'Anonymous');
  }
  return (nameOutput.textContent = currentInputValue);
});
