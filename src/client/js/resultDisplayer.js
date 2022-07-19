const resultSection = document.getElementById("result");

function hideResultSection() {
    resultSection.style.display = "none";
}

function showResultSection() {
    resultSection.style.display = "block";
}

export { hideResultSection, showResultSection }