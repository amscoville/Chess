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
	const row = coordinates[0];
	const col = coordinates[1];
	const targets = BoardState.state[row][col].getTargets(row, col);
	// targets is an array of objects, so i need to either make it an array of id's or
	// find out how to pull the id from each object as I loop through the array
	if ($(`#${row}${col}`).hasClass('highlight')) {
		BoardState.state[row][col].move(row, col);
	} else {
		$(`#${row}${col}`).addClass('originalSquare');
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

function displayPiece() {
	for (let i = 0; i < 8; i++) {
		if (i === 1) {
			BoardState.state[i] = new Array(8);
		} else {
			for (let j = 0; j < BoardState.state[i].length; j++) {
				if (BoardState.state[i][j]) {
					$(`#${BoardState.state[i][j].row}${BoardState.state[i][j].col}`).html(BoardState.state[i][j].img);
				}
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
		const elem = arr[i];
		const newCoords = elem.split('');
		const targRow = newCoords[0];
		const targCol = newCoords[1];
		$(`#${targRow}${targCol}`).addClass('highlight');
	}
}
