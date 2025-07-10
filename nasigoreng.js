let datamenge1 = 75,
    datamenge2 = 1,
    datamenge3 = 1,
    datamenge4 = 0.5,
    datamenge5 = 1,
    datamenge6 = 0.5,
    datamenge7 = 7,
    datamenge8 = 50,
    datamenge9 = 1,
    datamenge10 = 50,
    datamenge11 = 0.5,
    datamenge12 = 1,
    datamenge13 = 0.5;
function calculate(event) {
    event.preventDefault(); 
    let inputPortion = Number(document.getElementById("inputportion").value);
    document.getElementById("datamenge1").innerHTML = (datamenge1 * inputPortion)+ " g"+" Langkornreis";
    document.getElementById("datamenge2").innerHTML = (datamenge2 * inputPortion)+ " Prise(n)" + " Salz";
    document.getElementById("datamenge3").innerHTML = (datamenge3 * inputPortion)+ " EL" + " Erdnussöl" ;
    document.getElementById("datamenge4").innerHTML = (datamenge4 * inputPortion)+ " Zwiebel";
    document.getElementById("datamenge5").innerHTML = (datamenge5 * inputPortion)+ " Knoblauchzehe"; 
    document.getElementById("datamenge6").innerHTML = (datamenge6 * inputPortion)+ " Chilisote";
    document.getElementById("datamenge7").innerHTML = (datamenge7 * inputPortion)+ " g" + " Ingwer";
    document.getElementById("datamenge8").innerHTML = (datamenge8 * inputPortion)+ " g" + " Möhren";
    document.getElementById("datamenge9").innerHTML = (datamenge9 * inputPortion)+ " Lauchzwiebel";
    document.getElementById("datamenge10").innerHTML = (datamenge10 * inputPortion)+ " Spargelbohnen oder Prinzess-Bohnen";
    document.getElementById("datamenge11").innerHTML = (datamenge11 * inputPortion)+ " Hähnchenbrustfilet";
    document.getElementById("datamenge12").innerHTML = (datamenge12 * inputPortion)+ " EL" + " Sojasauce";
    document.getElementById("datamenge13").innerHTML = (datamenge13 * inputPortion)+ " EL" + " Ketchup Mani<s";
}