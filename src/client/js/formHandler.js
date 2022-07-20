import { callAnalyze } from "./service";
import { hideResultSection, showResultSection } from "./resultDisplayer";
import { checkForInput } from "./inputChecker";
function handleSubmit(event) {
  event.preventDefault();
  const formUrl = document.getElementById("url").value;
  const form = document.getElementById("analyze-form");

  // check input url validity
  if (!checkForInput(formUrl)) {
    return;
  }

  if (!form.checkValidity()) {
    return false;
  }

  hideResultSection();
  // make request to BE
  callAnalyze(formUrl).then(function (res) {
    if (res && !res.agreement) {
      alert("The sever return an error!!");
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
