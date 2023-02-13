function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "Tie";
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 1 wins";
  } else if (player.health < enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 2 wins";
  }
}

export default determineWinner;
