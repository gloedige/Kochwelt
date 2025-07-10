const factorInput = document.getElementById('factor_portion');
const formPortion = document.getElementById('formPortion');
let table = document.getElementById('table-incredients');
const amount = [120, 50, 1, 20, 20, 5, 2];
const unit = [" g "," g "," ", " g "," g "," ml "," g "];
const incredient = ["Pasta, lang und dünn",
    "Pancetta, Guanciale",
    "Ei(er)",
    "Parmesan, frisch geriebgen",
    "Pecorino romano, frisch gerieben",
    "Olivenöl",
    "Salz und Pfeffer"];

function initTable(){
    for (let i=0; i<amount.length; i++){
        let row = table.insertRow(i);
        let cell = row.insertCell(0);
        let quantityOfOne = amount[i];
        let varUnit = unit[i];
        let varIncredient = incredient[i];
        let varCalcQuantity = factorInput.value*quantityOfOne;
        cell.innerHTML = `${varCalcQuantity}${varUnit}${varIncredient}`;
    }
};

function calcQuantity(){
    let currentValue = factorInput.value;
    
    factorInput.value = currentValue;

    for (let i=0; i<amount.length; i++){
        let row = table.rows[i];
        let cell = row.cells[0];
        let quantityOfOne = amount[i];
        let varUnit = unit[i];
        let varIncredient = incredient[i];
        let varCalcQuantity = factorInput.value*quantityOfOne;
        cell.innerHTML = `${varCalcQuantity}${varUnit}${varIncredient}`;
    }
};

initTable();

formPortion.addEventListener('submit', function(event){
    event.preventDefault();
    calcQuantity();
});