const gameViewPort = {
    WIDTH: 384,
    HEIGHT: 224,
}

const canvasElement = document.querySelector('canvas');
const context = canvasElement.getContext('2d');
const ken = document.querySelector('img');

canvasElement.width = gameViewPort.WIDTH;
canvasElement.height = gameViewPort.HEIGHT;


context.strokeStyle = 'yellow';
context.moveTo(0, 0);
context.lineTo(gameViewPort.WIDTH, gameViewPort.HEIGHT);
context.moveTo(gameViewPort.WIDTH, 0);
context.lineTo(0, gameViewPort.HEIGHT);
context.stroke();

context.drawImage(ken, 0, 0);

console.log(context);