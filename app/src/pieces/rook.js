import Piece from './piece';
import BoardState from '../board/boardState';

// const $ = require('jquery');


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
		let newCol = Number(col);
		let newRow = Number(row);
		for (let i = origCol + 1; i < 8; i++) {
			newCol++;
			const newColStr = String(newCol);
			this.addToTargets(row, newColStr);
		}
		for (let j = origCol - 1; j >= 0; j--) {
			newCol--;
			const newColStr = String(newCol);

			this.addToTargets(row, newColStr);
		}
		for (let k = origRow + 1; k < 8; k++) {
			newRow++;
			const newRowStr = String(newRow);
			this.addToTargets(newRowStr, col);
		}
		for (let l = origRow - 1; l >= 0; l--) {
			newRow--;
			const newRowStr = String(newRow);
			this.addToTargets(newRowStr, col);
		}
		return this.targets;
	}

	addToTargets(row, col) {
		if (BoardState.describeSquare(row, col) === 'empty') {
			const square = `${row}${col}`;
			this.targets.push(square);
		} else if (BoardState.describeSquare(row, col) === 'enemy') {
			const square = `${row}${col}`;
			this.targets.push(square);
			// stop it from going any further - can only move as far as first enemy's location
		}
	}
}
