const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const body = document.body;

// Create an image dynamically & set attributes
// Create image element
const img = document.createElement("img");
img.classList.add("image");
img.src = "https://i.ibb.co/VW474FJH/6149693720019191186.jpg"; // ✅ Direct link

// Append the image inside the wrapper but keep it hidden initially
img.style.display = "none";
document.querySelector(".wrapper").appendChild(img); // ✅ Append only once

// When "Yes" button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = `
    <span style="color: white; font-size: 32px; font-weight: bold;">
  Opps Sorry, you didn't have the "No" option 😔🌻
</span>

    
`;

    
    img.style.display = "block"; // ✅ Show image with correct size
    document.querySelector(".gif").style.display = "none"; // Hide GIF
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
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Ensure the "No" button stays inside wrapper
    const maxX = wrapperRect.width - noBtnRect.width - 10;
    const maxY = wrapperRect.height - noBtnRect.height - 10;

    const randomX = Math.max(0, Math.min(Math.random() * maxX, maxX));
    const randomY = Math.max(0, Math.min(Math.random() * maxY, maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
