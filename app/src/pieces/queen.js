import Piece from './piece';
import Rook from '../pieces/rook';
import Bishop from '../pieces/bishop';
// import BoardState from '../board/boardState';


export default class Queen extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2655' : '265B';
		super(color, row, col, img);
		this.targets = [];
		this.rook = new Rook();
		this.bishop = new Bishop();
	}

	getTargets(row, col) {
		this.targets = [];
		const rookTargs = this.rook.getTargets(row, col);
		const bishopTargs = this.bishop.getTargets(row, col);
		this.targets.push(...rookTargs, ...bishopTargs);
		return this.targets;
	}
}
