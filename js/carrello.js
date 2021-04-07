function checkTotal() {
    var price1 = document.querySelector('input[name="tipodisegno"]:checked').value;
    var price2 = document.querySelector('input[name="sempordett"]:checked').value;
    var price3 = document.querySelector('input[name="backorno"]:checked').value;
    var price4 = document.querySelector('input[name="howmanypg"]').value;

    if (parseInt(price4) > 5 || isNaN(price4)) {
        validationMaxpg(false);
        document.getElementById("carrello").innerHTML = "(づ｡◕‿‿◕｡)づ"
    } else {
        validationMaxpg(true);  
        var totale = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4)*5;
        document.getElementById("carrello").innerHTML = "Il costo totale è: " + totale + " €"
    }

}

function validationMaxpg(p1){
    if(!p1){ 
        document.getElementById("erroretipo4").innerHTML = "Inserisci un numero valido di personaggi!"
    } else {
        document.getElementById("erroretipo4").innerHTML = ""
    }
}