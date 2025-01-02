export class Fighter{
    constructor(name, x, y, velocity){
        this.name = name;
        this.image = new Image();
        this.position = {
            x: x,
            y: y,
        };
        this.velocity = velocity;
    }

    update(secondsPassed, context){
        this.position.x += this.velocity * secondsPassed;
        if(this.position.x + this.image.width > context.canvas.width || this.position.x < 0){
            this.velocity *= -1;
        }
    }

    draw(context){
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}