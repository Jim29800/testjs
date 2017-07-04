// partie 1
var nombre = 0;
var addition = 0;
var multiplication = 0;
var resultAddi = 0;
var resultMulti = 0;

nombre = Number(prompt("Merci de saisir votre nombre de départ"));
addition = Number(prompt("quel est le nombre que vous voulez lui additionner ?"));
multiplication= Number(prompt("Par quel nombre voulez-vous multiplier ?"));

/*
Suite de la partie 1
resultAddi= (nombre) + (addition);
resultMulti= (nombre) * (multiplication);
alert("le resultat de votre addition : " + nombre +"+"+ addition + "=" + resultAddi + "\nle resultat de votre multiplication : " + nombre +"x"+ multiplication + "=" + resultMulti );

Partie 2 avec les fonction :*/


function addi(n1, n2){
	var result;
	result = (n1 + n2)
	return result
};
function multi(n1,n2){
	var result;
	result = (n1 * n2)
	return result
};

resultAddi= addi(nombre, addition) ;
resultMulti= multi(nombre, multiplication);

alert("le resultat de votre addition : " + nombre +"+"+ addition + "=" + resultAddi + "\nle resultat de votre multiplication : " + nombre +"x"+ multiplication + "=" + resultMulti );
