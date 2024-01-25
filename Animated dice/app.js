var cube = document.querySelector('.cube');
var rollButton = document.querySelector('.roll-button');
var currentClass = '';

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);
}

function rollDice(){
    var randNum = getRandomInt(1,6);
    // console.log(randNum);
    var showClass = 'show-' + randNum;
    if (currentClass){
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass=showClass;
}

rollDice();

rollButton.addEventListener('click', rollDice);