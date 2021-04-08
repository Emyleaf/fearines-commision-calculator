function checkTotal() {
    var price1 = document.querySelector('input[name="tipodisegno"]:checked').value;
    var price2 = document.querySelector('input[name="sempordett"]:checked').value;
    var price3 = document.querySelector('input[name="backorno"]:checked').value;
    var price4 = document.querySelector('input[name="howmanypg"]').value;

    if (parseInt(price4) > 5 || isNaN(price4) || price4 == "") {
        validationMaxpg(false);
        document.getElementById("carrello").innerHTML = "(づ｡◕‿‿◕｡)づ"
    } else {
        validationMaxpg(true);
        if (parseInt(price3) == 10){
            var totalemin = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4)*5;
            var totalemax = parseInt(price1) + parseInt(price2) + parseInt(price3) + 15 + parseInt(price4)*5;
            document.getElementById("carrello").innerHTML = "Il costo totale varia da: min " + totalemin + "€ a max " + totalemax + "€ in base ai dettagli del background!"
        } else {   
            var totale = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4)*5;
            document.getElementById("carrello").innerHTML = "Il costo totale è: " + totale + " €"
        }
    }

}

function validationMaxpg(p1){
    if(!p1){ 
        document.getElementById("erroretipo4").innerHTML = "Inserisci un numero valido di personaggi!"
    } else {
        document.getElementById("erroretipo4").innerHTML = ""
    }
}