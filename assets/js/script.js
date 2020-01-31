
var generateBtn = document.querySelector("#generate");

var listLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var listUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var listSpecials = [',','.','<','>','/','?','"',"'",';',':','+','-','*','=','\\','|','[',']','{','}','_','(',')','&','^','$','#','@','!','`','~'];
var passwordChoice = []

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {


var passLength = parseInt(prompt("choose a password between 8-128 characters"));


var confirmLowercase = confirm("do you want to use a lower case letter?");

if (confirmLowercase) {
  passwordChoice.push(listLowercase)
}

var confirmUppercase = confirm("do you want to use Upper case letter?");

if (confirmUppercase) {
  passwordChoice.push(listUppercase)
}


var confirmListNumbers = confirm("do you want to use a numbers?");

if (confirmListNumbers) {
  passwordChoice.push(listNumbers)
}


var confirmlistSpecials = confirm("do you want to use a special characters?");

if (confirmlistSpecials) {
  passwordChoice.push(listSpecials)
}

myPassword =""
//check on your class activites and review your loops!
for (var i = 0; i <passLength; i++){
  var arrayP = Math.floor(Math.random() * passwordChoice.length)
  var charNums = Math.floor(Math.random() * passwordChoice[arrayP].length)
  // myPassword += passwordChoice[arrayP][charNums]
  console.log(passwordChoice)
}
//check to make sure that the pw {} is between 8 -128 characters


//check to make sure they pick atleast one of the 4 criteria
//if all criteria is valaidated I will generate a password
//return the password regenerated
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
