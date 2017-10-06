import Piece from './piece';
import BoardState from '../board/boardState';

export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
		this.targets = [];
	}

	getTargets(row, col) { // check if it's the king
		const targets = [];
		const origCol = Number(col);
		const origRow = Number(row);
		const colFwdTargs = checkColForward(origRow, origCol);
		const colBackTargs = checkColBackward(origRow, origCol);
		const rowFwdTargs = checkRowForward(origRow, origCol);
		const rowBackTargs = checkRowBackward(origRow, origCol);
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
