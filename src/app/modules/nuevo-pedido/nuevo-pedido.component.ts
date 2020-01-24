import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/sliders.service';
import { Slider } from 'src/app/models/slider';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {

  sliderOfertasVet: Slider[] = [];
  sliderOfertasAgr: Slider[] = [];
  sliderOfertasAcs: Slider[] = [];

  resultProductos: Producto[] = [];
  arrayCantProd: number[] = [];

  pedidos: Pedido[] = [];

  cantidad: number;


  constructor(private sliderService: SliderService, private productosService: ProductosService, private pedidosService: PedidosService) {

    this.sliderOfertasVet = this.sliderService.getSlidOfertasByCateg('vet');
    this.sliderOfertasAgr = this.sliderService.getSlidOfertasByCateg('agr');
    this.sliderOfertasAcs = this.sliderService.getSlidOfertasByCateg('acs');

    this.productosService.getProductos().subscribe(respuesta => {
      this.resultProductos = respuesta as Producto[];
      this.resultProductos.forEach((producto) => this.arrayCantProd.push(null));
      console.log('Cantidad de elementos' + this.arrayCantProd.length);
      console.log(this.resultProductos);
    });

    this.pedidosService.getPedidos().subscribe(respuesta => {
      this.pedidos = [];
      respuesta.forEach((element: any) => {
        this.productosService.getProductoById(element.idProducto).subscribe(result => {
          element.producto = result as Producto;
          this.pedidos.push(element);
        });
      });
    });
  }

  ngOnInit() { }


  getTotalNeto(): number {
    let total = 0;
    this.pedidos.forEach(element => total = total + (element.cantidad * element.producto.cu));
    return total;
  }

  deletePedido(pedido: Pedido) {
    this.pedidosService.deletePedido(pedido);
  }

  addToStack(index: number) {
    const producto = this.resultProductos[index];
    console.log(producto);
    const valCant = this.arrayCantProd[index];
    const pedido: Pedido = {
      id: null,
      idUsuario: 1,
      idProducto: producto.id,
      cantidad: valCant
    };
    this.pedidosService.savePedido(pedido);
  }

}
