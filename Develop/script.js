// Assignment Code -- #generate points to the id of the button
var generateBtn = document.querySelector("#generateBtn");

// upper and lower case letters, characters, and numbers needed for character set. 
var uLetters = "a a b b c c d d e e f f g g h h i i j j k k l l m m n n o o p p q q r r s s t t u u v v w w x x y y z z".toUpperCase().split(" ");
var lLetters = "a a b b c c d d e e f f g g h h i i j j k k l l m m n n o o p p q q r r s s t t u u v v w w x x y y z z".split(" ");
var characters = "! ' * + , - . / : ; < = > ? @ ^ _ ` | ~ ! ' * + , - . / : ; < = > ? @ ^ _ ` | ~ ! ' * + , - . / : ; < = > ? @ ^ _ ` | ~".split(" ");
var charNumbers = "0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9".split(" ");

var passLength
var numbers 
var lowerCases
var upperCases 
var special

// this is the empty variables to catch the condition of the true / false confirm 
var totalCharacter = [];

// Write password to the #password points to the blank text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompts that come up after pressing generate password
function generatePassword() {
  passLength = prompt("Enter the number of characters for your new password. Password must be more than 12 characters but less than 128 characters in length.")

  if (passLength < 12 || passLength > 128) {
    alert("Password must be more than 12 characters but less than 128 characters in length.") 
  }

  numbers = confirm("Do you want numbers in your password?");

  lowerCases = confirm("Do you want lowercases in your password?");

  upperCases = confirm("Do you want uppercases in your password?");

  special = confirm("Do you want special characters in your password?");


  // check the condition of the confirm
  if (numbers === true) {
    for (let i = 0; i < charNumbers.length; i++) {
      totalCharacter.push(charNumbers[i]);
    }
  }

  if (lowerCases === true) {
    for (let i = 0; i < lLetters.length; i++) {
      totalCharacter.push(lLetters[i]);
    }
  }

  if (upperCases === true) {
    for (let i = 0; i < uLetters.length; i++) {
      totalCharacter.push(uLetters[i]);
    }
  }

  if (special === true) {
    for (let i = 0; i < characters.length; i++) {
      totalCharacter.push(characters[i]);
    }
  }


  // loop getting random characters

  var emptyPassword = "";

  for (let i = 0; i < (parseInt(passLength)); i++) {
    const randomLetterpicked = totalCharacter[Math.floor(Math.random() * totalCharacter.length)];

    emptyPassword += randomLetterpicked

  }

    return emptyPassword;

}


