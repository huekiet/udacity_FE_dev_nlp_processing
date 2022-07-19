import { minSentenceLength } from "./config"
function checkForText(inputText) {
  if (inputText.length < minSentenceLength) {
    alert("Please enter a longer sentence");
    return false;
  } else {
    return true;
  }
}

export { checkForText };
