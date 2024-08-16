let tempColor = undefined

// Colors
const orange = window.getComputedStyle(document.documentElement).getPropertyValue("--color-primary");

function makeOrangeOnHover (text) {
    text.addEventListener("mouseover", function() {
        tempColor = window.getComputedStyle(text).color;
        text.style.color = orange;
    });
    text.addEventListener("mouseout", function() {
            text.style.color = tempColor;
    });
}


const welcomeText = document.getElementById("welcome");
const signUpButton = document.getElementById("sign-up");
const labels = document.getElementsByClassName("label");
makeOrangeOnHover(welcomeText);
makeOrangeOnHover(signUpButton);
for (let i = 0; i < labels.length; i++) {
    makeOrangeOnHover(labels[i]);
}