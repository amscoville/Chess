import Piece from './piece';
import BoardState from '../board/boardState';


export default class Queen extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2655' : '265B';
		super(color, row, col, img);
	}
}
