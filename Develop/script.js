// Assignment Code -- #generate points to the id of the button
var generateBtn = document.querySelector("#generate");

// upper and lower case letters, characters, and numbers needed for function. 
var uNumbers = "a b c d e f g h i j k l m n o p q r s t u v w x y z".toUpperCase().split(" ");
var lNumbers = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var characters = "! ' * + , - . / : ; < = > ? @ ^ _ ` | ~".split(" ");
var numbers = "0 1 2 3 4 5 6 7 8 9";


// Write password to the #password input points to the blank text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompts that come up after pressing generate password
function generatePassword() {
  var passLength = prompt("Enter the number of characters for your new password. Password must be more than 12 characters but less than 128 characters in length.")

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");
}