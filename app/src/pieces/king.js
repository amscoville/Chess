import Piece from './piece';
import BoardState from '../board/boardState';


export default class King extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2654' : '265A';
		super(color, row, col, img);
	}

	getTargets() {
		const arr = [];
		const possibleTargs = [
			`${+this.row - 1}${this.col}`,
			`${+this.row - 1}${+this.col + 1}`,
			`${this.row}${+this.col + 1}`,
			`${+this.row + 1}${+this.col + 1}`,
			`${+this.row + 1}${this.col}`,
			`${+this.row + 1}${+this.col - 1}`,
			`${this.row}${+this.col - 1}`,
			`${+this.row - 1}${+this.col - 1}`
		];
		for (let i = 0; i < possibleTargs.length; i++) {
			if (BoardState.describeSquare(possibleTargs[i][0], possibleTargs[i][1]) === 'enemy') {
				arr.push(possibleTargs[i]);
			} else if (BoardState.describeSquare(possibleTargs[i][0], possibleTargs[i][1]) === 'empty') {
				arr.push(possibleTargs[i]);
			}
		}
		return arr;
	}
}
