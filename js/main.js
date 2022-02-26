var CHF = 0.93; 
var EUR = 0.89; 
var RUB = 83.82; 

var elForm = document.querySelector(".main__form");
var elInput = document.querySelector(".main__input");
var elSelect = document.querySelector(".main__select");
var elBtn = document.querySelector(".main__btn");
var elText = document.querySelector(".main__text");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault(); 
    
    if (elSelect.value == "chf") {
        elText.textContent = elInput.value * CHF + elSelect.value; 
    }else if (elSelect.value == "euro") {
        elText.textContent = elInput.value * EUR + elSelect.value; 
    }else  {
        elText.textContent = elInput.value * RUB + elSelect.value; 
    }
})