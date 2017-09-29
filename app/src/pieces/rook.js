import Piece from './piece';
import BoardState from '../board/boardState';

const $ = require('jquery');


export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
		this.targets = [];
	}

	getTargets(row, col) {
		this.targets = [];
		let newCol = col;
		let newRow = row;
		for (let i = col; i < 8; i++) {
			newCol++;
			this.addToTargets(row, newCol);
		}
		for (let i = col; i >= 0; i--) {
			newCol--;
			this.addToTargets(row, newCol);
		}
		for (let i = row; i < 8; i++) {
			newRow++;
			this.addToTargets(newRow, col);
		}
		for (let i = row; i >= 0; i--) {
			newRow--;
			this.addToTargets(newRow, col);
		}
		return this.targets;
	}

	addToTargets(row, col) {
		if (BoardState.describeSquare(row, col) === 'empty' || BoardState.describeSquare(row, col) === 'enemy') {
			const square = $(`#${row}${col}`);
			this.targets.push(square);
		}
	}
}
