var root = document.querySelector('#nameTag');

var shadow = root.webkitCreateShadowRoot();
var template = document.querySelector('#nameTagTemplate');
shadow.appendChild(template.content);
root.textContent = "boody";
