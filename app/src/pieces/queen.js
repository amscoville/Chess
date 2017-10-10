import Piece from './piece';
import Rook from '../pieces/rook';
import Bishop from '../pieces/bishop';
// import BoardState from '../board/boardState';


export default class Queen extends Piece {
	constructor(color, row, col) {
		const img = color === 'white' ? '2655' : '265B';
		super(color, row, col, img);
		this.rook = new Rook();
		this.bishop = new Bishop();
	}

	getTargets(forCheck) {
		const targets = [];
		const rookTargs = Rook.prototype.getTargets.call(this, forCheck);
		const bishopTargs = Bishop.prototype.getTargets.call(this, forCheck);
		targets.push(...rookTargs, ...bishopTargs);
		return targets;
	}
}
