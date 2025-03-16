const input = document.getElementById("irritant");
const input1 = document.getElementById("irritant1");
const input2 = document.getElementById("irritant2");
const input3 = document.getElementById("captchaInput");
const input4 = document.getElementById("irritant4");
const input5 = document.getElementById("irritant5");

// 1.runs away / input5
function moveInput() {
    input5.style.left = Math.random() * window.innerWidth + "px";
    input5.style.top = Math.random() * window.innerHeight + "px";
}
input5.addEventListener("mouseover", moveInput);

// 2. Text changes / input4
function changeText() {
    const replaceWords = ["Duck", "Banana", "Mustache", "404Error", "IDontKnow"];
    input4.value = replaceWords[Math.floor(Math.random() * replaceWords.length)];
}
input4.addEventListener("input", changeText);

// 3. Random error messages/ input
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

 //4.disappears / input1
function removeInput() {
    input1.style.display = "none";
    alert("Too late! Your chance is over.");
}
setTimeout(removeInput, 5000);

// 5.asks for confirmation /input2
input2.addEventListener("keydown", function(event) {
    const isConfirmed = confirm("Are you sure you want to type the letter '" + event.key + "'?");
    if (!isConfirmed) {
        event.preventDefault(); 
    }
});

// 6.change keys/input
const keyb = {
    'a': 'o',
    'b': 'x',
    'v': 'm',
    'l': 's'
};
input.addEventListener("keypress", function(event) {
    const key = event.key.toLowerCase();
    if (keyb[key]) {
        event.preventDefault();
        input.value += keyb[key];
    }
});

// 7.becomes invisible / input1
input1.addEventListener("input", function() {
    input1.style.opacity = "0";
});

// 8. annoying sound  /input2
function playSound() {
    const sound = new Audio("https://www.soundjay.com/buttons/sounds/button-2.mp3");
    sound.play();
}
input2.addEventListener("keydown", playSound);

// 9. the CAPTCH  /input3


input3.addEventListener("input", () => {
    alert("Wrong answer! Try again.");
    input3.value = "";
});




