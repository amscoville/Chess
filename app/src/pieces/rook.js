import Piece from './piece';
import BoardState from '../board/boardState';

// const $ = require('jquery');

export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
		this.targets = [];
	}

	getTargets(row, col) { // check if it's the king
		this.targets = [];
		const origCol = Number(col);
		const origRow = Number(row);
		const colFwdTargs = this.checkColForward(origRow, origCol);
		const colBackTargs = this.checkColBackward(origRow, origCol);
		const rowFwdTargs = this.checkRowForward(origRow, origCol);
		const rowBackTargs = this.checkRowBackward(origRow, origCol);
		if (colFwdTargs !== []) {
			this.targets.push(...colFwdTargs);
		}
		if (colBackTargs !== []) {
			this.targets.push(...colBackTargs);
		}
		if (rowFwdTargs !== []) {
			this.targets.push(...rowFwdTargs);
		}
		if (rowBackTargs !== []) {
			this.targets.push(...rowBackTargs);
		}
		return this.targets;
	}

	spaceToArr(row, col) {
		const arr = [];
		const square = `${row}${col}`;
		arr.push(square);
		return arr;
	}


	checkColForward(row, col) {
		let newCol = col;
		const arr = [];
		for (let i = col + 1; i < 8; i++) {
			newCol++;
			if (BoardState.describeSquare(row, newCol) === 'empty') {
				arr.push(...this.spaceToArr(row, newCol));
			} else if (BoardState.describeSquare(row, newCol) === 'enemy') {
				arr.push(...this.spaceToArr(row, newCol));
				break;
			} else if (BoardState.describeSquare(row, newCol) === 'ally') {
				break;
			}
		}
		return arr;
	}

	checkColBackward(row, col) {
		let newCol = col;
		const arr = [];
		for (let i = col - 1; i >= 0; i--) {
			newCol--;
			if (BoardState.describeSquare(row, newCol) === 'empty') {
				arr.push(...this.spaceToArr(row, newCol));
			} else if (BoardState.describeSquare(row, newCol) === 'enemy') {
				arr.push(...this.spaceToArr(row, newCol));
				break;
			} else if (BoardState.describeSquare(row, newCol) === 'ally') {
				break;
			}
		}
		return arr;
	}

	checkRowForward(row, col) {
		const arr = [];
		let newRow = row;
		for (let i = row + 1; i < 8; i++) {
			newRow++;
			if (BoardState.describeSquare(newRow, col) === 'empty') {
				arr.push(...this.spaceToArr(newRow, col));
			} else if (BoardState.describeSquare(newRow, col) === 'enemy') {
				arr.push(...this.spaceToArr(newRow, col));
				break;
			} else if (BoardState.describeSquare(newRow, col) === 'ally') {
				break;
			}
		}
		return arr;
	}

	checkRowBackward(row, col) {
		const arr = [];
		let newRow = row;
		for (let i = row - 1; i >= 0; i--) {
			newRow--;
			if (BoardState.describeSquare(newRow, col) === 'empty') {
				arr.push(...this.spaceToArr(newRow, col));
			} else if (BoardState.describeSquare(newRow, col) === 'enemy') {
				arr.push(...this.spaceToArr(newRow, col));
				break;
			} else if (BoardState.describeSquare(newRow, col) === 'ally') {
				break;
			}
		}
		return arr;
	}
}

