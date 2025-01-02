import { Fighter } from "./Fighter.js";

export class Bison extends Fighter{
    constructor(x, y, velocity){
        super('M. Bison', x, y, velocity);
        this.image = document.querySelector('img[alt="bison"]');
    }
}