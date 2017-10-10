import Piece from './piece';
import BoardState from '../board/boardState';

export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
	}

	getTargets(forCheck) {
		const targets = [];
		const colFwdTargs = checkColPlus(+this.row, +this.col, forCheck);
		const colBackTargs = checkColMinus(+this.row, +this.col, forCheck);
		const rowFwdTargs = checkRowPlus(+this.row, +this.col, forCheck);
		const rowBackTargs = checkRowMinus(+this.row, +this.col, forCheck);
		targets.push(...colFwdTargs, ...colBackTargs, ...rowFwdTargs, ...rowBackTargs);
		return targets;
	}
}

function checkColPlus(row, col, forCheck) {
	const arr = [];
	for (let i = col + 1; i < 8; i++) {
		if (BoardState.describeSquare(row, i) === 'empty') {
			arr.push(`${row}${i}`);
		} else if (BoardState.describeSquare(row, i) === 'enemy') {
			arr.push(`${row}${i}`);
			break;
		} else if (BoardState.describeSquare(row, i) === 'enemyKing') {
			if (forCheck === true) {
				continue;
			} else {
				arr.push(`${row}${i}`);
				break;
			}
		} else if (BoardState.describeSquare(row, i) === 'ally') {
			break;
		}
	}
	return arr;
}

function checkColMinus(row, col, forCheck) {
	const arr = [];
	for (let i = col - 1; i >= 0; i--) {
		if (BoardState.describeSquare(row, i) === 'empty') {
			arr.push(`${row}${i}`);
		} else if (BoardState.describeSquare(row, i) === 'enemy') {
			arr.push(`${row}${i}`);
			break;
		} else if (BoardState.describeSquare(row, i) === 'enemyKing') {
			if (forCheck === true) {
				continue;
			} else {
				arr.push(`${row}${i}`);
				break;
			}
		} else if (BoardState.describeSquare(row, i) === 'ally') {
			break;
		}
	}
	return arr;
}

function checkRowPlus(row, col, forCheck) {
	const arr = [];
	for (let i = row + 1; i < 8; i++) {
		if (BoardState.describeSquare(i, col) === 'empty') {
			arr.push(`${i}${col}`);
		} else if (BoardState.describeSquare(i, col) === 'enemy') {
			arr.push(`${i}${col}`);
			break;
		} else if (BoardState.describeSquare(i, col) === 'enemyKing') {
			if (forCheck === true) {
				continue;
			} else {
				arr.push(`${i}${col}`);
				break;
			}
		} else if (BoardState.describeSquare(i, col) === 'ally') {
			break;
		}
	}
	return arr;
}

function checkRowMinus(row, col, forCheck) {
	const arr = [];
	for (let i = row - 1; i >= 0; i--) {
		if (BoardState.describeSquare(i, col) === 'empty') {
			arr.push(`${i}${col}`);
		} else if (BoardState.describeSquare(i, col) === 'enemy') {
			arr.push(`${i}${col}`);
			break;
		} else if (BoardState.describeSquare(i, col) === 'enemyKing') {
			if (forCheck === true) {
				continue;
			} else {
				arr.push(`${i}${col}`);
				break;
			}
		} else if (BoardState.describeSquare(i, col) === 'ally') {
			break;
		}
	}
	return arr;
}
