import { Ken } from './entities/fighters/Ken.js';
import { Bison } from './entities/fighters/Bison.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/FpsCounter.js';

const gameViewPort = {
    WIDTH: 384,
    HEIGHT: 224,
}

const canvasElement = document.querySelector('canvas');
const context = canvasElement.getContext('2d');

canvasElement.width = gameViewPort.WIDTH;
canvasElement.height = gameViewPort.HEIGHT;

const entities = [
    new Stage(),
    new Ken(80, 110, 150),
    new Bison(80, 105, -150),
    new FpsCounter()
];

let previousTime = 0;
let secondsPassed = 0;

function frame(time){
    window.requestAnimationFrame(frame);
    
    secondsPassed = (time - previousTime) / 1000;
    previousTime = time;

    for(const entity of entities){
        entity.update(secondsPassed, context);
    }

    for(const entity of entities){
        entity.draw(context);
    }

    console.log(secondsPassed);

}

window.requestAnimationFrame(frame);

// console.log(context);