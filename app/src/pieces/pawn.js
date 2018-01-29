import Piece from './piece';
import BoardState from '../board/boardState';

export default class Pawn extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2659' : '265F';
		super(color, row, col, img);
		this.firstTurn = true;
	}

	getTargets(forCheck) {
		const arr = [];
		const dir = this.color === 'white' ? -1 : 1;
		const rowFwd = `${+this.row + dir}`;
		const rowFwdTwo = `${+this.row + dir + dir}`;
		const colLeft = `${+this.col - 1}`;
		const colRight = `${+this.col + 1}`;
		const colStr = `${+this.col}`;
		if (forCheck) {
			arr.push(rowFwd + colLeft);
			arr.push(rowFwd + colRight);
		} else if (!forCheck) {
			if (BoardState.describeSquare(rowFwd, colStr) === 'empty') {
				arr.push(rowFwd + colStr);
				if (this.firstTurn && BoardState.describeSquare(rowFwdTwo, colStr) === 'empty') {
					arr.push(rowFwdTwo + colStr);
				}
			}
			if (BoardState.describeSquare(rowFwd, colLeft) === 'enemy') {
				arr.push(rowFwd + colLeft);
			}
			if (BoardState.describeSquare(rowFwd, colRight) === 'enemy') {
				arr.push(rowFwd + colRight);
			}
		}
		return arr;
	}

	move(row, col) { // input is the row and column of square where piece will move
		BoardState.state[row][col] = BoardState.state[this.row][this.col];
		BoardState.state[this.row][this.col] = null;
		this.row = row;
		this.col = col;
		this.firstTurn = false;
	}
}
