
console.log('hello world');  

var el = document.getElementById('addText');
var el_content = document.createTextNode("hello world");
el.appendChild(el_content);


var remove = document.getElementById('remove');
remove.parentNode.removeChild(remove);

var couleur = document.getElementById('changeColor');
couleur.style.backgroundColor = "Red"

var container = document.getElementById('addChildren');
var creat = document.createElement("p");
var ajoutP = container.insertBefore(creat, container.addChildren);


function para (a,b){
	for (var i = 0; i < b ; i++) {
		return a;
	};

};

para(ajoutP, 4)