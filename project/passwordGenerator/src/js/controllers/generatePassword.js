import {
  getElements,
  staticValue,
  measurePasswordStrength,
} from "../helper.js";
export const generatePassword = () => {
  //getting elemnet from html
  const {
    password,
    passwordLength,
    passwordLengthValue,
    uppercase,
    lowercase,
    numbers,
    symbols,
  } = getElements();

  //getting static vlaue of checked boxes
  const { upperCaseChars, lowerCaseChars, numberChars, symbolChars } =
    staticValue();

  //password generate logic

  let chars = "";

  if (uppercase.checked) chars += upperCaseChars;
  if (lowercase.checked) chars += lowerCaseChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  console.log(chars);
  console.log(uppercase.checked);
  console.log(lowercase.checked);
  console.log(numbers.checked);
  console.log(symbols.checked);
  // If no character type is selected, prevent password generation
  if (chars.length === 0) {
    password.value = "Select at least one option!";
    return;
  }

  let length = passwordLength.value;
  passwordLengthValue.textContent = length;
  //generate password
  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    let randomCharacter = Math.floor(Math.random() * chars.length);
    generatedPassword += chars[randomCharacter];
  }

  password.value = generatedPassword;

  measurePasswordStrength(generatedPassword);

  return generatedPassword;
};
