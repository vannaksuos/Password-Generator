
var generateBtn = document.querySelector("#generate");

var listLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var listUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var listSpecials = [',','.','<','>','/','?','"',"'",';',':','+','-','*','=','\\','|','[',']','{','}','_','(',')','&','^','$','#','@','!','`','~'];
var passwordChoice = []
var newPassWord = []
var emptyArray =[]
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

function passWordValidator() {

}



function generatePassword() {

  var passLength = parseInt(prompt("Choose a password Length between 8-128 characters"))

if (passLength < 8 || passLength > 128) {
  alert("Password length must be no less then 8 and no more then 128!")
  return generatePassword();
} 



var confirmLowercase = confirm("Do you want to use a lower case letter?")

if (confirmLowercase) {
  passwordChoice.push(listLowercase)
  listLowercase.push("nLowercase Letters")
  emptyArray.push("nemptyArray")
  alert("You have selected to use Lower case letters as a criteria!")
}

var confirmUppercase = confirm("Do you want to use Upper case letter?")

if (confirmUppercase) {
  passwordChoice.push(listUppercase)
  listUppercase.push("nUppercase Letter")
  alert("You have selected to use Upper case letters as a criteria!")
}

var confirmListNumbers = confirm("Do you want to use a numbers?")

if (confirmListNumbers) {
  passwordChoice.push(listNumbers)
  listNumbers.push("nNumbers")
  alert("You have selected to use Numbers as a criteria!")
}

var confirmlistSpecials = confirm("Do you want to use a special characters?")

if (confirmlistSpecials) {
  passwordChoice.push(listSpecials)
  listSpecials.push("nSpecial Characters")
  alert("You have selected to use Special Characters as a criteria!")
}

// if (confirmpasswordChoice) {

//   passwordChoice.length
// } 

myPassword =""

for (var i = 0; i <passLength; i++) {
  var arrayP = Math.floor(Math.random() * passwordChoice.length)
  var charNums = Math.floor(Math.random() * passwordChoice[arrayP].length)
  myPassword += passwordChoice[arrayP][charNums]
  return myPassword
}

console.log(passwordChoice)

//check to make sure they pick atleast one of the 4 criteria

}


//if all criteria is valaidated I will generate a password
//return the password regenerated


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
