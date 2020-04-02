class Cat{
	name;
	constructor(catName){
		this.name=catName;
	let catImage= document.createElement("img");
	catImage.src= "http://pngimg.com/uploads/cat/cat_PNG50539.png";
	catImage.onclick= this.catOnClick();
	document.body.appendChild(catImage);
	}
	catOnClick(){
		return()=> {
		alert("this "+this.name+" is clicked");
		};
	}
}

class Dog{
	name;
	constructor(dogName){
	this.name= dogName;
	let dogImage= document.createElement("img");
	dogImage.src= "http://pngimg.com/uploads/dog/dog_PNG50348.png";
	dogImage.onclick= this.dogOnClick();
	document.body.appendChild(dogImage);	
	}
	dogOnClick(){
		return()=> {
		alert("this "+this.name+" is clicked");
		};
	}
}

let createCat = ()=> {
	let name = prompt("Cat Name");
	new Cat(name);
};

let createDog = ()=> {
	let name = prompt("Dog Name");
	new Dog(name);
};