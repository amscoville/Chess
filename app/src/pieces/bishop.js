import Piece from './piece';
import BoardState from '../board/boardState';


export default class Bishop extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2657' : '265D';
		super(color, row, col, img);
		this.targets = [];
	}

	getTargets(row, col) {
		this.targets = [];
		const origCol = Number(col);
		const origRow = Number(row);
		const northEastTargs = findNorthEastTargs(origRow, origCol);
		const southWestTargs = findSouthWestTargs(origRow, origCol);
		const northWestTargs = findNorthWestTargs(origRow, origCol);
		const southEastTargs = findSouthEastTargs(origRow, origCol);
		this.targets.push(...northEastTargs, ...southWestTargs, ...northWestTargs, ...southEastTargs);
		return this.targets;
	}
}

function findNorthEastTargs(row, col) {
	const arr = [];
	let newRow = row;
	for (let i = col + 1; i < 8; i++) {
		newRow++;
		if (BoardState.describeSquare(newRow, i) === 'king') {
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'empty') {
			arr.push(`${newRow}${i}`);
		} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
			arr.push(`${newRow}${i}`);
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'ally') {
			break;
		}
	}
	return arr;
}

function findSouthWestTargs(row, col) {
	const arr = [];
	let newRow = row;
	for (let i = col - 1; i >= 0; i--) {
		newRow--;
		if (BoardState.describeSquare(newRow, i) === 'king') {
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'empty') {
			arr.push(`${newRow}${i}`);
		} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
			arr.push(`${newRow}${i}`);
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'ally') {
			break;
		}
	}
	return arr;
}

function findNorthWestTargs(row, col) {
	const arr = [];
	let newRow = row;
	for (let i = col - 1; i >= 0; i--) {
		newRow++;
		if (BoardState.describeSquare(newRow, i) === 'king') {
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'empty') {
			arr.push(`${newRow}${i}`);
		} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
			arr.push(`${newRow}${i}`);
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'ally') {
			break;
		}
	}
	return arr;
}

function findSouthEastTargs(row, col) {
	const arr = [];
	let newRow = row;
	for (let i = col + 1; i < 8; i++) {
		newRow--;
		if (BoardState.describeSquare(newRow, i) === 'king') {
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'empty') {
			arr.push(`${newRow}${i}`);
		} else if (BoardState.describeSquare(newRow, i) === 'enemy') {
			arr.push(`${newRow}${i}`);
			break;
		} else if (BoardState.describeSquare(newRow, i) === 'ally') {
			break;
		}
	}
	return arr;
}
