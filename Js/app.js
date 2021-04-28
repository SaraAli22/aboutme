
'use strict';
var score = 0;
var username = prompt("Please Enter your name").toUpperCase();
alert ("Welcome"+username);
alert('let\'s play a guessing game about me.');


function yesCorrect (question) {
    if (question.toUpperCase() === 'YES') {
        score++;
        alert("Yes!, you are right.");
    }
    else if (question.toUpperCase() === 'NO'){
        alert("Sorry, wrong answer.");
    }
    else {
        alert("This answer is not valid");
    }
}

function noCorrect (question) {
    if (question.toUpperCase() === 'YES') {
        alert("Sorry, wrong answer.");
    }
    else if (question.toUpperCase() === 'NO'){
        score++;
        alert("Yes! you are right.");
    }
    else {
        alert("This answer is not valid");
    }
}

function MYNAME(){
let myname = prompt('Is my name Sara ? yes or no ');
console.log(myname)
yesCorrect(myname);
return;}

MYNAME();

function MYHOME (){
let myhome = prompt('do I live in Irbid ? yes or no');
console.log(myhome)
yesCorrect(myhome); 
return;}

MYHOME();


function MYMAJOR(){
    let mymajor = prompt('Iam I doctor ? yes or no'); 
console.log(mymajor)
noCorrect(mymajor);
return;}

MYMAJOR();


function MYDRINK(){
let mydrink = prompt('Is Tea my Favourite drink ? yes or no');
console.log(mydrink)
noCorrect(mydrink);
return;}

MYDRINK();

function MYHOBBY(){
let myhobby = prompt('Do I like Taking Picture ? yes or no ');
console.log(myhobby)
yesCorrect(myhobby);
return;}

MYHOBBY();


function guessSum() {
    var counter = 1;
    if (counter === 5) {
        alert('Sorry you run out of guesses');
    }
    while (counter < 5 && number !==28) {
        var number = parseInt(prompt('What is The sum of first five prime numbers ?'));
        if (number > 28) {
            alert('Too high! Try Again');
            counter++;
        } else if (number < 28) {
            alert('Too low! Try again');
            counter++;
        }
    }
    if (number === 28) {
        alert('Great , That is Right');
        score++;
        counter = 5;
    }
}

guessSum();


function FavColor() {
    var myFavcolor = ['black', 'green', 'blue', 'white'];

    for (var i = 0; i <7 ; i++) {
        var useranswer = prompt('What is my favorite color?');
        var answer = useranswer.toLowerCase();

        for (var j = 0; j < myFavcolor.length; j++){
            if (answer === myFavcolor[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

FavColor();

alert('My favorite colors are: black, green, blue, white');

alert('Good Job!... You got ' + score + ' correct answers!');

alert (" Thanks for your time"+ username)