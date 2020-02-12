import { Injectable } from '@angular/core';
import { Slider } from '../models/slider';
import { Producto } from '../models/producto';
import { ProductosService } from './productos.service';

@Injectable({
    providedIn: 'root'
})
export class SliderService {

    constructor(private productosService: ProductosService) { }

    getSlidOfertasByCateg(categoria: string): Slider[] {

        const newSlider: Slider[] = [];

        this.productosService.getProductos().subscribe((respuesta: Producto[]) => {
            respuesta = respuesta.filter((producto) => producto.categoria === categoria);

            const chunkSize = 4;
            let count = 0;

            for (let index = 0; index < respuesta.length; index += chunkSize) {
                const myChunk = respuesta.slice(index, index + chunkSize);
                if (myChunk.length < 4) {
                    const diferencia = 4 - myChunk.length;
                    for (let i = 0; i < diferencia; i++) {
                        const producto: Producto = {
                            id: null,
                            nombre: 'Proximamente..',
                            descripcion: 'Mas infirmación',
                            imagen: 'assets/img/pictures.png',
                            cantidadxum: null,
                            categoria: null,
                            cu: null,
                            um: null
                        };
                        myChunk.push(producto);
                    }
                }
                newSlider.push(new Slider(count++, myChunk));
            }
        });

        return newSlider;
    }

}
