

document.addEventListener('DOMContentLoaded', () => {


  let playerToggledivs = document.getElementById('player-select');
  let playerToggle = "X";
  console.log(playerToggledivs);

  playerToggledivs.addEventListener("click",(e) => {
    e.target.style.background = "green";
    playerToggledivs = document.getElementById(playerToggle);
    playerToggledivs.style.background = "white";
    if (playerToggle === "X") {
      playerToggle = "O";
    } else {
      playerToggle = "X";
    }
  });
});
