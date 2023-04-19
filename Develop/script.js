// Assignment code here generate password
function generatePassword() {
  let popup = document.getElementById("popup");
  popup.style.visibility = "visible";

}
function submitform(){
  let numberinput = document.getElementById("number");
  let caplettersinput = document.getElementById("capletters");
  let lowlettersinput = document.getElementById("lowletters");
  let numlettersinput = document.getElementById("numletters");
  let speciallettersinput = document.getElementById("specialletters");
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
