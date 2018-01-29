# Objective

Build a chess game using ES6 class syntax.

### Initial Game Board
![initial game board](./readme-images/main.png)

### Knight Move Options
![knight](./readme-images/knight.png)

### Queen Move Options
![queen](./readme-images/queen.png)

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


