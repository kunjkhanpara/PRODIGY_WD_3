let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false; // Add a variable to track game over status

function handleClick(index) {
  if (!gameOver && !gameBoard[index]) { // Check if the game is not over
    gameBoard[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function renderBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.textContent = gameBoard[index];
  });
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      document.getElementById("status").textContent = `Player ${gameBoard[a]} wins!`;
      gameOver = true; // Set game over status to true
      return;
    }
  }
  if (!gameBoard.includes("")) {
    document.getElementById("status").textContent = "It's a tie!";
    gameOver = true; // Set game over status to true
  }
}

function resetGame() {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameOver = false; // Reset game over status
  renderBoard();
  document.getElementById("status").textContent = "";
}

renderBoard();
