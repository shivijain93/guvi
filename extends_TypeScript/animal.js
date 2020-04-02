var Cat = /** @class */ (function () {
    function Cat(catName) {
        this.name = catName;
        var catImage = document.createElement("img");
        catImage.src = "http://pngimg.com/uploads/cat/cat_PNG50539.png";
        catImage.onclick = this.catOnClick();
        document.body.appendChild(catImage);
    }
    Cat.prototype.catOnClick = function () {
        var _this = this;
        return function () {
            alert("this " + _this.name + " is clicked");
        };
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(dogName) {
        this.name = dogName;
        var dogImage = document.createElement("img");
        dogImage.src = "http://pngimg.com/uploads/dog/dog_PNG50348.png";
        dogImage.onclick = this.dogOnClick();
        document.body.appendChild(dogImage);
    }
    Dog.prototype.dogOnClick = function () {
        var _this = this;
        return function () {
            alert("this " + _this.name + " is clicked");
        };
    };
    return Dog;
}());
var createCat = function () {
    var name = prompt("Cat Name");
    new Cat(name);
};
var createDog = function () {
    var name = prompt("Dog Name");
    new Dog(name);
};
