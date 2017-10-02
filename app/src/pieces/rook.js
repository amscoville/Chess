import Piece from './piece';
import BoardState from '../board/boardState';

// const $ = require('jquery');

let pieceIsEnemy;
let isAlly;

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

	isTarget(row, col) {
		if (BoardState.describeSquare(row, col) === 'empty' && !isAlly) {
			return true;
		} else if (BoardState.describeSquare(row, col) === 'empty' && isAlly) {
			return false;
		} else if (BoardState.describeSquare(row, col) === 'empty' && !pieceIsEnemy) {
			return true;
		} else if (BoardState.describeSquare(row, col) === 'empty' && pieceIsEnemy) {
			return false;
		} else if (BoardState.describeSquare(row, col) === 'enemy' && !pieceIsEnemy && !isAlly) {
			pieceIsEnemy = true;
			return true;
		} else if (BoardState.describeSquare(row, col) === 'enemy' && pieceIsEnemy) {
			return false;
		} else if (BoardState.describeSquare(row, col) === 'ally' && !isAlly) {
			isAlly = true;
			return false;
		} else if (BoardState.describeSquare(row, col) === 'ally' && isAlly) {
			return false;
		} else if (BoardState.describeSquare(row, col) === 'invalid') {
			return false;
		} else {
			return false;
		}
	}

	checkColForward(row, col) {
		let newCol = col;
		const arr = [];
		pieceIsEnemy = false;
		isAlly = false;
		for (let i = col + 1; i < 8; i++) {
			newCol++;
			const square = `${row}${newCol}`;
			if (this.isTarget(row, newCol)) {
				arr.push(square);
			}
		}
		return arr;
	}

	checkColBackward(row, col) {
		let newCol = col;
		const arr = [];
		pieceIsEnemy = false;
		isAlly = false;
		for (let i = col - 1; i >= 0; i--) {
			newCol--;
			const square = `${row}${newCol}`;
			if (this.isTarget(row, newCol)) {
				arr.push(square);
			}
		}
		return arr;
	}

	checkRowForward(row, col) {
		const arr = [];
		let newRow = row;
		pieceIsEnemy = false;
		isAlly = false;
		for (let i = row + 1; i < 8; i++) {
			newRow++;
			const square = `${newRow}${col}`;
			if (this.isTarget(newRow, col)) {
				arr.push(square);
			}
		}
		return arr;
	}

	checkRowBackward(row, col) {
		const arr = [];
		let newRow = row;
		pieceIsEnemy = false;
		isAlly = false;
		for (let i = row - 1; i >= 0; i--) {
			newRow--;
			const square = `${newRow}${col}`;
			if (this.isTarget(newRow, col)) {
				arr.push(square);
			}
		}
		return arr;
	}
}

