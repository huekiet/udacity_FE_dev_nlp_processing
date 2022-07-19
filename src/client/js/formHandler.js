import { callAnalyze } from "./service";
import { hideResultSection, showResultSection } from "./resultDisplayer";
import { checkForText } from "./inputChecker";
function handleSubmit(event) {
  event.preventDefault();
  const formText = document.getElementById("txt").value;
  // check what text was put into the form field
  checkForText(formText);
  const form = document.getElementById("analyze-form");

  if (!form.checkValidity()) {
    return false;
  }

  hideResultSection();
  // make request to BE
  callAnalyze(formText).then(function (res) {
    if (res && !res.agreement) {
      alert("Invalid input, please enter in the correct format");
    } else {
      document.getElementById("irony").innerText = res.irony;
      document.getElementById("agreement").innerText = res.agreement;
      document.getElementById("subjectivity").innerText = res.subjectivity;
      document.getElementById("confidence").innerText = res.confidence;
      showResultSection();
    }
  });
  return true;
}

export { handleSubmit };
