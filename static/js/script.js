//Challenge 1: your age in days

function ageInDays(){
var birthYear = prompt('Enter your birth year');
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + (2020 - birthYear) * 365+ ' days old');
h1.setAttribute('id', 'ageInDays')
h1.appendChild(textAnswer);
document.getElementById('flex-box-res').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}