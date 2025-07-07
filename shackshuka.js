
//recipe calc// 
let IngridientAmount1 = 150,
    IngridientAmount2 = 1,
    IngridientAmount3 = 1,
    IngridientAmount4 = 0.25,
    IngridientAmount5 = 0.25,
    IngridientAmount6 = 1,
    IngridientAmount7 = 0.75;
function calculate(event) {
    event.preventDefault(); 
    let portionen = Number(document.getElementById("portionen").value);
    document.getElementById("IngridientAmount1").innerHTML = (IngridientAmount1 * portionen)+" g";
    document.getElementById("IngridientAmount2").innerHTML = (IngridientAmount2 * portionen);
    document.getElementById("IngridientAmount3").innerHTML = (IngridientAmount3 * portionen);
    document.getElementById("IngridientAmount4").innerHTML = (IngridientAmount4 * portionen)+ " ,gestr.";
    document.getElementById("IngridientAmount5").innerHTML = (IngridientAmount5 * portionen)+ " Prise(n)";
    document.getElementById("IngridientAmount6").innerHTML = (IngridientAmount6 * portionen);
    document.getElementById("IngridientAmount7").innerHTML = (IngridientAmount7 * portionen);
}