import Rook from '../pieces/rook';
import Knight from '../pieces/knight';
import Bishop from '../pieces/bishop';
import Queen from '../pieces/queen';
import King from '../pieces/king';
import Pawn from '../pieces/pawn';
import BoardState from '../board/boardState';

export default class Board {
	constructor() {
		this.state = [
			[
				new Rook('black', 0, 0),
				new Knight('black', 0, 1),
				new Bishop('black', 0, 2),
				new Queen('black', 0, 3),
				new King('black', 0, 4),
				new Bishop('black', 0, 5),
				new Knight('black', 0, 6),
				new Rook('black', 0, 7)
			],
			[
				new Pawn('black', 1, 0),
				new Pawn('black', 1, 1),
				new Pawn('black', 1, 2),
				new Pawn('black', 1, 3),
				new Pawn('black', 1, 4),
				new Pawn('black', 1, 5),
				new Pawn('black', 1, 6),
				new Pawn('black', 1, 7)
			],
			new Array(8),
			new Array(8),
			new Array(8),
			new Array(8),
			[
				new Pawn('white', 6, 0),
				new Pawn('white', 6, 1),
				new Pawn('white', 6, 2),
				new Pawn('white', 6, 3),
				new Pawn('white', 6, 4),
				new Pawn('white', 6, 5),
				new Pawn('white', 6, 6),
				new Pawn('white', 6, 7)
			],
			[
				new Rook('white', 7, 0),
				new Knight('white', 7, 1),
				new Bishop('white', 7, 2),
				new Queen('white', 7, 3),
				new King('white', 7, 4),
				new Bishop('white', 7, 5),
				new Knight('white', 7, 6),
				new Rook('white', 7, 7)
			]
		];
		this.turn = 'white';
		this.forCheck = false;
	}

	// checkTarget(target, piece) {
	// 	if (piece.attr('id') !== target.attr('id')) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	describeSquare(row, col) {
		if (!this.isOnTheBoard(row, col)) {
			return 'invalid';
		} else if (!this.pieceOnSpace(row, col)) {
			return 'empty';
		} else if (this.isEnemy(row, col)) {
			if (this.isKing(row, col)) {
				return 'enemyKing';
			}
			return 'enemy';
		}
		return 'ally';
	}

	isOnTheBoard(row, col) {
		return (row >= 0 && row < 8 && col >= 0 && col < 8);
	}

	pieceOnSpace(row, col) {
		return !!this.state[row][col];
	}

	isEnemy(row, col) {
		return this.state[row][col].color !== this.turn;
	}

	isKing(row, col) {
		const image = BoardState.state[row][col].img;
		const uni1 = '2654';
		const uni2 = '265A';
		const whiteKing = String.fromCharCode(parseInt(uni1, 16));
		const blackKing = String.fromCharCode(parseInt(uni2, 16));
		if (image === whiteKing || image === blackKing) {
			return true;
		}
		return false;
	}

	getEnemyTargets() {
		const arr = [];
		for (let i = 0; i < BoardState.state.length; i++) {
			for (let j = 0; j < BoardState.state[i].length; j++) {
				if (this.describeSquare(i, j) === 'enemy' || this.describeSquare(i, j) === 'enemyKing') {
					this.forCheck = true;
					arr.push(...BoardState.state[i][j].getTargets(this.forCheck));
				}
			}
		}
		this.forCheck = false;
		return arr;
	}

	changeTurn() {
		this.turn = this.turn === 'white' ? 'black' : 'white';
	}
}
