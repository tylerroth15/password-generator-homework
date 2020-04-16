// Assignment Code !!!!everything we are changing is in here!!!
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

// var all = uppercase + lowercase + numbers + symbols;
// var password = '';
// for (var i=0; i< 128; i++){
//     password += all.substring(character, character +1);
// }
// return password;

// This is not the correct code but keeping for Event Listner Ideas
// document.onload = function (){
//     var generateButton = document.querySelector('#generate');
//     generateButton.addEventListener('click', function(){				
//         document.querySelector('#password').value = generate();
//     });
// }

function generatePassword (){
  var userInput = prompt("How long would you like your password? Must be 8-128 characters.","Character Types: Would you like to include lower case? Y/N", "Character Types: Would you like to include Uppercase? Y/N?", "Character Types: Would you like to include numeric characters? Y/N?", "Character Types: Would you like to include special characters? Y/N?")
 
}
if (userInput <8) 
    alert ("Too Few Characters");
else (userInput > 128)
    alert ("Too Many Characters");

if (userInput)


// ideas for functions and for loops

// function password(1,characters){
// var pwd = 'string';

// for (var i=0; i<l; i++){
//     pwd += characters.charAt(Math.floor(Math.random()*characters.length));}
//     return pwd;
}

// submit.addEventListener("click", function())
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
