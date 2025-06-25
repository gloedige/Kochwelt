// document.addEventListener('DOMContentLoaded', function(){
    const factorInput = document.getElementById('factor_portion');
    const formPortion = document.getElementById('formPortion');
    console.log(factorInput.value);

    function calcQuantity(){
        let currentValue = factorInput.value;
        console.log("Aktueller Wert im Input-Feld: ", currentValue);
        
        factorInput.value = currentValue;

        let varCalcQuantity = factorInput.value*quantityOfOne;
        cell1.innerHTML = `${varCalcQuantity}g Pasta, lang und dünn`;
    }
    let table = document.getElementById('table-incredients');
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);

    let quantityOfOne = 120;
    let varCalcQuantity = factorInput.value*quantityOfOne;
    cell1.innerHTML = `${varCalcQuantity}g Pasta, lang und dünn`;

    formPortion.addEventListener('submit', function(event){
        event.preventDefault();
        calcQuantity();
    });
// });