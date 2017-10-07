import Piece from './piece';
import BoardState from '../board/boardState';


export default class Knight extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2658' : '265E';
		super(color, row, col, img);
		this.targets = [];
	}

	getTargets(forCheck) {
		const arr = [];
		const possibleTargets = [
			`${+this.row - 2}${+this.col - 1}`,
			`${+this.row - 2}${+this.col + 1}`,
			`${+this.row - 1}${+this.col - 2}`,
			`${+this.row - 1}${+this.col + 2}`,
			`${+this.row + 1}${+this.col - 2}`,
			`${+this.row + 1}${+this.col + 2}`,
			`${+this.row + 2}${+this.col - 1}`,
			`${+this.row + 2}${+this.col + 1}`
		];
		for (let i = 0; i < possibleTargets.length; i++) {
			const newRow = possibleTargets[i][0];
			const newCol = possibleTargets[i][1];
			if (BoardState.describeSquare(newRow, newCol) === 'king') {
				continue;
			} else if (BoardState.describeSquare(newRow, newCol) === 'empty') {
				arr.push(possibleTargets[i]);
			} else if (BoardState.describeSquare(newRow, newCol) === 'enemy') {
				arr.push(possibleTargets[i]);
			} else if (BoardState.describeSquare(newRow, newCol) === 'ally') {
				if (forCheck) {
					arr.push(`${newRow}${i}`);
				} else {
					break;
				}
			}
		}
		return arr;
	}
}
