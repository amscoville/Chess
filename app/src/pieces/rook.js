import Piece from './piece';
// import BoardState from '../board/boardState';


export default class Rook extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2656' : '265C';
		super(color, row, col, img);
	}
}
