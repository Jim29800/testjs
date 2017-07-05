var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

// exercice 8

array.push("Courgette");
console.log(array.join());

//exercice 9

array[4].push("Citron");
console.log(array.join());
// exercice 10

array.splice(1,1);
console.log(array.join());
// exercice 11

array[2]="Poire";
console.log(array.join());