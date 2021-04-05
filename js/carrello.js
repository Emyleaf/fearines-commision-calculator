function checkTotal() {
    var price1 = document.querySelector('input[name="tipodisegno"]:checked').value;
    var price2 = document.querySelector('input[name="sempordett"]:checked').value;
    var price3 = document.querySelector('input[name="backorno"]:checked').value;
    var price4 = document.querySelector('input[name="howmanypg"]').value;

    if (parseInt(price4) > 5) {
        price4 = 5;
    }

    var totale = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4)*5;

    document.getElementById("carrello").innerHTML = "Il costo totale è: " + totale + " €"
}