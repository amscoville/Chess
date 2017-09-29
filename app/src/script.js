import BoardState from './board/boardState';

require('../styles/chess.css');

const $ = require('jquery');

$(document).ready(() => {
	createBoard();
	displayPiece();
});

function createBoard() {
	for (let i = 0; i < 8; i++) {
		const rowNum = String(i);
		const row = $('<div>');
		for (let j = 0; j < 8; j++) {
			const squareNum = String(j);
			const square = $('<div>');
			square.attr('id', `${rowNum}${squareNum}`);
			$(row).append(square);
		}
		$('#board').append(row);
	}
}

function displayPiece() {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < BoardState.state[i].length; j++) {
			if (BoardState.state[i][j]) {
				$(`#${BoardState.state[i][j].row}${BoardState.state[i][j].col}`).html(BoardState.state[i][j].img);
			}
		}
	}
}
