import Piece from './piece';
import BoardState from '../board/boardState';


export default class Bishop extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2657' : '265D';
		super(color, row, col, img);
	}
}
