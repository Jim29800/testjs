
var nombre = Number(prompt("Merci de saisir votre nombre de départ"));
var addition = Number(prompt("quel est le nombre que vous voulez lui additionner ?"));
var multiplication = Number(prompt("Par quel nombre voulez-vous multiplier ?"));
var resultAddi = 0;
var resultMulti = 0;


/* partie 1
nombre = Number(prompt("Merci de saisir votre nombre de départ"));
addition = Number(prompt("quel est le nombre que vous voulez lui additionner ?"));
multiplication = Number(prompt("Par quel nombre voulez-vous multiplier ?"));

resultAddi= (nombre) + (addition);
resultMulti= (nombre) * (multiplication);
alert("le resultat de votre addition : " + nombre +"+"+ addition + "=" + resultAddi + "\nle resultat de votre multiplication : " + nombre +"x"+ multiplication + "=" + resultMulti );

Partie 2 avec les fonction :*/


function addi(n1, n2){
	var result;
	result = n1 + n2;
	return result;
};
function multi(n1,n2){
	var result;
	result = n1 * n2;
	return result;
};

resultAddi= addi(nombre, addition) ;
resultMulti= multi(nombre, multiplication);

alert("le resultat de votre addition : " + nombre +"+"+ addition + "=" + resultAddi + "\nle resultat de votre multiplication : " + nombre +"x"+ multiplication + "=" + resultMulti );


// ajout de l'exercice de "condition"

if (resultAddi > 10) {
	alert("votre resultat de l'addition est supérieur à 10, il vaut : " + resultAddi)
}
else{
	alert("votre resultat de l'adition est inférieur à 10, il vaut : " + resultAddi)
}


// Ajout d'une boucle while
var Compteur= Number(prompt("Devine mon nombre !\n compris entre 1 et 1000"));

var devine = 123;

while(Compteur != devine)
	{

	if (Compteur > devine){

		//alert("C'est plus");
		Compteur= Number(prompt("Devine mon nombre !\n compris entre 1 et 1000 \nC'est MOINS que :" + Compteur));

	}
	else {
		//alert("C'est moins");
		Compteur= Number(prompt("Devine mon nombre !\n compris entre 1 et 1000 \nC'est PLUS que : " + Compteur));
	}
};

alert("bravo c'etais : " + devine);