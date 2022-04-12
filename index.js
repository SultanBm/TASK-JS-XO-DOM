// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

let X = [];
let O = [];

let counting = 1;
let X_check = false;
let O_check = false;
let letter = "X";
let button = [];

function clickButton(index) {
  if (counting <= 9) {
    if (button.indexOf(index) == -1) {
      button.push(index);
      fillButton(index, letter);
      counting += 1;

      if (letter === "X") {
        X.push(index);
        letter = "O";
        X_check = checkWinner(X);

        if (X_check) {
          setTimeout(() => {
            winningAlert("Player X");
          }, 500);
        }
      } else {
        O.push(index);
        letter = "X";
        O_check = checkWinner(O);

        if (O_check) {
          setTimeout(() => {
            winningAlert("Player O");
          }, 500);
        } else if (
          counting == 10 &&
          checkWinner(X) == false &&
          checkWinner(O) == false
        ) {
          setTimeout(() => {
            alert(`Draw`);
          }, 2000);
        }
      }
    }

    if (counting == 10 && checkWinner(X) == false && checkWinner(O) == false) {
      setTimeout(() => {
        alert(`Draw`);
      }, 500);
      setTimeout(500);
    }
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
function checkWinner(player) {
  let win = (playerArray, winningArray) =>
    winningArray.every((num) => playerArray.includes(num));

  if (player.length >= 3) {
    if (win(player, [1, 2, 3])) return true;
    else if (win(player, [1, 5, 9])) return true;
    else if (win(player, [1, 4, 7])) return true;
    else if (win(player, [2, 5, 8])) return true;
    else if (win(player, [3, 5, 7])) return true;
    else if (win(player, [3, 6, 9])) return true;
    else if (win(player, [4, 5, 6])) return true;
    else if (win(player, [7, 8, 9])) return true;
    else return false;
  }
}
