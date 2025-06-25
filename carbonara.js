// document.addEventListener('DOMContentLoaded', function(){
    const factorInput = document.getElementById('factor_portion');
    const formPortion = document.getElementById('formPortion');
    console.log(factorInput.value);

    function calcQuantity(){
        let currentValue = factorInput.value;
        console.log("Aktueller Wert im Input-Feld: ", currentValue);

        factorInput.value = currentValue;
    }
    // updatePortionFactor();

    formPortion.addEventListener('submit', function(event){
        event.preventDefault();
        calcQuantity();
    });
// });