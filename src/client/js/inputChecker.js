function checkForInput(inputText) {
  try {
    // Check is url
    const isUrl = Boolean(new URL(inputText));
    return isUrl;
  } catch (e) {
    alert("Invalid input, please enter in the correct format");
    return false;
  }
}

export { checkForInput };
