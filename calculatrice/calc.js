/*var monNom = "";

monNom = prompt("votre nom ?");
alert ("bonjour " + monNom);

alert("bonjour" + " "+ prompt("votre nom ?"))*/
var nombre = 0;
var addition = 0;
var multiplication = 0;
var resultAddi = 0;
var resultMulti = 0;

nombre = prompt("Merci de saisir votre nombre de départ");
addition = prompt("quel est le nombre que vous voulez additionner ?");
multiplication= prompt("Par quel nombre voulez-vous multiplier ?");
resultAddi= nombre*1 +addition*1;
resultMulti= nombre*1 *multiplication*1;
alert("le resultat de votre addition : " + nombre +"+"+ addition + "=" + resultAddi );
alert("le resultat de votre multiplication : " + nombre +"x"+ multiplication + "=" + resultMulti );