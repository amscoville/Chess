# Objective

Build a chess game using ES6 class syntax.

### Initial Gameboard
<!-- ![initial game board](./readme-images/main.png) -->
<img alt="initial-gameboard" src="./readme-images/main.png" width="300" height="300">

### Knight Move Options
<!-- ![knight](./readme-images/knight.png) -->
<img alt="knight" src="./readme-images/knight.png" width="300" height="300">


### Queen Move Options
<!-- ![queen](./readme-images/queen.png) -->
<img alt="queen" src="./readme-images/queen.png" width="300" height="300">


# Technologies Used
* HTML
* CSS
* JavaScript (ES6)

# Code Examples

All game pieces inherit properties from the Piece class, shown below:

```import BoardState from '../board/boardState';

export default class Piece {
	constructor(color, row, col, img) {
		this.color = color;
		this.row = row;
		this.col = col;
		this.img = String.fromCharCode(parseInt(img, 16));
	}

	move(row, col) { // input is the row and column of square where piece will move
		BoardState.state[row][col] = BoardState.state[this.row][this.col];
		BoardState.state[this.row][this.col] = null;
		this.row = row;
		this.col = col;
	}
}```


