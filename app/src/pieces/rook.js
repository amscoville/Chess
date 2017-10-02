import Piece from './piece';
import BoardState from '../board/boardState';

// const $ = require('jquery');

let pieceIsEnemy;
// let isAlly = false;

export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
		this.targets = [];
	}

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
		} else if (BoardState.describeSquare(row, col) === 'enemy' && !pieceIsEnemy) {
			pieceIsEnemy = true;
			return true;
		} else if (BoardState.describeSquare(row, col) === 'enemy' && pieceIsEnemy) {
			pieceIsEnemy = false;
			return false;
		} else if (BoardState.describeSquare(row, col) === 'ally' || BoardState.describeSquare(row, col) === 'invalid') {
			return false;
		} else {
			return false;
		}
	}

	addValidSquare(row, col, square) {
		const arr = [];
		if (this.isTarget(row, col)) {
			arr.push(square);
			return arr;
		}
		return arr;
	}

	checkColForward(row, col) {
		let newCol = col;
		const arr = [];
		for (let i = col + 1; i < 8; i++) {
			newCol++;
			const square = `${row}${newCol}`;
			arr.push(this.addValidSquare(row, newCol, square));
		}
		return arr;
	}

	checkColBackward(row, col) {
		let newCol = col;
		const arr = [];
		for (let i = col - 1; i >= 0; i--) {
			newCol--;
			const square = `${row}${newCol}`;
			arr.push(this.addValidSquare(row, newCol, square));
		}
		return arr;
	}

	checkRowForward(row, col) {
		const arr = [];
		let newRow = row;
		for (let i = row + 1; i < 8; i++) {
			newRow++;
			// const newRowStr = String(newRow);
			const square = `${newRow}${col}`;
			arr.push(this.addValidSquare(newRow, col, square));
		}
		return arr;
	}

	checkRowBackward(row, col) {
		const arr = [];
		let newRow = row;
		for (let i = row - 1; i >= 0; i--) {
			newRow--;
			const square = `${newRow}${col}`;
			arr.push(this.addValidSquare(newRow, col, square));
		}
		return arr;
	}
}

