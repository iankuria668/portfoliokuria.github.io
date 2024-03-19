var myName;
var myAge;
var mySpiritAnimal;
function myQuiz(params) {
    myName = prompt("What is your name?");
    myAge = prompt("How old are you?");
    mySpiritAnimal = prompt("What is your spirit animal?");
    message = "Hello " + myName + "." + " Nice to meet you. " + "You are an amazing " + myAge + " year old" + " and I would love to know more about your spirit animal the " + mySpiritAnimal + " which all sounds very interesing"
alert(message);
}