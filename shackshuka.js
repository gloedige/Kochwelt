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
    function myFunction() {
var x = document.getElementById("quantity").value;
document.getElementById("amount").innerHTML = x;
console.log(x);
}