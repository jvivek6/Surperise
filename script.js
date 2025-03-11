const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const wrapper = document.querySelector(".wrapper");

// Check if wrapper exists
if (!wrapper) {
    console.error("Wrapper not found!");
}

// Create video element dynamically
const video = document.createElement("video");
video.classList.add("video");
video.src = "Video/Vee.video.mp4"; 
// Replace with your video URL
video.style.display = "none"; // Hide video initially
video.controls = true; // Show controls
video.playsInline = true;
video.loop = true; // Loop the video
video.muted = true; // Required for autoplay in some browsers
video.style.width = "100%"; // Set width to fill container
video.style.maxWidth = "400px"; // Limit max size
video.style.borderRadius = "10px"; // Rounded corners

// Append the video inside the wrapper
wrapper.appendChild(video);

// "Yes" button click event
yesBtn.addEventListener("click", () => {
    question.innerHTML = `
    <span style="color: white; font-size: 32px; font-weight: bold;">
        Oops Sorry, you didn't have a "No" option 🌻
    </span>`;

    video.style.display = "block"; // Show video
    video.play(); // Play video when shown

    // Hide GIF if it exists
    const gif = document.querySelector(".gif");
    if (gif) {
        gif.style.display = "none";
    }

    noBtn.style.display = "none"; // Hide "No" button

    startFallingSunflowers(); // Start animation
});

// 🌻 Sunflower Falling Effect
function startFallingSunflowers() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createSunflower();
        }, i * 200);
    }
}

function createSunflower() {
    const sunflower = document.createElement("div");
    sunflower.innerHTML = "🌻";
    sunflower.classList.add("sunflower"); // Use CSS for styling
    sunflower.style.left = Math.random() * window.innerWidth + "px";
    sunflower.style.top = "-50px";

    document.body.appendChild(sunflower);

    // Animate falling effect
    setTimeout(() => {
        sunflower.style.transform = `translateY(${window.innerHeight + 50}px)`;
        sunflower.style.opacity = "0";
    }, 100);

    // Remove after animation
    setTimeout(() => {
        sunflower.remove();
    }, 3000);
}

// 🚀 Move "No" Button Randomly
noBtn.addEventListener("mouseover", () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Ensure "No" button stays inside wrapper
    const maxX = wrapperRect.width - noBtnRect.width - 10;
    const maxY = wrapperRect.height - noBtnRect.height - 10;

    const randomX = Math.max(0, Math.min(Math.random() * maxX, maxX));
    const randomY = Math.max(0, Math.min(Math.random() * maxY, maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
