import Piece from './piece';
// import BoardState from '../board/boardState';


export default class Pawn extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2659' : '265F';
		super(color, row, col, img);
	}
}
