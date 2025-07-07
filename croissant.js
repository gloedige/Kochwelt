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
    
    let amount = [250, 30, 50, 0.5, 12, 115, 5, 125];
    let incredient = [
        "Mehl",
        "Zucker",
        "Butter, weiche",
        "Salz",
        "Frischhefe",
        "Wasser, kaltes",
        "Milch",
        "Butter, kalte",
    ]
    let unit = [" g "," g "," g ", " TL "," g "," g "," g "," "," g "]

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
    Text()