import Piece from './piece';
// import BoardState from '../board/boardState';


export default class King extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2654' : '265A';
		super(color, row, col, img);
	}
}
