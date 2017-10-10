import Piece from './piece';
import BoardState from '../board/boardState';


export default class Bishop extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2657' : '265D';
		super(color, row, col, img);
	}

	getTargets(forCheck) {
		const arr = [];
		const northEastTargs = findNorthEastTargs(+this.row, +this.col, forCheck);
		const southWestTargs = findSouthWestTargs(+this.row, +this.col, forCheck);
		const northWestTargs = findNorthWestTargs(+this.row, +this.col, forCheck);
		const southEastTargs = findSouthEastTargs(+this.row, +this.col, forCheck);
		arr.push(...northEastTargs, ...southWestTargs, ...northWestTargs, ...southEastTargs);
		return arr;
	}
}

function findSouthEastTargs(row, col, forCheck) {
	const arr = [];
	let newRow = row;
	for (let i = col + 1; i < 8; i++) {
		newRow++;
		if (forCheck === true) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		} else if (forCheck === false) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		}
	}
	return arr;
}

function findNorthWestTargs(row, col, forCheck) {
	const arr = [];
	let newRow = row;
	for (let i = col - 1; i < 8; i--) {
		newRow--;
		if (forCheck === true) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		} else if (forCheck === false) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		}
	}
	return arr;
}

function findSouthWestTargs(row, col, forCheck) {
	const arr = [];
	let newRow = row;
	for (let i = col - 1; i >= 0; i--) {
		newRow++;
		if (forCheck === true) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		} else if (forCheck === false) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		}
	}
	return arr;
}

function findNorthEastTargs(row, col, forCheck) {
	const arr = [];
	let newRow = row;
	for (let i = col + 1; i < 8; i++) {
		newRow--;
		if (forCheck === true) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		} else if (forCheck === false) {
			if (BoardState.describeSquare(newRow, i) === 'empty') {
				arr.push(`${newRow}${i}`);
			} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
				arr.push(`${newRow}${i}`);
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'enemyKing') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'ally') {
				break;
			} else if (BoardState.describeSquare(newRow, i) === 'invalid') {
				break;
			}
		}
	}
	return arr;
}
