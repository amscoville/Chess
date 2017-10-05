import BoardState from './board/boardState';

require('../styles/chess.css');

const $ = require('jquery');

// let pieceIsEnemy;
// let isAlly;

$(document).ready(() => {
	createBoard();
	displayPieces();
	$('#board > div > div').click(handleSquareClick);
});

function handleSquareClick(event) {
	const coordinates = getSquareData(event);
	const row = coordinates[0];
	const col = coordinates[1];
	if ($(`#${row}${col}`).hasClass('highlight')) {
		BoardState.move(row, col);
		$('div').removeClass('highlight');
	} else if (!($('div').hasClass('highlight'))) {
		$('div').removeClass('originalSquare');
		$(`#${row}${col}`).addClass('originalSquare');
		const targets = BoardState.state[row][col].getTargets(row, col);
		highlightTargets(targets, row, col);
	}
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

function displayPieces() {
	for (let i = 0; i < 8; i++) {
		if (i === 1) {
			BoardState.state[i] = [];
		}
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

function highlightTargets(arr, row, col) {
	$('.highlight').removeClass('highlight');
	$(`#${row}${col}`).addClass('highlight');
	for (let i = 0; i < arr.length; i++) {
		// check if not king
		$(`#${arr[i]}`).addClass('highlight');
	}
}
