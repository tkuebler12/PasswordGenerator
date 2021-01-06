// Assignment Code
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacter = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","|"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getPasswordRequirements () {
    var passwordLength = parseInt (prompt("How long would you like your password to be?"))
    console.log (typeof (passwordLength))
    if (isNaN(passwordLength)){
      alert("Please enter a number.");
      return;
    }
    if (passwordLength < 8){
      alert("Please choose a number greater than 8.");
      return;
    }
    if (passwordLength > 128){
      alert("Please choose a number less than 128.");
      return;
    }
var containsSpecialCharacters = confirm("Click the OK button to confirm special characters in password.");
var containsNumbers = confirm("Click the OK button to confirm numbers in password");
var containsUpperCase = confirm("Click the OK button to confirm uppercase letters in password");
var containsLowerCase = confirm("Click the OK button to confirm lowercase letters in password");
    if (containsSpecialCharacters === false && containsNumbers === false && containsUpperCase === false && containsLowerCase === false){
      alert("Please select at least one character type.");
      return;
    } 
    var passwordOptions = {
      passwordLength: passwordLength,
      containsSpecialCharacters: containsSpecialCharacters,
      containsUpperCase: containsUpperCase,
      containsLowerCase: containsLowerCase,
      containsNumbers: containsNumbers
    }
    return passwordOptions;
}
function getRandomCharacter(arr){
  var randomCharacter = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomCharacter];
  return randomElement;
}
function generatePassword(){
  var options = getPasswordRequirements();
  // Create arr that stores final password
  // Create arr that stores possible characters
  // Create arr that stores garaunteed characters used
  // 4 Conditional statements that check if values from object are true (options.hasSpecialCharacters)
    // combine possible characters with special characters
    // call getRandomFunction, pass the arr (special characters arr)
    // push random character into specialCharacters arr x4 (num, upper, lower)
    // for loop that goes over password.length that gets random possible characters from function
    // push possible random character to arr that stores final password
    // for loop that mixes in different character types (compare against garaunteedcharacter arr.length)
    // index of final arr = index of garaunteed characters arr
    // results of final password in arr
    // return arr that stores final pw ".join" to form string
    
  // }
  // 
}
getPasswordRequirements()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
