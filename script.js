document.addEventListener("DOMContentLoaded", function() {
    typeText();
});

const mainText = "Hello, welcome to my portfolio. Below is the link to each project and a description of each one. Feel free to browse and observe all the GitHub repositories.";
const additionalText = "➜ ";
const portfolioText = "portfolio: ";
const linkText = "https://github.com/marcojunior182/portfolio";
let index = 0;
let phase = 1;

function typeText() {
    if (phase === 1 && index < mainText.length) {
        document.getElementById("typed-text").innerHTML += mainText.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust the typing speed by changing the timeout value
    } else if (phase === 1 && index === mainText.length) {
        document.getElementById("typed-text").innerHTML += "<br><br>";
        index = 0;
        phase = 2;
        setTimeout(typeText, 100);
    } else if (phase === 2 && index < additionalText.length) {
        let arrowElement = document.createElement("span");
        arrowElement.style.color = "blue";
        arrowElement.innerHTML = additionalText.charAt(index);
        document.getElementById("typed-text").appendChild(arrowElement);
        index++;
        setTimeout(typeText, 100);
    } else if (phase === 2 && index === additionalText.length) {
        document.getElementById("typed-text").innerHTML += portfolioText;
        index = 0;
        phase = 3;
        setTimeout(typeText, 100);
    } else if (phase === 3 && index < linkText.length) {
        let linkElement = document.createElement("a");
        linkElement.href = linkText;
        linkElement.target = "_blank";
        linkElement.innerHTML = linkText;
        linkElement.style.textDecoration = "underline";
        document.getElementById("typed-text").appendChild(linkElement);
    }
}
