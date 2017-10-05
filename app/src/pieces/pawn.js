import Piece from './piece';
import BoardState from '../board/boardState';

const $ = require('jquery');


export default class Pawn extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2659' : '265F';
		super(color, row, col, img);
		this.color = color;
	}

	getTargets(row, col) {
		this.targets = [];
		const origRow = Number(row);
		const origCol = Number(col);
		if (this.color === 'black') {
			if (!$(`${row}${col}`).hasClass('hasMoved')) {
				this.targets.push(`${origRow + 1}${col}`, `${origRow + 2}${col}`);
			} else if ($(`${row}${col}`).hasClass('hasMoved')) {
				this.targets.push(`${origRow + 1}${col}`);
			}
			const possibleCaptures = [`${origRow + 1}${origCol - 1}`, `${origRow + 1}${origCol + 1}`];
			for (let i = 0; i < possibleCaptures.length; i++) {
				if (BoardState.describeSquare(possibleCaptures[i][0], possibleCaptures[i][1]) === 'enemy') {
					this.targets.push(possibleCaptures[i]);
				}
			}
		} else if (this.color === 'white') {
			if (!$(`${row}${col}`).hasClass('hasMoved')) {
				this.targets.push(`${origRow - 1}${col}`, `${origRow - 2}${col}`);
			} else if ($(`${row}${col}`).hasClass('hasMoved')) {
				this.targets.push(`${origRow - 1}${col}`);
			}
		}
		return this.targets;
	}
}

