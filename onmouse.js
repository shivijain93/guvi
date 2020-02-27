var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1'
div.textContent='shivani';
document.getElementById("div1").onmouseover = function(){mouseOver()};
document.getElementById("div1").onmouseout = function() {mouseOut()}
function mouseOver() {
document.getElementById("div1").style.color = "blue";
}
function mouseOut() {
document.getElementById("div1").style.color = "black";
}