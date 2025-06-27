// document.addEventListener('DOMContentLoaded', function(){
    const factorInput = document.getElementById('factor_portion');
    const formPortion = document.getElementById('formPortion');
    console.log(factorInput.value);

    function calcQuantity(){
        let currentValue = factorInput.value;
        console.log("Aktueller Wert im Input-Feld: ", currentValue);
        
        factorInput.value = currentValue;

        for (let i=0; i<amount.length; i++){
            let row = table.rows[i];
            // console.log("aktuelle Reihe ist: ", row);
            let cell1 = row.cells[0];
            // console.log("aktuelle Zelle ist: ", cell1);
            let quantityOfOne = amount[i];
            let varUnit = unit[i];
            let varIncredient = incredient[i];
            let varCalcQuantity = factorInput.value*quantityOfOne;
            cell1.innerHTML = `${varCalcQuantity}${varUnit}${varIncredient}`;
        }
    }
    let table = document.getElementById('table-incredients');
    
    const amount = [120, 50, 1, 20, 20, 5, 2];
    const incredient = ["Pasta, lang und dünn",
        "Pancetta, Guanciale",
        "Ei(er)",
        "Parmesan, frisch geriebgen",
        "Pecorino romano, frisch gerieben",
        "Olivenöl",
        "Salz und Pfeffer"
    ]
    const unit = [" g "," g "," ", " g "," g "," ml "," g "]

    for (let i=0; i<amount.length; i++){
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let quantityOfOne = amount[i];
        let varUnit = unit[i];
        let varIncredient = incredient[i];
        let varCalcQuantity = factorInput.value*quantityOfOne;
        cell1.innerHTML = `${varCalcQuantity}${varUnit}${varIncredient}`;
    }
    

    formPortion.addEventListener('submit', function(event){
        event.preventDefault();
        calcQuantity();
    });
// });