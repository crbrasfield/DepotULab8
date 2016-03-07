$(document).ready(function () {
    $('#dice-button').click(function () {
        addDice();
    });
    $('#roll-button').click(function () {
        rollDice();
    });
     $('#sum-button').click(function () {
        sumDice();
    });
});


var loadedDie = [];

var Die = function () {
    this.value = null;
    this.div = null;

    this.newDie = function () {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        document.body.appendChild(this.div);
    };

    this.roll = function () {
        var num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerHTML = num;
    };

};

function addDice() {
    var dice = new Die();
    dice.newDie();
    loadedDie.push(dice);
};


function rollDice() {
    for (var i = 0; i < loadedDie.length; i++) {
        loadedDie[i].roll();
    }
}

function sumDice() {
    var total = 0;
    for (var i = 0; i < loadedDie.length; i++) {
     total += loadedDie[i].value;
    }
    
    alert('The sum of the dice is ' + total);
    
}