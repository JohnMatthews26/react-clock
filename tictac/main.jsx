

document.addEventListener('DOMContentLoaded', () => {

  let x = [];
  let o = [];
  let playerToggledivs = document.getElementById('player-select');
  let playerToggle = "X";

  playerToggledivs.addEventListener("click",(e) => {
    if (e.target.style.background !== "green"){
      e.target.style.background = "green";
      playerToggledivs = document.getElementById(playerToggle);
      playerToggledivs.style.background = "white";
      if (playerToggle === "X") {
        playerToggle = "O";
      } else {
        playerToggle = "X";
      }
    }

  });

  let board = document.getElementById("board");

  board.addEventListener("click", (e)=> {


  let htmlstring = e.target.innerHTML;
  htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');


    if (e.target.className == "row" && htmlstring == ''){
      e.target.innerHTML = playerToggle;
      document.getElementById(playerToggle).style.background = 'white';
      if (playerToggle === "X") {
        x.push(e.target.id);
        gameOver(x);
        playerToggle = "O";
        document.getElementById(playerToggle).style.background = 'green';
      } else {
        o.push(e.target.id);
        gameOver(o);
        playerToggle = "X";
        document.getElementById(playerToggle).style.background = 'green';
      }
    }
  });

  function resetBoard() {
    document.getElementById('board').innerHTML = "";
  }

  let winningCombos = [[1, 2, 3], [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [4, 5, 6], [7, 8, 9],[1, 5, 9], [3, 5, 7]];

  function gameOver(arr) {
    winningCombos.forEach(function(subarray){
      

    });
  }



});
