var hasWon = false;
window.rollDice = ()=>{
  if (hasWon) {
    return;
  }
  const max = 6;
  const roll = Math.ceil(Math.random() * max);
  document.getElementById("demo").innerHTML = players.name + ", you rolled   " + roll;
  let currentPlayer = players[currentPlayerTurn];
  currentPlayer.position += roll;
  ladders.forEach(ladder=>{
    if (ladder.start === currentPlayer.position) {
      window.alert ("You stepped on a ladder!");
      currentPlayer.position = ladder.end;
    }
  });

  if (currentPlayer.position === position) {
    window.alert ("Player has won!");
    hasWon = true;
  }
  if (currentPlayer.position === position) {
    const diff = currentPlayer.position - position;
    currentPlayerPosition = position - diff;
  }

  currentPlayerTurn ++;
  if (currentPlayerTurn >= players.length) {
    currentPlayerTurn = 0;
  }
  renderBoard();
}

const players = [{name:"Player1",position: 0},{name:"Player2",position: 0}];

let currentPlayerTurn = 0;
const width = 5;
const height = 5;
const board = [];
let position = 0;
const ladders = [{
  start: 15,
  end: 5
},{
  start: 23,
  end: 16
},{
  start: 8,
  end: 15
},{
  start: 19,
  end: 24
}];

for (var y = height; y >= 0; y--) {
  let row = [];

  board.push(row);
  for (var x = 0; x < width; x++) {

    row.push({x,y,occupied:null,position,});
    position ++;
  }
}
const isLadder = ladder.end > ladder.start;
