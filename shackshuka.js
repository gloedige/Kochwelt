//Modalverschiebung für Img Container//
var modal = document.getElementById("myModal");
var img = document.getElementById("my-Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
modal.style.display = "none";
}
//calc funktion für Rezept//
function calculate(event) {
    event.preventDefault();
    const portionen = parseFloat (document.getElementById("portionen").value)
    document.querySelectorAll(".IngridientAmount").forEach(td => {
        const basis = parseFloat(td.dataset.basis);
        console.log(basis);
        const berechnet = (basis * portionen).toFixed(2).replace(/\.00$/, "");
        const einheit = td.dataset.info || "";
        td.textContent = einheit ? `${berechnet} ${einheit}` : berechnet;
        console.log(berechnet)
    });
}


