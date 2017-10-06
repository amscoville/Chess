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

