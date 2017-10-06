import Piece from './piece';
import BoardState from '../board/boardState';

export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
		this.targets = [];
	}

	getTargets() { // check if it's the king
		const targets = [];
		const colFwdTargs = checkColForward(+this.row, +this.col);
		const colBackTargs = checkColBackward(+this.row, +this.col);
		const rowFwdTargs = checkRowForward(+this.row, +this.col);
		const rowBackTargs = checkRowBackward(+this.row, +this.col);
		targets.push(...colFwdTargs, ...colBackTargs, ...rowFwdTargs, ...rowBackTargs);
		return targets;
	}
}

function checkColForward(row, col) {
	const arr = [];
	for (let i = col + 1; i < 8; i++) {
		if (BoardState.describeSquare(row, i) === 'king') {
			break;
		} else if (BoardState.describeSquare(row, i) === 'empty') {
			arr.push(`${row}${i}`);
		} else if (BoardState.describeSquare(row, i) === 'enemy') {
			arr.push(`${row}${i}`);
			break;
		} else if (BoardState.describeSquare(row, i) === 'ally') {
			break;
		}
	}
	return arr;
}

function checkColBackward(row, col) {
	const arr = [];
	for (let i = col - 1; i >= 0; i--) {
		if (BoardState.describeSquare(row, i) === 'king') {
			break;
		} else if (BoardState.describeSquare(row, i) === 'empty') {
			arr.push(`${row}${i}`);
		} else if (BoardState.describeSquare(row, i) === 'enemy') {
			arr.push(`${row}${i}`);
			break;
		} else if (BoardState.describeSquare(row, i) === 'ally') {
			break;
		}
	}
	return arr;
}

function checkRowForward(row, col) {
	const arr = [];
	for (let i = row + 1; i < 8; i++) {
		if (BoardState.describeSquare(i, col) === 'king') {
			break;
		} else if (BoardState.describeSquare(i, col) === 'empty') {
			arr.push(`${i}${col}`);
		} else if (BoardState.describeSquare(i, col) === 'enemy') {
			arr.push(`${i}${col}`);
			break;
		} else if (BoardState.describeSquare(i, col) === 'ally') {
			break;
		}
	}
	return arr;
}

function checkRowBackward(row, col) {
	const arr = [];
	for (let i = row - 1; i >= 0; i--) {
		if (BoardState.describeSquare(i, col) === 'king') {
			break;
		} else if (BoardState.describeSquare(i, col) === 'empty') {
			arr.push(`${i}${col}`);
		} else if (BoardState.describeSquare(i, col) === 'enemy') {
			arr.push(`${i}${col}`);
			break;
		} else if (BoardState.describeSquare(i, col) === 'ally') {
			break;
		}
	}
	return arr;
}
