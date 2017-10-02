import Piece from './piece';
import BoardState from '../board/boardState';

// const $ = require('jquery');

let isEnemy = false;
// let isAlly = false;

export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
		this.targets = [];
	}

	// get this to stop looping once it hits an enemy or ally, so it can't highlight beyond that space
	getTargets(row, col) {
		this.targets = [];
		const origCol = Number(col);
		const origRow = Number(row);
		const colFwdTargs = this.checkColForward(origRow, origCol);
		const colBackTargs = this.checkColBackward(origRow, origCol);
		const rowFwdTargs = this.checkRowForward(origRow, origCol);
		const rowBackTargs = this.checkRowBackward(origRow, origCol);
		this.targets.push(...colFwdTargs, ...colBackTargs, ...rowFwdTargs, ...rowBackTargs);
		return this.targets;
	}

	isTarget(row, col) {
		if (BoardState.describeSquare(row, col) === 'empty') {
			return true;
		} else if (BoardState.describeSquare(row, col) === 'enemy') {
			isEnemy = true;
			return true;
		} else if (BoardState.describeSquare(row, col) === 'ally' || BoardState.describeSquare(row, col) === 'invalid') {
			return false;
		} else {
			return false;
		}
	}

	addValidSquare(row, col, square) {
		const arr = [];
		if (this.isTarget(row, col) && !isEnemy) {
			arr.push(square);
		} else if (this.isTarget(row, col) && isEnemy) {
			arr.push(square);
			return arr;
		} else {
			return arr;
		}
		return arr;
	}

	checkColForward(row, col) {
		let newCol = col;
		let arr = [];
		for (let i = col + 1; i < 8; i++) {
			newCol++;
			const newColStr = String(newCol);
			const square = `${row}${newColStr}`;
			arr = this.addValidSquare(row, newColStr, square);
		}
		return arr;
	}

	checkColBackward(row, col) {
		let newCol = col;
		let arr = [];
		for (let i = col - 1; i >= 0; i--) {
			newCol--;
			const newColStr = String(newCol);
			const square = `${row}${newColStr}`;
			arr = this.addValidSquare(row, newColStr, square);
		}
		return arr;
	}

	checkRowForward(row, col) {
		let arr = [];
		let newRow = row;
		for (let i = row + 1; i < 8; i++) {
			newRow++;
			const newRowStr = String(newRow);
			const square = `${newRowStr}${col}`;
			arr = this.addValidSquare(newRowStr, col, square);
		}
		return arr;
	}

	checkRowBackward(row, col) {
		let arr = [];
		let newRow = row;
		for (let i = row - 1; i >= 0; i--) {
			newRow--;
			const newRowStr = String(newRow);
			const square = `${newRowStr}${col}`;
			arr = this.addValidSquare(newRowStr, col, square);
		}
		return arr;
	}
}

