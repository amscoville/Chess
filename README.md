# Objective

Build a simple chess game using ES6 class syntax. Implement turns. Only allow pieces to move to empty spaces or capture enemy pieces. Do not allow the king to move into check.

During a turn, when a user clicks on one of their pieces, the spaces they can move to are highlighted. Clicking on a highlighted space moves the piece and ends the turn.

### Initial Gameboard

<img alt="initial-gameboard" src="./readme-images/main.png" width="400" height="400">

### Knight Move Options

<img alt="knight" src="./readme-images/knight.png" width="400" height="400">


### Queen Move Options

<img alt="queen" src="./readme-images/queen.png" width="400" height="400">


# Technologies Used
* HTML
* CSS
* JavaScript (ES6)

# Code Examples

All game pieces inherit properties from the Piece class, shown below:

```
import BoardState from '../board/boardState';

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
}
```

Below, the Knight inherits from Piece and adds unique functionality:

```
import Piece from './piece';
import BoardState from '../board/boardState';


export default class Knight extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2658' : '265E';
		super(color, row, col, img);
	}

	getTargets(forCheck) {
		const arr = [];
		const possibleTargets = [
			`${+this.row - 2}${+this.col - 1}`,
			`${+this.row - 2}${+this.col + 1}`,
			`${+this.row - 1}${+this.col - 2}`,
			`${+this.row - 1}${+this.col + 2}`,
			`${+this.row + 1}${+this.col - 2}`,
			`${+this.row + 1}${+this.col + 2}`,
			`${+this.row + 2}${+this.col - 1}`,
			`${+this.row + 2}${+this.col + 1}`
		];
		for (let i = 0; i < possibleTargets.length; i++) {
			if (possibleTargets[i].length < 3) {
				const newRow = possibleTargets[i][0];
				const newCol = possibleTargets[i][1];
				if (BoardState.describeSquare(newRow, newCol) === 'empty') {
					arr.push(possibleTargets[i]);
				} else if (BoardState.describeSquare(newRow, newCol) === 'enemy') {
					arr.push(possibleTargets[i]);
				} else if (BoardState.describeSquare(newRow, newCol) === 'ally') {
					if (forCheck) {
						arr.push(possibleTargets[i]);
					} else {
						continue;
					}
				}
			}
		}
		return arr;
	}
}
```
# Future Ideas

Implement castling and en passant. Handle a win or loss.

# Challenges and Insights

The biggest challenge of this project was deciding how to break it down into smaller parts, and in what order to complete each part. It was the largest, most involved project I had completed to that point in my coding experience. The multiple moving parts and details to keep track of were overwhelming to me, and the fact that I wasn't very familiar with the rules of chess only added to the overwhelm. I had a difficult time knowing where to start. 

My first step was to understand the problem. I sat down with a friend and learned how to play chess on a physical chess board, which made me more familiar with the rules and the function of each piece. 

After I grasped the larger problem, I used pencil and paper to write out the process I would need to follow to build the app, starting with building the board and moving through each piece in the order it made most sense to build. I had to plan ahead for keeping track of where pieces were on the board, and what functionality was unique to each piece versus shared functionality that should be included in a generic Piece class. 

After conceptualizing and wire framing the project, I began to build the board. As it was my first time working with ES6 class syntax, I struggled with many steps along the way due to holes in my understanding of how classes worked. As with other projects, I learned that just doing it, trying solutions and breaking my app, is the best way to grasp the new concept. Using Chrome Dev Tools to debug my code became an exciting adventure. I enjoyed identifying the exact source of the problem and working to fix it.



