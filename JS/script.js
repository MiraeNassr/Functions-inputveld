const input = document.getElementById("irritant");

// 1. Input field runs away when you try to click it
function moveInput() {
    input.style.left = Math.random() * window.innerWidth + "px";
    input.style.top = Math.random() * window.innerHeight + "px";
}
input.addEventListener("mouseover", moveInput);

// 2. Text changes automatically as you type
function changeText() {
    const replaceWords = ["Duck", "Banana", "Mustache", "404Error", "IDontKnow"];
    input.value = replaceWords[Math.floor(Math.random() * replaceWords.length)];
}
input.addEventListener("input", changeText);

// 3. Random error messages appear when you click on the field
function giveErrorMessage() {
    const errorMessages = [
        "Your name must not contain numbers! (Even if you don't type numbers)",
        "Invalid characters used. (We won't tell you which...)",
        "Sorry, your name is too short/long/perfect.",
        "This field only accepts Latin characters from the 14th century."
    ];
    alert(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
}
input.addEventListener("focus", giveErrorMessage);

 //4. Input field disappears after 5 seconds
function removeInput() {
    input.style.display = "none";
    alert("Too late! Your chance is over.");
}
setTimeout(removeInput, 5000);

// 5. Every letter you type asks for confirmation: "Are you sure?"
input.addEventListener("keydown", function(event) {
    const isConfirmed = confirm("Are you sure you want to type the letter '" + event.key + "'?");
    if (!isConfirmed) {
        event.preventDefault(); // Prevent the character from being entered if not confirmed
    }
});

// 6. Keyboard layout changes, A becomes O and B becomes X
const keyMap = {
    'a': 'o',
    'b': 'x',
    'v': 'm',
    'l': 's'
};
input.addEventListener("keypress", function(event) {
    const key = event.key.toLowerCase();
    if (keyMap[key]) {
        event.preventDefault();
        input.value += keyMap[key];
    }
});

// 7. Input field becomes invisible as soon as you start typing
input.addEventListener("input", function() {
    input.style.opacity = "0";
});

// 8. Play an annoying sound efect for letter typed
function playSound() {
    const sound = new Audio("https://www.soundjay.com/buttons/sounds/button-2.mp3");
    sound.play();
}
input.addEventListener("keydown", playSound);

// 9. Handle the CAPTCHA
const input2 = document.getElementById("captchaInput");

input2.addEventListener("input", () => {
    alert("Wrong answer! Try again.");
    input2.value = "";
});




