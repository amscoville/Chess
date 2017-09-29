import BoardState from './board/boardState';

require('../styles/chess.css');

const $ = require('jquery');

$(document).ready(() => {
	createBoard();
	displayPiece();
	$('#board > div > div').click(handleSquareClick);
});

function handleSquareClick(event) {
	const coordinates = getSquareData(event);
	const newRow = coordinates[0];
	const newCol = coordinates[1];
	BoardState.state[newRow][newCol].getTargets();
}

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
	for (let i = 0; i < BoardState.state.length; i++) {
		for (let j = 0; j < BoardState.state[i].length; j++) {
			if (BoardState.state[i][j]) {
				$(`#${BoardState.state[i][j].row}${BoardState.state[i][j].col}`).html(BoardState.state[i][j].img);
			}
		}
	}
}

function getSquareData(event) {
	const id = event.currentTarget.id;
	return id.split('');
}
