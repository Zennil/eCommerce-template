import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';
import { PedidosService } from '../services/pedidos.service';

@Component({
    selector: 'app-crear-pedido',
    templateUrl: './crear-pedido.component.html',
    styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

    productos: Producto[] = [];

    pedido: Pedido = new Pedido();

    constructor(private productosServicd: ProductosService, private pedidosService: PedidosService) {
        this.productosServicd.getProductos().subscribe(respuesta => {
            this.productos = respuesta as Producto[];
            console.log(this.productos);
        });
    }

    ngOnInit() { }

    savePedido() {
        this.pedidosService.savePedido(this.pedido);
        this.pedido = new Pedido();
    }

}
