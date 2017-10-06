import Piece from './piece';
// import BoardState from '../board/boardState';


export default class King extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2654' : '265A';
		super(color, row, col, img);
	}

	getTargets() {
		return [
			`${+this.row - 1}${this.col}`,
			`${+this.row - 1}${+this.col + 1}`,
			`${this.row}${+this.col + 1}`,
			`${+this.row + 1}${+this.col + 1}`,
			`${+this.row + 1}${this.col}`,
			`${+this.row + 1}${+this.col - 1}`,
			`${this.row}${+this.col - 1}`,
			`${+this.row - 1}${+this.col - 1}`
		];
	}
}
