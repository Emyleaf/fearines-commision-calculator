function checkTotal() {
    let price1 = document.querySelector('input[name="tipodisegno"]:checked').value;
    let price2 = document.querySelector('input[name="sempordett"]:checked').value;
    let price3 = document.querySelector('input[name="backorno"]:checked').value;
    let price4 = document.querySelector('input[name="howmanypg"]').value;

    if (parseInt(price4) > 5 || isNaN(price4) || price4 == "") {
        validationMaxpg(false);
        document.getElementById("carrello").innerHTML = "(づ｡◕‿‿◕｡)づ"
    } else {
        validationMaxpg(true);
        if (parseInt(price3) == 10){
            let totalemin = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4)*5;
            let totalemax = parseInt(price1) + parseInt(price2) + parseInt(price3) + 15 + parseInt(price4)*5;
            if($('#switch-lang').hasClass("inglese")){ 
                document.getElementById("carrello").innerHTML = "<span lang='eng' style='display: none;'>The total cost ranges from " + totalemin + "€ to " + totalemax + "€ depending on the details of the background!</span><span lang='ita'>Il costo totale varia da: min " + totalemin + "€ a max " + totalemax + "€ in base ai dettagli del background!</span>"
            } else {
                document.getElementById("carrello").innerHTML = "<span lang='eng'>The total cost ranges from " + totalemin + "€ to " + totalemax + "€ depending on the details of the background!</span><span lang='ita' style='display: none;'>Il costo totale varia da: min " + totalemin + "€ a max " + totalemax + "€ in base ai dettagli del background!</span>"
            }
        } else {   
            let totale = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4)*5;
            if($('#switch-lang').hasClass("inglese")){ 
                document.getElementById("carrello").innerHTML = "<span lang='eng' style='display: none;'>Total price is: " + totale + " €</span><span lang='ita'>Il costo totale è: " + totale + " €</span>"
            } else {
                document.getElementById("carrello").innerHTML = "<span lang='eng'>Total price is: " + totale + " €</span><span lang='ita' style='display: none;'>Il costo totale è: " + totale + " €</span>"
            }
        }
    }
}

function validationMaxpg(p1) {
    let x = document.getElementById("erroretipo4");
    if(!p1){ 
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$('[lang="ita"]').hide();

$('#switch-lang').click(function() {
    if($('#switch-lang').hasClass("italiano")){ 
        $('#switch-lang').removeClass("italiano");
        $('#switch-lang').addClass("inglese");
    } else {
        $('#switch-lang').removeClass("inglese");
        $('#switch-lang').addClass("italiano");
    }
    $('[lang="ita"]').toggle();
    $('[lang="eng"]').toggle();
});