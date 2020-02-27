var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1' 
var imgs = ["C:/Users/Shivani Jain/Desktop/img1.png","C:/Users/Shivani Jain/Desktop/img2.png","C:/Users/Shivani Jain/Desktop/img3.png","C:/Users/Shivani Jain/Desktop/img4.png","C:/Users/Shivani Jain/Desktop/img5.png","C:/Users/Shivani Jain/Desktop/img6.png"]; 
var img = document.createElement('img');
div.appendChild(img);
var i=0
img.src =imgs[0];
img.id='img1'
document.getElementById("img1").onmouseover = function(){mouseOver()};
function mouseOver() {
i=i+1;
i=i%imgs.length;
document.getElementById("img1").src =imgs[i];
}