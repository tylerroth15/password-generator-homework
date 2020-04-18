// Assignment Code !!!!everything we are changing is in here!!!

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password= "";
  var pwdLength = Number(prompt("How long would you like your password to be? Please choose between 8 and 128 characters."));

  while (isNaN(pwdLength) ||pwdLength <8 ||pwdLength >128) pwdLength = Number(prompt("You must choose a password length between 8 and 128. How long would you like your password to be?"));

  var uppercase= confirm ("Would you like to use uppercase letters?");
  var lowercase= confirm ("Would you like to use lower case letters?");
  var number = confirm ("Would you like to use numbers?");
  var symbol = confirm ("Would you like to include special characters?");


  while (!uppercase && !lowercase && !number && !symbol){
    alert("You must choose at least ONE special character type!");
    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm ("Would you like to use lower case letters?");
    number = confirm ("Would you like to use numbers?");
    symbol = confirm ("would you like to include special characters?");
  }

  var allowed = [];
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specials = "!@#$%^&*()";
  var count = 0;

  if(uppercase) {
  allowed += uppers;
  password += uppers.charAt(Math.floor(Math.random()*uppers.length));
  count++;
  console.log(password);
  }

  if(lowercase) {
  allowed += lowers;
  password += lowers.charAt(Math.floor(Math.random()*lowers.length));
  count++;
  console.log(password);
  }

  if(number) {
  allowed += numbers;
  password += numbers.charAt(Math.floor(Math.random()*number.length));
  count++;
  console.log(password);
  }

  if (symbol) {
  allowed += specials;
  password += numbers.charAt(Math.floor(Math.random() * specials.length));
  count++;
  console.log(password);
  }

  for (count; count < pwdLength; count++){
    password += allowed.charAt(Math.floor(Math.random()*allowed.length));
  }
    return password;
}



