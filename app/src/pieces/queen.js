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

	getTargets() {
		this.targets = [];
		const rookTargs = Rook.prototype.getTargets.call(this, this.row, this.col);
		const bishopTargs = Bishop.prototype.getTargets.call(this, this.row, this.col);
		this.targets.push(...rookTargs, ...bishopTargs);
		return this.targets;
	}
}
