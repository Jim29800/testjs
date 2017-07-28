var html = "";
var damier = $("#damier");
function colonne1(nbColonne){
  var colonne = "";
  for(var i = 0; i < nbColonne / 2; i++){
    colonne += "<div class='col-xs-1 black'></div>";
    colonne += "<div class='col-xs-1 white'></div>";
  }
  return colonne;
}
function colonne2(nbColonne){
  var colonne = "";
  for(var i = 0; i < nbColonne / 2; i++){
    colonne += "<div class='col-xs-1 white'></div>";
    colonne += "<div class='col-xs-1 black'></div>";
  }
  return colonne;
}
function ligne(nbLigne, nbCol ){
  var ligne ="";
    for(var i = 0; i < nbLigne / 2; i++){
    ligne += "<section class='row'>" + colonne1(nbCol) + "</section>";
    ligne += "<section class='row'>" + colonne2(nbCol) + "</section>";
  }
  return ligne;
}


html = ligne(10,10);
console.log(html);

damier.html(html);