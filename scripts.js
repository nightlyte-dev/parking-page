// Random visitor counter
const visitorNum = Math.floor(Math.random() * 999999) + 1;
document.getElementById("visitor").textContent = String(visitorNum).padStart(
  6,
  "0"
);
