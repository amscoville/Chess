export default class Piece {
	constructor(color, row, col, img) {
		this.color = color;
		this.row = row;
		this.col = col;
		this.img = String.fromCharCode(parseInt(img, 16));
	}

	spaceToArr(row, col) {
		const arr = [];
		const square = `${row}${col}`;
		arr.push(square);
		return arr;
	}
}

