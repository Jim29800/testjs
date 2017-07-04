/*var monNom = "";

monNom = prompt("votre nom ?");
alert ("bonjour " + monNom);

alert("bonjour" + " "+ prompt("votre nom ?"))*/
var nombre = 0;
var addition = 0;
var multiplication = 0;
var resultAddi = 0;
var resultMulti = 0;

nombre = Number(prompt("Merci de saisir votre nombre de départ"));
addition = Number(prompt("quel est le nombre que vous voulez additionner ?"));
multiplication= Number(prompt("Par quel nombre voulez-vous multiplier ?"));

resultAddi= (nombre) + (addition);
resultMulti= (nombre) * (multiplication);
alert("le resultat de votre addition : " + nombre +"+"+ addition + "=" + resultAddi + "\nle resultat de votre multiplication : " + nombre +"x"+ multiplication + "=" + resultMulti );
