const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const winWidth = window.innerWidth;

let squareSize = (winWidth / 6);
let x, y;
let mainStrokeSize = 4;
context.strokeStyle = mainStrokeSize;

const paintSquare = (x, y, size, strokeSize) => {
  context.lineWidth = strokeSize;
  context.beginPath();
  context.rect(x, y, size, size);
  context.stroke();
}

const paintSquares = () => {
  for (let xp = 0; xp < 5; xp ++) {
    for (let yp = 0; yp < 5; yp ++) {
      x = 100 + squareSize * xp;
      y = 100 + squareSize * yp;
      paintSquare(x, y, squareSize, mainStrokeSize);
    }
  }
}

paintSquares();