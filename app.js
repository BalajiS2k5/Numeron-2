
// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const start = document.getElementById("play-button");
start.onclick = () => {
  location.href = "./game.html";
};

