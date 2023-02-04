
const nameInput = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");

nameInput.addEventListener("input", changeName);

function changeName(event){
    greeting.textContent = event.currentTarget.value;

    if (event.currentTarget.value.trim() === ""){
        greeting.textContent = "Anonymous";
    }
}