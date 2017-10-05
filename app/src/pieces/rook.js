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
		this.targets.push(...colFwdTargs, ...colBackTargs, ...rowFwdTargs, ...rowBackTargs);
		return this.targets;
	}

	checkColForward(row, col) {
		const arr = [];
		for (let i = col + 1; i < 8; i++) {
			if (BoardState.describeSquare(row, i) === 'empty') {
				arr.push(...this.spaceToArr(row, i));
			} else if (BoardState.describeSquare(row, i) === 'enemy') {
				arr.push(...this.spaceToArr(row, i));
				break;
			} else if (BoardState.describeSquare(row, i) === 'ally') {
				break;
			}
		}
		return arr;
	}

	checkColBackward(row, col) {
		const arr = [];
		for (let i = col - 1; i >= 0; i--) {
			if (BoardState.describeSquare(row, i) === 'empty') {
				arr.push(...this.spaceToArr(row, i));
			} else if (BoardState.describeSquare(row, i) === 'enemy') {
				arr.push(...this.spaceToArr(row, i));
				break;
			} else if (BoardState.describeSquare(row, i) === 'ally') {
				break;
			}
		}
		return arr;
	}

	checkRowForward(row, col) {
		const arr = [];
		for (let i = row + 1; i < 8; i++) {
			if (BoardState.describeSquare(i, col) === 'empty') {
				arr.push(...this.spaceToArr(i, col));
			} else if (BoardState.describeSquare(i, col) === 'enemy') {
				arr.push(...this.spaceToArr(i, col));
				break;
			} else if (BoardState.describeSquare(i, col) === 'ally') {
				break;
			}
		}
		return arr;
	}

	checkRowBackward(row, col) {
		const arr = [];
		for (let i = row - 1; i >= 0; i--) {
			if (BoardState.describeSquare(i, col) === 'empty') {
				arr.push(...this.spaceToArr(i, col));
			} else if (BoardState.describeSquare(i, col) === 'enemy') {
				arr.push(...this.spaceToArr(i, col));
				break;
			} else if (BoardState.describeSquare(i, col) === 'ally') {
				break;
			}
		}
		return arr;
	}
}

