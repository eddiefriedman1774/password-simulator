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
  let passwlength = parseInt(numberinput.value); 
  if (passwlength >=8 && passwlength <128){
    //what will run within the expression
    let includecapletters = caplettersinput.checked;
    let includelow = lowlettersinput.checked;
    let includenum = numlettersinput.checked;
    let includeS = speciallettersinput.checked;
    if (includecapletters || includelow || includeS || includenum) {
      let charset = "";
      if (includecapletters){
        charset=charset+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      } 
      if (includelow){
          charset=charset+"abcdefghijklmnopqrstuvwxyz"
      }
      if (includenum){
        charset=charset+"1234567890"
      }
      if(includeS){
        charset=charset+"!@#$%^&*()_+"
      }
      let password = "";
      for(let i=0; i<passwlength; i+=1){
        //repeating code multiple times, set 
      let character = charset[Math.floor(Math.random()*charset.length)];
      password = password + character;
      } 
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
      popup.style.visibility = "hidden";
    }
}
}

//.value -- string; do math, cant do math to a string --> number 

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
