
console.log('hello world');  

var el = document.getElementById('addText');
var el_content = document.createTextNode("hello world");
el.appendChild(el_content);


var remove = document.getElementById('remove');
remove.parentNode.removeChild(remove);
