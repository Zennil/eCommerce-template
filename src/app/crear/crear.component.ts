import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

    producto: Producto = new Producto();

    constructor(private productoService: ProductosService) { }

    ngOnInit() {

    }

    saveProducto() {
        this.producto.id = Date.now();
        this.producto.imagen = 'assets/img/pictures.png';
        this.productoService.saveProducto(this.producto);
        // this.producto = new Producto();
    }
}
