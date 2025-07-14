const factorInput = document.getElementById('factor_portion');
const formPortion = document.getElementById('formPortion');
let table = document.getElementById('table-incredients');
let amount = [250, 30, 50, 0.5, 12, 115, 5, 125];
let unit = [" g "," g "," g ", " TL "," g "," g "," g "," "," g "];
let incredient = [
    "Mehl",
    "Zucker",
    "Butter, weiche",
    "Salz",
    "Frischhefe",
    "Wasser, kaltes",
    "Milch",
    "Butter, kalte"];

function initTable(){
    for (let i=0; i<amount.length; i++){
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let quantityOfOne = amount[i];
        let varUnit = unit[i];
        let varIncredient = incredient[i];
        let varCalcQuantity = factorInput.value*quantityOfOne;
        cell1.innerHTML = `${varCalcQuantity}${varUnit}${varIncredient}`;
    };
};

function calcQuantity(){
    let currentValue = factorInput.value;
    
    factorInput.value = currentValue;

    for (let i=0; i<amount.length; i++){
        let row = table.rows[i];
        let cell1 = row.cells[0];
        let quantityOfOne = amount[i];
        let varUnit = unit[i];
        let varIncredient = incredient[i];
        let varCalcQuantity = factorInput.value*quantityOfOne;
        cell1.innerHTML = `${varCalcQuantity}${varUnit}${varIncredient}`;
    };
    
};
initTable();

formPortion.addEventListener('submit', function(event){
    event.preventDefault();
    calcQuantity();
});