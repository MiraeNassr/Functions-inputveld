const input = document.getElementById("irritant");

//input field run away whene you try to click it 
function moveInput() {
    input.style.left = Math.random() * window.innerWidth + "px";
    input.style.toop = Math.random() * window.innerHeight  + "px";
}