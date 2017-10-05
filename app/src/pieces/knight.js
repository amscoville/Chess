import Piece from './piece';
import BoardState from '../board/boardState';


export default class Knight extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2658' : '265E';
		super(color, row, col, img);
		this.targets = [];
	}

	getTargets(row, col) {
		const origRow = Number(row);
		const origCol = Number(col);
		this.targets = [];
		this.possibleTargets = [
			`${origRow - 2}${origCol - 1}`,
			`${origRow - 2}${origCol + 1}`,
			`${origRow - 1}${origCol - 2}`,
			`${origRow - 1}${origCol + 2}`,
			`${origRow + 1}${origCol - 2}`,
			`${origRow + 1}${origCol + 2}`,
			`${origRow + 2}${origCol - 1}`,
			`${origRow + 2}${origCol + 1}`
		];
		for (let i = 0; i < this.possibleTargets.length; i++) {
			const newRow = this.possibleTargets[i][0];
			const newCol = this.possibleTargets[i][1];
			if (BoardState.describeSquare(newRow, newCol) === 'king') {
				continue;
			} else if (BoardState.describeSquare(newRow, newCol) === 'empty') {
				this.targets.push(this.possibleTargets[i]);
			} else if (BoardState.describeSquare(newRow, newCol) === 'enemy') {
				this.targets.push(this.possibleTargets[i]);
			} else if (BoardState.describeSquare(newRow, newCol) === 'ally') {
				continue;
			}
		}
		return this.targets;
	}
}
