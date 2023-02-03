const valueEl = document.querySelector("#value");
const buttonPlusEl = document.querySelector('[data-action="increment"]');
const buttonMinusEl = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

buttonPlusEl.addEventListener("click", onClickButtonPlusEl);


    function onClickButtonPlusEl (event) {
        counterValue += 1;
        valueEl.textContent = counterValue;
};

buttonMinusEl.addEventListener("click", onClickButtonMinusEl);

 function onClickButtonMinusEl (event) {
    counterValue -= 1;
        valueEl.textContent = counterValue;
};