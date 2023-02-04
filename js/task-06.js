const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event, onInputBlurRemove) {
    inputEl.classList.remove('invalid', 'valid');
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
    }

    else  {
        inputEl.classList.add('invalid');
    
    }
}
