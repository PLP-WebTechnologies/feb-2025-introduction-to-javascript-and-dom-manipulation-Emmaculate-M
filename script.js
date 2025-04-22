// Change text content dynamically
const textPara = document.getElementById("dynamic-text");
const changeTextBtn = document.getElementById("change-text-btn");

changeTextBtn.addEventListener("click", () => {
  textPara.textContent = "Thanks for visiting ParcelGo!";
  textPara.style.color = "#27ae60"; // Highlight Green
});

// Modify CSS styles and add/remove element
const toggleBoxBtn = document.getElementById("toggle-box-btn");
const extraBox = document.getElementById("extra-box");

toggleBoxBtn.addEventListener("click", () => {
  extraBox.classList.toggle("hidden");

  // Dynamically change background color
  if (!extraBox.classList.contains("hidden")) {
    extraBox.style.backgroundColor = "#f1c40f"; // Bright Yellow
  } else {
    extraBox.style.backgroundColor = "";
  }
});
