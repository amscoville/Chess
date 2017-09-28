import Piece from './piece';
import BoardState from '../board/boardState';


export default class Knight extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2658' : '265E';
		super(color, row, col, img);
	}
}
