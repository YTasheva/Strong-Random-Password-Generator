// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", initApp);

// Function that order the calls of the other functions
function initApp() {
  let passLength = getPassLengthOptions();
  console.log(`Password Length: ${passLength}`);
  let options = getPassCharOptions(passLength);
  console.log(`User options:`);
  console.log(options);
  let charArray = generateCharArray(options);
  console.log(`Characters Array based on the user options: ${charArray}`);
  // let char = getRandomChararacter(charArray);
  let password = generatePassword(passLength, charArray);
  console.log(`Generated password: ${password}`);
  writePassword(password);
}

// Function to prompt user for password length options
function getPassLengthOptions() {
  let passLength = 0;
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(
      window.prompt(
        "Password must be at least 8 characters and no longer than 128 in length!\nClick ok to continue."
      )
    );
  }
  return passLength;
}

// Function to confirm the user password characters options
function getPassCharOptions() {
  let options = { upper: false, lower: false, numeric: false, special: false };
  while (
    !options.upper &&
    !options.lower &&
    !options.numeric &&
    !options.special
  ) {
    alert(
      `To generate a password select at least one of the four character types:
      1. Uppercase Letters: A-Z
      2. Lowercase Letters: a-z
      3. Numbers: 0-9
      4. Special Characters (for example ?!@*)
      `
    );
    options.upper = confirm(
      "Include Uppercase Letters:\n" +
        upperCasedCharacters.join("")
    );
    options.lower = confirm(
      "Include Lowercase Letters:\n" +
        lowerCasedCharacters.join("")
    );
    options.numeric = confirm(
      "Include Numbers:\n" + numericCharacters.join("")
    );
    options.special = confirm(
      "Include Special Characters:\n" +
        specialCharacters.join("")
    );
  }
  return options;
}

// Function for creating array based on the password options
function generateCharArray(options) {
  let charArray = [];
  if (options.upper) {
    charArray = charArray.concat(upperCasedCharacters);
  }
  if (options.lower) {
    charArray = charArray.concat(lowerCasedCharacters);
  }
  if (options.numeric) {
    charArray = charArray.concat(numericCharacters);
  }
  if (options.special) {
    charArray = charArray.concat(specialCharacters);
  }
  return charArray;
}

// Function for getting a random element from an array
function getRandomCharacter(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  // console.log(`${randomIndex} - ${array[randomIndex]}`);
  let char = array[randomIndex];
  return char;
}

// Function to generate password with user input
function generatePassword(passLength, charArray) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += getRandomCharacter(charArray);
  }
  return password;
}

// Write password to the #password input
function writePassword(password) {
 let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
