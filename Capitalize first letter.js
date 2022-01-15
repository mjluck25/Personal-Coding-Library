
//for single word string

//.charAt(0) -- takes the character at index 0
//.slice(1) -- slices the string from index 1 onwards and returns the string

function toCapFirstLetter(userInput) {
  return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}