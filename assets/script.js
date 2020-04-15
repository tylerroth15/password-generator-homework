// Assignment Code !!!!everything we are changing is in here!!!
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){
  var userInput = prompt("special character", "lower case", "how many characters")
  return ""
}

if/else statements
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
