// Assignment Code !!!!everything we are changing is in here!!!

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var pwdLength = Number(prompt("How long would you like your password to be?"));

while (isNaN(pwdLength) ||pwdLength <8 ||pwdLength >128) pwdLength =Number(prompt("You must choose a password length between 8 and 128. How long would you like your password to be?"));

var uppercase= confirm ("Would you liketo use uppercase letters?");
var lowercase= confirm ("Would you like to use lower case letters?");
var number = confirm ("Would you like to use numbers?");
var symbol = confirm ("would you like to include special characters?");


while (!uppercase && !lowercase && !number && !symbol){
  alert("You must choose at least ONE special character type!");
  uppercase = confirm("Would you liketo use uppercase letters?");
  lowercase = confirm ("Would you like to use lower case letters?");
  number = confirm ("Would you like to use numbers?");
  symbol = confirm ("would you like to include special characters?");
  
}

function generatePassword(){
  var password = [];
  
  var allowed = {};
  var uppercase += ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var lowercase += ("abcdefghijklmnopqrstuvwxyz");
  var number += ("0123456789");
  var symbol += ("!@#$%^&*()");

  for (var i=pwdLength; i<pwdLength; i++){
    password += characters.charAt(Math.floor(Math.random()*characters.length));}
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// pwdLength = Number(prompt)("Choose a password")
// function generatePassword (){
//   var userInput = prompt("How long would you like your password? Must be 8-128 characters.");
// }


//   var "Character Types: Would you like to include lower case? Y/N", "Character Types: Would you like to include Uppercase? Y/N?", "Character Types: Would you like to include numeric characters? Y/N?", "Character Types: Would you like to include special characters? Y/N?")
 
// }
// if (userInput <8) 
//     alert ("Too Few Characters");
// else (userInput > 128)
//     alert ("Too Many Characters");

// if (userInput)


// ideas for functions and for loops

// function password(1,characters){
// var pwd = 'string';

// for (var i=0; i<l; i++){
//   password += characters.charAt(Math.floor(Math.random()*characters.length));}
//   return password;
// submit.addEventListener("click", function())

