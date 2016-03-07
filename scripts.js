$(document).ready(function () {
    $('#dice-button').click(function () {
        addDice();
        console.log(loadedDie);
    });
    $('#roll-button').click(function () {
        rollDice();
    });
});


var loadedDie = [];

var Die = function (value, elementID) {
    this.value = value;
    this.elementID = elementID;

    this.newDie = function () {
        var box = document.createElement('div');
        var pElement = document.createElement('p');
        document.body.appendChild(box);
        box.appendChild(pElement);
        box.id = this.elementID;
        pElement.innerText = this.value;
    };


    this.rollAll = function () {
        this.value = getRandomNum();
    };

};

function addDice() {
    var dice = new Die(getRandomNum(), loadedDie.length);
    dice.newDie();
    loadedDie.push(dice);
};

function getRandomNum() {
    var number = (Math.floor((Math.random() * 6) + 1));
    return number;
};

function rollDice() {
    for (var i = 0; i < loadedDie.length; i++) {
        loadedDie[i].rollAll();
        console.log('rolling all');
    }
}