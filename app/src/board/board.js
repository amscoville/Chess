import Rook from '../pieces/rook';
import Knight from '../pieces/knight';
import Bishop from '../pieces/bishop';
import Queen from '../pieces/queen';
import King from '../pieces/king';
import Pawn from '../pieces/pawn';
import BoardState from '../board/boardState';

const $ = require('jquery');

// let isEnemy;

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
		this.turn = 'black';
		this.captured = [];
	}

	move(row, col) { // input is the row and column of a clicked square that is highlighted
		const piece = $('.originalSquare');
		const pieceID = piece.attr('id');
		const pieceRow = pieceID[0];
		const pieceCol = pieceID[1];
		const pieceImg = BoardState.state[pieceRow][pieceCol].img;
		const targetSpot = $(`#${row}${col}`);
		if (piece.color === 'white') { // change to piece.color !== this.turn after implementing turns
			this.captured = targetSpot.html;
		}
		targetSpot.html(pieceImg);
		piece.html('');
		piece.removeClass('originalSquare');
	}

	describeSquare(row, col) {
		if (!this.isOnTheBoard(row, col)) {
			return 'invalid';
		} else if (!this.pieceOnSpace(row, col)) {
			return 'empty';
		} else if (this.isEnemy(row, col)) {
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
		return this.state[row][col].color === 'white'; // change after implementing turns
		// return this.state[row][col].color !== this.turn;
	}
}

