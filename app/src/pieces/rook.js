import Piece from './piece';
import BoardState from '../board/boardState';

const $ = require('jquery');


export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
	}

	getTargets(row, col) {
		let newCol = col;
		const targets = [];
		for (let i = 0; i < 8; i++) {
			newCol++;
			if (BoardState.describeSquare(row, newCol) === 'empty' || BoardState.describeSquare(row, newCol) === 'enemy') {
				const square = $(`#${row}${newCol}`);
				// console.log(square);
				targets.push(square);
			}
		}
		return targets;
	}
}
