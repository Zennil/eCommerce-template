import { Producto } from './producto';

export class Slider {
    position: number;
    section: Producto[] = [];
    constructor(position: number, section: Producto[]) {
        this.position = position;
        this.section = section;
    }
}
