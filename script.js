// Elements
let passwordInput = document.getElementById("password");
let unlockButton = document.getElementById("unlockButton");
let envelope = document.getElementById("envelope");
let flap = document.getElementById("flap");
let mainPage = document.getElementById("mainPage");
let video = document.getElementById("video1");
let letter = document.getElementById("letter");
let nextButton = document.getElementById("nextButton");

const correctPassword = "rania"; // Correct password

// Add event listener to unlock button
unlockButton.addEventListener("click", checkPassword);

// Check password function
function checkPassword() {
    if (passwordInput.value === correctPassword) {
        unlockEnvelope();
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Unlock envelope function
function unlockEnvelope() {
    flap.style.transform = "rotateX(180deg)"; // Open the envelope
    envelope.style.transform = "scale(0.8)"; // Shrink envelope
    setTimeout(function () {
        envelope.style.display = "none"; // Hide envelope
        mainPage.style.display = "block"; // Show main content
        playVideo(); // Start playing video
    }, 1000); // Delay for animation
}

// Play the video
function playVideo() {
    video.style.opacity = 1; // Show the video
    video.play(); // Play the video
}

// Add event listener to the video for when it ends
video.addEventListener("ended", function() {
    nextButton.style.display = "block"; // Show the Next button after video ends
});

// Add event listener to the Next button
nextButton.addEventListener("click", showLetter); // Show letter after next button is clicked

// Show letter function
function showLetter() {
    nextButton.style.display = "none"; // Hide the next button
    letter.style.display = "block"; // Show the letter content

    // After the letter is visible, transition to full-screen letter
    setTimeout(function () {
        letter.classList.add("fullScreenLetter"); // Apply full-screen class to letter
    }, 500); // Delay to let the letter pop-up animation finish
}

