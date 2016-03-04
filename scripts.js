$(document).ready(function () {
    console.log("ready!");

    $('#dice-button').click(function (){
        console.log('click detected');
        addBox();
    });

});


function addBox(){
    var box = document.createElement('div');
    var pElement = document.createElement('p');
    var randomNum = String(Math.floor((Math.random() * 6) + 1));
    box.className = 'box';
    document.body.appendChild(box);
    box.appendChild(pElement);
    pElement.innerHTML = randomNum;
    console.log('box added');
};


var Die = function(value) {
    this.value = getNumber;
    function getNumber(){
        String(Math.floor((Math.random() * 6) + 1));
        
    }
    
}